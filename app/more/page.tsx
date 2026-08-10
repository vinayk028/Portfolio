import type { Metadata } from "next";
import { Journey } from "@/components/sections/Journey";

export const metadata: Metadata = {
  title: "My Journey",
  description:
    "Certifications, publications, workshops, and hackathons — the journey of Vinay Kumar beyond the resume.",
};

export default function MorePage() {
  return <Journey />;
}
