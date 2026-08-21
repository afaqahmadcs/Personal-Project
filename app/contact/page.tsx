import React from "react";
import { Metadata } from "next";
import { generateSEO } from "@/lib/metadata/seo";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import { Link } from "@/components/ui/Link";
import { BRAND } from "@/lib/constants/brand";
import { CustomImage } from "@/components/media/CustomImage";

export const metadata: Metadata = generateSEO({
  title: "Contact",
  description: "Get in touch with Afaq Ahmad for full stack web development and AI integration services.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="py-16 md:py-24" aria-label="Contact information page">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Reveal direction="up">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">07 / Connection</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase mt-4 mb-8">
              Contact
            </h1>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-center">
            {/* Contact details */}
            <div className="lg:col-span-7 space-y-8">
              <Reveal direction="up" delay={0.1}>
                <h2 className="font-sans text-xl md:text-2xl font-bold leading-normal mb-6">
                  Interested in discussing a project or collaboration? Let&apos;s connect.
                </h2>
                <p className="font-sans text-base text-text-muted leading-relaxed">
                  Whether you need a bespoke portfolio, a corporate web presence, custom UI/UX design, or 
                  are looking to integrate AI interfaces into your application, I am open to discussing how we can work together.
                </p>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-border-custom pt-8">
                <Reveal direction="up" delay={0.2}>
                  <div>
                    <h3 className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-2">Location</h3>
                    <p className="font-sans text-sm font-semibold">{BRAND.location}</p>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.3}>
                  <div>
                    <h3 className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-2">Direct Links</h3>
                    <div className="flex flex-col space-y-2">
                      <Link href={BRAND.socials.github} variant="editorial" arrow="up-right">
                        GitHub Profile
                      </Link>
                      <Link href={BRAND.socials.linkedin} variant="editorial" arrow="up-right">
                        LinkedIn Professional
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Image banner */}
            <div className="lg:col-span-5">
              <Reveal direction="up" delay={0.4}>
                <CustomImage
                  src="/images/profile/indoor-lobby.jpg"
                  alt="Afaq Ahmad — Let's build the future"
                  aspectRatio="editorial"
                  hoverZoom={true}
                  className="w-full max-w-sm mx-auto shadow-2xl rounded-lg"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
