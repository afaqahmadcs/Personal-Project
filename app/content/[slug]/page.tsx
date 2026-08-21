import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ARTICLES } from "@/lib/constants/content";
import { generateSEO } from "@/lib/metadata/seo";
import { PageTransition } from "@/components/motion/PageTransition";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/components/ui/Link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = ARTICLES.find((a) => a.slug === resolvedParams.slug);

  if (!article) return {};

  return generateSEO({
    title: `Afaq Ahmad — ${article.title}`,
    description: article.excerpt,
    path: `/content/${article.slug}`,
  });
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = ARTICLES.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <PageTransition>
      <article className="py-16 md:py-24 bg-background" aria-label={`Article: ${article.title}`}>
        <div className="mx-auto max-w-4xl px-6 md:px-12 space-y-8">
          
          {/* Back link */}
          <Reveal direction="none">
            <Link href="/content" variant="minimal" className="font-mono text-xs uppercase tracking-wider mb-8 block">
              &larr; Back to insights
            </Link>
          </Reveal>

          {/* Metadata Top */}
          <div className="flex justify-between items-baseline border-b border-border-custom pb-6">
            <Reveal direction="up" delay={0.05}>
              <span className="font-mono text-xs text-accent font-bold uppercase">{article.category}</span>
            </Reveal>
            <Reveal direction="up" delay={0.05}>
              <span className="font-mono text-xs text-text-muted">{article.date}</span>
            </Reveal>
          </div>

          {/* Heading */}
          <Reveal direction="up" delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-tight leading-tight mt-4">
              {article.title}
            </h1>
          </Reveal>

          {/* Excerpt */}
          <Reveal direction="up" delay={0.15}>
            <p className="font-sans text-lg text-foreground font-semibold leading-relaxed mt-6">
              {article.excerpt}
            </p>
          </Reveal>

          {/* Content Body */}
          <Reveal direction="up" delay={0.2}>
            <div className="font-sans text-base text-text-muted leading-relaxed space-y-6 pt-6 border-t border-border-custom">
              {article.content ? (
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              ) : (
                <p>This article content is currently being drafted.</p>
              )}
            </div>
          </Reveal>

          {/* Related Project Bridge */}
          {article.relatedProject && (
            <Reveal direction="up" delay={0.25}>
              <div className="border border-border-custom bg-surface-muted/50 p-6 rounded-lg mt-12 flex justify-between items-center">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">Learned While Building</span>
                  <h4 className="font-display text-lg uppercase tracking-tight mt-1">Project References</h4>
                </div>
                <Link href={`/work/${article.relatedProject}`}>
                  <span className="font-mono text-xs text-accent font-bold uppercase hover:underline cursor-pointer">
                    View Project &rarr;
                  </span>
                </Link>
              </div>
            </Reveal>
          )}

        </div>
      </article>
    </PageTransition>
  );
}
