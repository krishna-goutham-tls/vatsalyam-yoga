import type { Metadata } from "next";
import { Workshops } from "@/components/sections/Workshops";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Workshops | Vatsalyam Yoga",
  description:
    "Explore upcoming yoga workshops at Vatsalyam Yoga — immersive experiences in breathwork, meditation, and mindful movement.",
  alternates: {
    canonical: "/workshops/",
  },
};

export default function WorkshopsPage() {
  return (
    <main className="flex flex-col flex-1">
      <Workshops />
      <Footer />
    </main>
  );
}
