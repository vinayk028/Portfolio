"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, CheckCircle, Home, RefreshCw, Loader2 } from "lucide-react";
import contactData from "@/data/contact.json";
import { 
  sectionStyles, 
  sectionContainerStyles, 
  sectionHeaderStyles,
  contactIconWrapperStyles,
  contactIconStyles,
  contactLinkStyles,
  successIconWrapperStyles
} from "@/lib/styles";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface ContactMethod {
  id: number;
  icon: string;
  label: string;
  value: string;
  href: string;
  type: string;
}

/* -------------------------------------------------------------------------- */
/*                                ICON HANDLER                                */
/* -------------------------------------------------------------------------- */

const iconMap = {
  Mail,
  Github,
  Linkedin
} as const;

// Color map for contact icons
const iconColorMap = {
  Mail: "#EA4335",      // Gmail red
  Github: "#FFFFFF",    // White (for visibility on dark backgrounds)
  Linkedin: "#0A66C2"   // LinkedIn blue
} as const;

function getIcon(iconName: string) {
  return iconMap[iconName as keyof typeof iconMap] ?? Mail;
}

function getIconColor(iconName: string) {
  return iconColorMap[iconName as keyof typeof iconColorMap] ?? "#6B7280";
}

/* -------------------------------------------------------------------------- */
/*                              VALIDATION                                    */
/* -------------------------------------------------------------------------- */

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  // Name validation
  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  } else if (data.name.trim().length > 50) {
    errors.name = "Name must be less than 50 characters";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid email address";
  }

  // Message validation
  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  } else if (data.message.trim().length > 1000) {
    errors.message = "Message must be less than 1000 characters";
  }

  return errors;
}

/* -------------------------------------------------------------------------- */
/*                             SUCCESS COMPONENT                              */
/* -------------------------------------------------------------------------- */

interface SuccessMessageProps {
  onSendAnother: () => void;
}

function SuccessMessage({ onSendAnother }: SuccessMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
      {/* Success Icon */}
      <div className={successIconWrapperStyles()}>
        <CheckCircle className="w-10 h-10 text-primary-foreground" strokeWidth={2.5} />
      </div>

      {/* Success Text */}
      <h3 className="text-2xl font-bold text-foreground mb-2">
        Message Sent Successfully!
      </h3>
      <p className="text-muted-foreground text-sm mb-8 max-w-xs">
        Thank you for reaching out. I'll get back to you as soon as possible.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
        <Button asChild className="flex-1 rounded-full">
          <a href="#home" className="inline-flex items-center justify-center">
            <Home className="w-4 h-4 mr-2" />
            Home
          </a>
        </Button>
        
        <Button
          variant="outline"
          onClick={onSendAnother}
          className="flex-1 rounded-full"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Send Another
        </Button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 COMPONENT                                  */
/* -------------------------------------------------------------------------- */

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If there are errors, don't submit
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Simulate form submission
    setIsSubmitting(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSendAnother = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <section id="contact" className={sectionStyles({ background: "mutedDark" })}>
      <div className={sectionContainerStyles({ maxWidth: "md" })}>
        {/* HEADER */}
        <header>
          <h2 className={sectionHeaderStyles()}>
            {contactData.title}
          </h2>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT CONTENT */}
          <article className="grid gap-8">
            <div className="grid gap-4">
              <h3 className="text-2xl font-bold">Let's work together</h3>
              <p className="text-muted-foreground leading-relaxed">
                {contactData.description}
              </p>
            </div>

            <address className="not-italic grid gap-4">
              {(contactData.methods as ContactMethod[]).map((method) => {
                const Icon = getIcon(method.icon);
                const iconColor = getIconColor(method.icon);

                return (
                  <a
                    key={method.id}
                    href={method.href}
                    className="flex items-center gap-4 group"
                    target={method.type === "email" ? undefined : "_blank"}
                    rel={method.type === "email" ? undefined : "noopener noreferrer"}
                  >
                    {/* ICON */}
                    <div 
                      className="shrink-0 rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-sm"
                      style={{ 
                        backgroundColor: `${iconColor}15`,
                        border: `2px solid ${iconColor}30`
                      }}
                    >
                      <Icon 
                        className="h-5 w-5" 
                        style={{ color: iconColor }}
                      />
                    </div>

                    {/* TEXT */}
                    <div className="grid gap-0.5">
                      <p className="text-sm font-semibold text-foreground">{method.label}</p>
                      <span className={contactLinkStyles()}>
                        {method.value}
                      </span>
                    </div>
                  </a>
                );
              })}
            </address>
          </article>

          {/* RIGHT FORM / SUCCESS MESSAGE */}
          <Card className="bg-background border border-border/40">
            <CardContent className="p-6">
              {isSubmitted ? (
                <SuccessMessage onSendAnother={handleSendAnother} />
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full rounded-full mt-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
