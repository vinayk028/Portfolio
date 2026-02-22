"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import heroData from "@/data/hero.json";
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
      className="min-h-screen flex items-end pb-24 justify-center px-4 bg-muted/50"
    >
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
            {/* Phone (Hover to show number) */}
            <div className="relative group cursor-pointer">
              <Phone className="w-6 h-6 hover:scale-110 transition-transform duration-200" />

              <span
                className="absolute bottom-8 left-1/2 -translate-x-1/2 
                               bg-black text-white text-xs px-3 py-1 rounded 
                               opacity-0 group-hover:opacity-100 
                               transition-opacity duration-200 whitespace-nowrap"
              >
                +91 7670822528
              </span>
            </div>

            {/* Email */}
            <a
              href="mailto:thungamittavinaykumar07@gmail.com"
              className="hover:scale-110 transition-transform duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/vinayk028"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <Github className="w-6 h-6" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vinay-kumar-thungamitta-35668b252/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/thungamittavinaykumar07/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
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
    </section>
  );
}
