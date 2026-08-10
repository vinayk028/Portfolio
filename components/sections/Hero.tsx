"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import heroData from "@/data/hero.json";
import { SOCIAL_LINKS } from "@/lib/constants";
import {
  heroCardStyles,
  profileImageWrapperStyles,
  heroTitleStyles,
  heroSubtitleStyles
} from "@/lib/styles";

import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-end pb-24 justify-center px-4 bg-muted/50 scroll-mt-20"
    >
      <Reveal className="w-full flex justify-center">
      <Card className={heroCardStyles()}>
        <CardContent className="p-12 text-center">
          {/* Profile Image */}
          <figure className="mb-6 flex justify-center">
            <div className={profileImageWrapperStyles()}>
              <Image
                src={heroData.profileImage || "/placeholder.svg"}
                alt={heroData.profileImageAlt}
                fill
                sizes="(max-width: 768px) 192px, 256px"
                quality={95}
                className="object-cover"
                priority
              />
            </div>
          </figure>

          {/* Name & Title */}
          <header>
            <h1 className={heroTitleStyles()}>{heroData.name}</h1>

            <p className={heroSubtitleStyles()}>
              {heroData.title.toUpperCase()}
            </p>
          </header>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {/* Phone (hover/focus shows the number, click to call) */}
            <a
              href={`tel:${SOCIAL_LINKS.phone.replace(/\s/g, "")}`}
              className="relative group"
              aria-label={`Call ${SOCIAL_LINKS.phone}`}
            >
              <Phone className="w-6 h-6 hover:scale-110 transition-transform duration-200" />

              <span
                className="absolute bottom-8 left-1/2 -translate-x-1/2
                               bg-black text-white text-xs px-3 py-1 rounded
                               opacity-0 group-hover:opacity-100 group-focus:opacity-100
                               transition-opacity duration-200 whitespace-nowrap"
              >
                {SOCIAL_LINKS.phone}
              </span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="hover:scale-110 transition-transform duration-200"
              aria-label="Send an email"
            >
              <Mail className="w-6 h-6" />
            </a>

            {/* GitHub */}
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
              aria-label="GitHub profile"
            >
              <Github className="w-6 h-6" />
            </a>

            {/* LinkedIn */}
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            {/* LeetCode */}
            <a
              href={SOCIAL_LINKS.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
              aria-label="LeetCode profile"
            >
              <Image
                src="/images/Profile/leetcode.png"
                alt="LeetCode"
                width={23}
                height={21}
                className="object-contain"
              />
            </a>
          </div>
        </CardContent>
      </Card>
      </Reveal>
    </section>
  );
}
