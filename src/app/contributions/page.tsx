"use client";

import { StackOverflowCard } from "@/components/contributions/StackOverflowCard";
import { FadeIn } from "@/components/animations/FadeIn";
import communityContributions from "@/lib/data/community-contributions.json";
import { ContributionHighlightCard } from "@/components/contributions/ContributionHighlightCard";

export default function ContributionsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <FadeIn>
        <h2 className="text-2xl font-bold mb-6 text-center">
          Community Contributions
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {communityContributions.map((contribution, idx) => (
          <FadeIn key={contribution.title} delay={0.7 + 0.2 * idx}>
            <ContributionHighlightCard contribution={contribution} />
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.5}>
        <StackOverflowCard />
      </FadeIn>
    </div>
  );
}
