Shadcn-style UI theme + ready components

Below are small React component files that mimic Shadcn-style primitives but are self-contained. Drop them in components/ui/ and use them in pages.

Note: these use the Tailwind tokens above. They are written as lightweight component wrappers (TypeScript + React). If you use the real shadcn library, copy classNames to your shadcn components.

components/ui/Button.tsx
import React, { ButtonHTMLAttributes } from "react";
import cn from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "glow" | "ghost";
  size?: "sm" | "md" | "lg";
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  const base = "inline-flex items-center justify-center font-semibold transition-transform";
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg"
  };
  const variants = {
    primary:
      "btn-primary shadow-cta-glow hover:shadow-cta-glow-strong active:scale-95",
    glow:
      "btn-cta-glow shadow-[0_8px_30px_rgba(108,76,244,0.16)] hover:scale-[1.02]",
    ghost:
      "bg-[rgba(0,0,0,0.03)] text-[rgba(0,0,0,0.7)] hover:bg-[rgba(0,0,0,0.06)]"
  };

  return (
    <button
      {...props}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {children}
    </button>
  );
};

components/ui/Card.tsx
import React from "react";
import cn from "classnames";

export const Card: React.FC<{ className?: string }> = ({ children, className }) => {
  return <div className={cn("card", className)}>{children}</div>;
};

components/ui/Badge.tsx
import React from "react";
import cn from "classnames";

export const Badge: React.FC<{ variant?: "perfect" | "neutral"; className?: string }> = ({
  variant = "perfect",
  className,
  children
}) => {
  if (variant === "perfect") {
    return <span className={cn("badge-perfect", className)}>{children}</span>;
  }
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-[var(--ui-subtle)] text-[var(--text-secondary)]",
        className
      )}
    >
      {children}
    </span>
  );
};

components/ui/NavPill.tsx
import React from "react";
import cn from "classnames";

export const NavPill: React.FC<{ active?: boolean; className?: string }> = ({
  active = false,
  children,
  className
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 px-4 py-2 rounded-full transition",
        active ? "bg-brand-500 text-white" : "bg-[rgba(0,0,0,0.03)] text-[rgba(0,0,0,0.65)]",
        className
      )}
    >
      {children}
    </div>
  );
};

4) A theme.ts tokens file for deeper integration (optional)

If you'd like a central token file for use in components or Tailwind converters, add src/theme.ts:

export const theme = {
  fonts: {
    display: "'Playfair Display', serif",
    body: "'Inter', sans-serif"
  },
  colors: {
    brandStart: "#6C4CF4",
    brandEnd: "#C84FF1",
    ctaGradient: "linear-gradient(90deg,#FF7F50 0%,#FF3CAC 20%,#784BA0 60%,#2B86C5 100%)",
    textPrimary: "#0F1720",
    textSecondary: "#4A4A4A",
    uiBg: "#FFFFFF",
    cardBg: "#FFFFFF"
  },
  radii: {
    pill: "999px",
    xl: "24px"
  },
  shadows: {
    cardLight: "0px 1px 3px rgba(0,0,0,0.06), 0px 4px 10px rgba(0,0,0,0.04)",
    ctaGlow: "0 0 12px rgba(108,76,244,0.6)"
  },
  motion: {
    gradientDuration: "4s",
    spring: "cubic-bezier(0.22,1,0.36,1)"
  }
};

5) How to use (quick guidance)

Install Tailwind and plugins (if you don’t have them): npm i -D tailwindcss @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio

Drop tailwind.config.js in root and ensure your postcss / tailwind build picks it up.

Add the globals.css to your app (import in _app.tsx or layout).

Install classnames for small components: npm i classnames

Copy the components/ui/* files into your repo and use <Button variant="glow">Build This Idea</Button> to reproduce the CTA from the screenshots.

Swap Playfair Display for Fraunces if you have the license and want exact fonts.
