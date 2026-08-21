import React from "react";
import { Metadata } from "next";
import { generateSEO } from "@/lib/metadata/seo";
import { PageTransition } from "@/components/motion/PageTransition";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { BuildProcess } from "@/components/contact/BuildProcess";
import { ContactCTA } from "@/components/contact/ContactCTA";

export const metadata: Metadata = generateSEO({
  title: "Contact — Afaq Ahmad",
  description: "Get in touch with Afaq Ahmad about web development, digital experiences, AI integration and creative technology projects.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="relative w-full flex flex-col">
        <ContactHero />
        
        {/* Split screen content grid */}
        <section className="relative w-full py-12 md:py-20 bg-background overflow-hidden" aria-label="Contact inquiry form and details">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Bio info & portrait */}
              <div className="lg:col-span-5">
                <ContactInfo />
              </div>

              {/* Right Column: Progressive form */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>

            </div>
          </div>
        </section>

        <BuildProcess />
        <ContactCTA />
      </div>
    </PageTransition>
  );
}
