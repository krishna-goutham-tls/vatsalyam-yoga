import type { Metadata, Viewport } from "next";
import { Playfair_Display, Cormorant_Garamond, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF6EE",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vatsalyamyoga.com"),
  title: "Vatsalyam Yoga | Reclaim Your Energy. Reconnect With Yourself.",
  description:
    "Vatsalyam Yoga supports physical, mental and emotional well-being through movement, breath, mindfulness and self-awareness. Yoga for women, senior citizens, kids, and corporate wellness in Bangalore and online.",
  keywords: [
    "yoga for women",
    "women's wellness yoga",
    "yoga for senior citizens",
    "corporate yoga",
    "online yoga classes",
    "pranayama classes",
    "meditation classes",
    "yoga therapy",
    "knee care yoga",
    "Bangalore yoga classes",
    "Vatsalyam Yoga",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Vatsalyam Yoga | Reclaim Your Energy. Reconnect With Yourself.",
    description:
      "Helping women, professionals, seniors and children build strength, resilience and well-being through yoga, breathwork and mindful living.",
    type: "website",
    locale: "en_US",
    siteName: "Vatsalyam Yoga",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Rajeswari Sitaraman in Vrikshasana — Tree pose in nature",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vatsalyam Yoga | Reclaim Your Energy. Reconnect With Yourself.",
    description:
      "Helping women, professionals, seniors and children build strength, resilience and well-being through yoga, breathwork and mindful living.",
    images: ["/hero.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Rajeswari Sitaraman" }],
  creator: "Rajeswari Sitaraman",
  publisher: "Vatsalyam Yoga",
  category: "Wellness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="bg-parchment font-body text-charcoal min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
