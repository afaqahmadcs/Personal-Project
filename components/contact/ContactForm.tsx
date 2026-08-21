"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";

interface FormData {
  projectType: string;
  service: string;
  message: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
  honeypot: string;
}

const INITIAL_DATA: FormData = {
  projectType: "",
  service: "",
  message: "",
  timeline: "",
  name: "",
  email: "",
  company: "",
  honeypot: ""
};

export const ContactForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Field updates
  const updateField = (key: keyof FormData, val: string) => {
    setFormData((prev) => ({ ...prev, [key]: val }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  // Step validation
  const validateStep = (currentStep: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (currentStep === 1 && !formData.projectType) {
      newErrors.projectType = "Please select what you are building.";
    }
    if (currentStep === 2 && !formData.service) {
      newErrors.service = "Please select what service you need.";
    }
    if (currentStep === 3 && (!formData.message || formData.message.trim().length < 10)) {
      newErrors.message = "Please write a brief description (minimum 10 characters).";
    }
    if (currentStep === 4 && !formData.timeline) {
      newErrors.timeline = "Please select a timeline preference.";
    }
    if (currentStep === 5) {
      if (!formData.name || formData.name.trim().length < 2) {
        newErrors.name = "Please enter your name.";
      }
      if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(5)) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess(true);
      } else {
        setErrors({ submit: data.error || "Submission failed. Please try again." });
      }
    } catch (err) {
      console.error(err);
      setErrors({ submit: "A connection error occurred." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render options per select step
  const renderSelector = (
    field: keyof FormData,
    options: string[]
  ) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {options.map((opt) => {
          const isSelected = formData[field] === opt;
          return (
            <button
              type="button"
              key={opt}
              onClick={() => updateField(field, opt)}
              className={`text-left p-4 font-mono text-xs uppercase border transition-all duration-300 rounded cursor-pointer ${
                isSelected
                  ? "border-accent bg-accent-soft text-accent font-bold"
                  : "border-border-custom hover:border-text-muted text-text-muted"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="border border-border-custom bg-surface-muted/30 p-8 rounded-lg min-h-[480px] flex flex-col justify-between shadow-lg">
      <AnimatePresence mode="wait">
        {success ? (
          /* SUCCESS STATE */
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 my-auto text-center flex flex-col items-center justify-center"
            key="success"
          >
            {/* Visual completed 3D SVG callback */}
            <svg className="w-16 h-16 text-accent mb-4" viewBox="0 0 100 100" fill="none">
              <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="1" />
              <polygon points="50,20 80,50 50,80 20,50" fill="var(--color-accent-soft)" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="3" fill="var(--color-accent)" />
            </svg>

            <div className="space-y-2">
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-foreground">
                Inquiry Received.
              </h3>
              <p className="font-sans text-xs text-text-muted max-w-sm leading-relaxed">
                Thanks for reaching out. I&apos;ll review the details and get back to you soon.
              </p>
            </div>

            <div className="pt-4">
              <Link href="/">
                <Button variant="secondary">Back To Home &rarr;</Button>
              </Link>
            </div>
          </motion.div>
        ) : (
          /* progressive form steps */
          <motion.form
            onSubmit={handleSubmit}
            key={step}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-between h-full flex-grow space-y-6"
          >
            {/* Honeypot Spam shield */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={(e) => updateField("honeypot", e.target.value)}
              className="hidden"
              aria-hidden="true"
            />

            {/* Header progress bar */}
            <div className="flex justify-between items-center border-b border-border-custom/50 pb-4">
              <span className="font-mono text-xs text-accent font-bold">
                0{step} / 06
              </span>
              <div className="w-24 h-1.5 bg-border-custom rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent transition-all duration-300"
                  style={{ width: `${(step / 6) * 100}%` }}
                />
              </div>
            </div>

            {/* Steps narratives */}
            <div className="flex-grow py-4">
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="font-display text-lg uppercase text-foreground">
                    What are you building?
                  </h3>
                  {renderSelector("projectType", ["WEBSITE", "WEB APPLICATION", "BUSINESS WEBSITE", "AI INTEGRATION", "UI / UX", "OTHER"])}
                  {errors.projectType && <p className="font-mono text-[9px] text-red-500">{errors.projectType}</p>}
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="font-display text-lg uppercase text-foreground">
                    What do you need?
                  </h3>
                  {renderSelector("service", ["DESIGN", "DEVELOPMENT", "DESIGN + DEVELOPMENT", "AI INTEGRATION", "OTHER"])}
                  {errors.service && <p className="font-mono text-[9px] text-red-500">{errors.service}</p>}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="font-display text-lg uppercase text-foreground">
                    Tell me about your idea
                  </h3>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="A short description of your idea, project or problem."
                    className="w-full bg-background border border-border-custom rounded p-4 font-mono text-xs text-foreground focus:outline-none focus:border-accent"
                  />
                  {errors.message && <p className="font-mono text-[9px] text-red-500">{errors.message}</p>}
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <h3 className="font-display text-lg uppercase text-foreground">
                    In what timeline?
                  </h3>
                  {renderSelector("timeline", ["AS SOON AS POSSIBLE", "1–2 MONTHS", "3+ MONTHS", "EXPLORING"])}
                  {errors.timeline && <p className="font-mono text-[9px] text-red-500">{errors.timeline}</p>}
                </div>
              )}

              {step === 5 && (
                <div className="space-y-4">
                  <h3 className="font-display text-lg uppercase text-foreground">
                    Your Contact Info
                  </h3>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="w-full bg-background border border-border-custom rounded p-3 font-mono text-xs focus:outline-none focus:border-accent"
                    />
                    {errors.name && <p className="font-mono text-[9px] text-red-500">{errors.name}</p>}

                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full bg-background border border-border-custom rounded p-3 font-mono text-xs focus:outline-none focus:border-accent"
                    />
                    {errors.email && <p className="font-mono text-[9px] text-red-500">{errors.email}</p>}

                    <input
                      type="text"
                      placeholder="Company / Brand (Optional)"
                      value={formData.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      className="w-full bg-background border border-border-custom rounded p-3 font-mono text-xs focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>
              )}

              {step === 6 && (
                <div className="space-y-4">
                  <h3 className="font-display text-lg uppercase text-foreground">
                    Confirm & Submit
                  </h3>
                  <div className="border border-border-custom bg-background p-4 rounded font-mono text-[10px] text-text-muted space-y-1">
                    <div><span className="font-bold text-foreground">TYPE:</span> {formData.projectType}</div>
                    <div><span className="font-bold text-foreground">NEED:</span> {formData.service}</div>
                    <div><span className="font-bold text-foreground">TIMELINE:</span> {formData.timeline}</div>
                    <div><span className="font-bold text-foreground">NAME:</span> {formData.name} ({formData.email})</div>
                  </div>
                  <p className="font-sans text-[10px] text-text-muted leading-relaxed">
                    By submitting this project query, you confirm that you are sending a request to start a project.
                  </p>
                </div>
              )}
            </div>

            {/* Footer Navigation Buttons */}
            <div className="flex justify-between items-center pt-4 border-t border-border-custom/30 select-none">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="font-mono text-xs uppercase tracking-wider text-text-muted hover:text-foreground cursor-pointer"
                >
                  &larr; Back
                </button>
              ) : (
                <span className="w-10 block" />
              )}

              {step < 6 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="font-mono text-xs uppercase tracking-wider text-accent font-bold hover:text-foreground cursor-pointer"
                >
                  Next &rarr;
                </button>
              ) : (
                <Button
                  type="submit"
                  variant="primary"
                  className="px-6 py-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry →"}
                </Button>
              )}
            </div>
            {errors.submit && <p className="font-mono text-[9px] text-red-500 mt-2">{errors.submit}</p>}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};
