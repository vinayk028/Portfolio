"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  BookOpen,
  Wrench,
  Trophy,
  Calendar,
  Building2,
  Clock,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import journeyData from "@/data/journey.json";
import {
  sectionStyles,
  sectionContainerStyles,
  sectionHeaderStyles,
} from "@/lib/styles";

type TabId = "certifications" | "publications" | "workshops" | "hackathons";

const TABS: { id: TabId; label: string; icon: React.ElementType; count: number }[] = [
  {
    id: "certifications",
    label: "Certifications",
    icon: Award,
    count: journeyData.certifications.length,
  },
  {
    id: "publications",
    label: "Publications",
    icon: BookOpen,
    count: journeyData.publications.length,
  },
  {
    id: "workshops",
    label: "Workshops",
    icon: Wrench,
    count: journeyData.workshops.length,
  },
  {
    id: "hackathons",
    label: "Hackathons",
    icon: Trophy,
    count: journeyData.hackathons.length,
  },
];

/** Renders a logo image, or a styled initials fallback if no logo provided — same pattern as Experience. */
function OrgLogo({
  logo,
  name,
  size = 56,
}: {
  logo?: string;
  name: string;
  size?: number;
}) {
  const initials = name
    .split(/[\s&/]+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <div
      className="shrink-0 rounded-xl overflow-hidden border-2 border-border/60 bg-background shadow-md group-hover:border-primary/40 group-hover:shadow-lg transition-all duration-300 flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {logo ? (
        <Image
          src={logo}
          alt={`${name} logo`}
          width={size}
          height={size}
          className="w-full h-full object-contain"
        />
      ) : (
        <span className="text-sm font-bold text-primary select-none">
          {initials}
        </span>
      )}
    </div>
  );
}

function SectionHeading({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h2 className="text-2xl font-bold text-foreground">{label}</h2>
      <div className="flex-1 h-px bg-border/60 ml-2" />
    </div>
  );
}

function CertificationCard({
  item,
}: {
  item: (typeof journeyData.certifications)[number];
}) {
  return (
    <Card className="glow-border-hover glow-emerald bg-background border border-white/15 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-4">
          <OrgLogo logo={item.logo} name={item.issuer} />
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <CardTitle className="text-base font-bold text-foreground leading-snug">
                {item.title}
              </CardTitle>
              <div className="flex items-center gap-1 text-xs text-muted-foreground bg-primary/5 border border-primary/10 px-2.5 py-1 rounded-full shrink-0 font-medium">
                <Calendar className="w-3 h-3" />
                {item.date}
              </div>
            </div>
            <p className="flex items-center gap-1.5 text-sm text-primary font-semibold mt-1">
              <Building2 className="w-3.5 h-3.5 shrink-0" />
              {item.issuer}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-3">
        <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {item.skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-xs bg-primary/5 hover:bg-primary/15 border border-primary/10 text-foreground/80 transition-colors duration-200"
            >
              {skill}
            </Badge>
          ))}
        </div>
        {item.credential && (
          <a
            href={item.credential}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-medium"
          >
            View Credential <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </CardContent>
    </Card>
  );
}

