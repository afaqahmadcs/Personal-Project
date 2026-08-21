/**
 * Lean Analytics Abstraction Layer
 * Ready for drop-in providers (e.g. Google Analytics, Vercel, Plausible)
 */

export type AnalyticsEvent = 
  | "project_view"
  | "contact_started"
  | "contact_submitted"
  | "whatsapp_click"
  | "linkedin_click"
  | "github_click";

export const trackEvent = (event: AnalyticsEvent, data?: Record<string, any>) => {
  // Prevent logging during production compile check / server-side execution
  if (typeof window === "undefined") return;

  const isDevelopment = process.env.NODE_ENV === "development";
  const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;

  if (isDevelopment) {
    console.log(`[Analytics Event Tracked]: "${event}"`, data || "");
  }

  // Example integration structure:
  // if (analyticsId && (window as any).gtag) {
  //   (window as any).gtag("event", event, data);
  // }
};
