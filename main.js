(function () {
  'use strict';

  var LEAD_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxMLK1_cWatPH2IOvAIs2HJb8Wm4wwuLhLaRJtgF-k01vFHFC1TjSSpMLNMtkp9E2tr/exec';

  var header = document.getElementById('site-header');
  var navToggle = document.querySelector('.nav-toggle');
  var mobileNav = document.getElementById('mobile-nav');
  var isDarkHeader = header && header.classList.contains('header-dark');

  // ---- Sticky header + logo swap ----
  var logoDark = document.querySelector('.site-logo-dark');
  var logoLight = document.querySelector('.site-logo-light');

  function onScroll() {
    var scrolled = window.scrollY > 20;
    // Dark static header keeps ink background; skip scroll swap
    if (isDarkHeader) {
      header.classList.remove('scrolled');
      return;
    }
    header.classList.toggle('scrolled', scrolled);
    // Swap logo: white on transparent (dark hero), green on white bg
    if (logoDark && logoLight) {
      logoDark.style.display = scrolled ? 'none' : '';
      logoLight.style.display = scrolled ? '' : 'none';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- Mobile nav toggle ----
  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      mobileNav.setAttribute('aria-hidden', String(!isOpen));
    });

    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });

    // Close on outside tap
    document.addEventListener('click', function (e) {
      if (!mobileNav.classList.contains('open')) return;
      var target = e.target;
      if (!mobileNav.contains(target) && !navToggle.contains(target)) {
        mobileNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // ---- Smooth scroll with header offset ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var offset = header ? header.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // ---- Scroll reveal (IntersectionObserver) ----
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          var el = entry.target;
          // Stagger siblings in the same parent
          var siblings = Array.from(el.parentElement.querySelectorAll('.reveal:not(.visible)'));
          var idx = siblings.indexOf(el);
          el.style.transitionDelay = idx > 0 ? (idx * 80) + 'ms' : '0ms';
          el.classList.add('visible');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  // ---- Active nav link ----
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.primary-nav a, .mobile-nav a');

  function updateActiveNav() {
    var scrollMid = window.scrollY + window.innerHeight / 2;
    var active = null;
    sections.forEach(function (s) {
      if (s.offsetTop <= scrollMid) active = s.id;
    });
    navLinks.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + active);
    });
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ---- Dynamic classes counter ----
  // Base: 1000 classes as of 2026-06-19, incrementing 9 per week
  var classesEl = document.getElementById('classes-count');
  if (classesEl) {
    var BASE_CLASSES = 1000;
    var BASE_DATE = new Date('2026-06-19').getTime();
    var CLASSES_PER_WEEK = 9;
    var MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;
    function updateClassesCount() {
      var elapsed = Date.now() - BASE_DATE;
      var weeksElapsed = Math.max(0, elapsed / MS_PER_WEEK);
      var total = BASE_CLASSES + Math.floor(weeksElapsed * CLASSES_PER_WEEK);
      classesEl.textContent = total + '+';
    }
    updateClassesCount();
    // Refresh once daily (86400000 ms)
    setInterval(updateClassesCount, 86400000);
  }

  // ---- Enquiry form ----
  var form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('.btn-submit');
      var original = btn.textContent;

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      btn.textContent = 'Submitting...';
      btn.disabled = true;

      var formData = new FormData(form);
      var payload = {
        name: String(formData.get('name') || '').trim(),
        email: String(formData.get('email') || '').trim(),
        phone: String(formData.get('phone') || '').trim(),
        interest: String(formData.get('interest') || '').trim(),
        message: String(formData.get('message') || '').trim(),
        website: String(formData.get('website') || '').trim(),
        'page-url': window.location.href,
        source: 'vatsalyam-yoga-website'
      };

      fetch(LEAD_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      })
        .then(function () {
          btn.textContent = 'Thank you - we will be in touch soon.';
          form.reset();
        })
        .catch(function () {
          btn.textContent = 'Something went wrong. Please try again.';
        })
        .finally(function () {
          setTimeout(function () {
            btn.textContent = original;
            btn.disabled = false;
          }, 4000);
        });
    });
  }

})();