function PublicationCard({
  item,
}: {
  item: (typeof journeyData.publications)[number];
}) {
  return (
    <Card className="glow-border-hover glow-emerald bg-background border border-white/15 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-4">
          <OrgLogo logo={item.logo} name={item.venue} />
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-2 flex-wrap">
              <Badge
                variant="outline"
                className="text-[10px] border-primary/40 text-primary shrink-0"
              >
                {item.type}
              </Badge>
              <div className="flex items-center gap-1 text-xs text-muted-foreground bg-primary/5 border border-primary/10 px-2.5 py-1 rounded-full font-medium ml-auto">
                <Calendar className="w-3 h-3" />
                {item.date}
              </div>
            </div>
            <CardTitle className="text-base font-bold text-foreground leading-snug mt-2">
              {item.title}
            </CardTitle>
            <p className="flex items-center gap-1.5 text-sm text-primary font-semibold mt-1">
              <BookOpen className="w-3.5 h-3.5 shrink-0" />
              {item.venue}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-3">
        <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs bg-primary/5 hover:bg-primary/15 border border-primary/10 text-foreground/80 transition-colors duration-200"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function WorkshopCard({
  item,
}: {
  item: (typeof journeyData.workshops)[number];
}) {
  return (
    <Card className="glow-border-hover glow-emerald bg-background border border-white/15 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-4">
          <OrgLogo logo={item.logo} name={item.organizer} />
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <CardTitle className="text-base font-bold text-foreground leading-snug flex-1">
                {item.title}
              </CardTitle>
              <div className="flex items-center gap-1 text-xs text-muted-foreground bg-primary/5 border border-primary/10 px-2.5 py-1 rounded-full shrink-0 font-medium">
                <Clock className="w-3 h-3" />
                {item.duration}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
              <p className="flex items-center gap-1.5 text-sm text-primary font-semibold">
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                {item.organizer}
              </p>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                {item.date}
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-3">
        <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {item.skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-xs bg-primary/5 hover:bg-primary/15 border border-primary/10 text-foreground/80 transition-colors duration-200"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function HackathonCard({
  item,
}: {
  item: (typeof journeyData.hackathons)[number];
}) {
  return (
    <Card className="glow-border-hover glow-emerald bg-background border border-white/15 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-4">
          <OrgLogo logo={item.logo} name={item.organizer} />
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <CardTitle className="text-base font-bold text-foreground leading-snug flex-1">
                {item.title}
              </CardTitle>
              <Badge
                variant="secondary"
                className={`shrink-0 text-xs font-semibold ${
                  item.result === "1st Place"
                    ? "bg-yellow-500/15 text-yellow-500 border border-yellow-500/30"
                    : "bg-primary/10 text-primary border border-primary/30"
                }`}
              >
                <Trophy className="w-3 h-3 mr-1" />
                {item.result}
              </Badge>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
              <p className="flex items-center gap-1.5 text-sm text-primary font-semibold">
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                {item.organizer}
              </p>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                {item.date}
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-3">
        <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {item.skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-xs bg-primary/5 hover:bg-primary/15 border border-primary/10 text-foreground/80 transition-colors duration-200"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function Journey() {
  const [activeTab, setActiveTab] = useState<TabId>("certifications");

  // Make tabs linkable: /more#publications opens the Publications tab.
  // Reading the hash must happen after mount (it's unavailable during SSR),
  // so this one-time sync from the URL is intentional.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (TABS.some((tab) => tab.id === hash)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveTab(hash as TabId);
    }
  }, []);

  const selectTab = useCallback((id: TabId) => {
    setActiveTab(id);
    window.history.replaceState(null, "", `#${id}`);
  }, []);

  return (
    <section className={sectionStyles()}>
      <div className={sectionContainerStyles()}>
        {/* Page Header */}
        <div className="text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Beyond the Resume
          </p>
          <h1 className={sectionHeaderStyles()}>My Journey</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {journeyData.subtitle}
          </p>
        </div>

        {/* Stats Row — tiles double as shortcuts to their tab */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {TABS.map(({ id, label, icon: Icon, count }) => (
            <button
              key={id}
              type="button"
              onClick={() => selectTab(id)}
              className={`bg-muted/30 border border-border/40 rounded-2xl p-4 text-center hover:border-primary/30 transition-all duration-300 cursor-pointer ${
                activeTab === id ? "glow-border" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-2xl font-black text-foreground">{count}</p>
              <p className="text-xs text-muted-foreground font-medium mt-0.5">
                {label}
              </p>
            </button>
          ))}
        </div>

        {/* Tab Navigation */}
        <div
          role="tablist"
          aria-label="Journey categories"
          className="flex flex-wrap gap-2 justify-center"
        >
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              role="tab"
              aria-selected={activeTab === id}
              aria-controls={`${id}-panel`}
              onClick={() => selectTab(id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === id
                  ? "glow-border bg-primary/15 text-primary font-semibold"
                  : "bg-muted/30 border border-border/60 text-muted-foreground hover:bg-primary/10 hover:text-foreground hover:border-primary/40"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
              <ChevronRight
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeTab === id ? "rotate-90" : ""
                }`}
              />
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div id={`${activeTab}-panel`} role="tabpanel">
          {activeTab === "certifications" && (
            <>
              <SectionHeading icon={Award} label="Certifications" />
              <div className="grid gap-5 sm:grid-cols-2">
                {journeyData.certifications.map((item) => (
                  <CertificationCard key={item.id} item={item} />
                ))}
              </div>
            </>
          )}

          {activeTab === "publications" && (
            <>
              <SectionHeading icon={BookOpen} label="Paper Publications" />
              <div className="grid gap-5">
                {journeyData.publications.map((item) => (
                  <PublicationCard key={item.id} item={item} />
                ))}
              </div>
            </>
          )}

          {activeTab === "workshops" && (
            <>
              <SectionHeading icon={Wrench} label="Workshops & Training" />
              <div className="grid gap-5 sm:grid-cols-2">
                {journeyData.workshops.map((item) => (
                  <WorkshopCard key={item.id} item={item} />
                ))}
              </div>
            </>
          )}

          {activeTab === "hackathons" && (
            <>
              <SectionHeading icon={Trophy} label="Hackathons" />
              <div className="grid gap-5 sm:grid-cols-2">
                {journeyData.hackathons.map((item) => (
                  <HackathonCard key={item.id} item={item} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
