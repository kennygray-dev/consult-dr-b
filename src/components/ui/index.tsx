// ─── Button ───────────────────────────────────────────────────────────────────
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  asChild?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-body font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:   "bg-primary text-white hover:bg-secondary focus:ring-secondary",
    secondary: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    gold:      "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white focus:ring-secondary",
    ghost:     "text-primary hover:bg-primary/5 focus:ring-primary",
  };

  const sizes = {
    sm: "text-xs px-5 py-2.5",
    md: "text-sm px-7 py-3.5",
    lg: "text-sm px-9 py-4",
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {Icon && iconPosition === "left" && <Icon size={16} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={16} />}
    </button>
  );
}

// ─── SectionHeader ────────────────────────────────────────────────────────────
interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "text-center", className)}>
      {eyebrow && (
        <p className="section-eyebrow">{eyebrow}</p>
      )}
      <h2 className={cn("text-balance", light ? "section-title-light" : "section-title")}>
        {title}
      </h2>
      {align === "center" && (
        <div className="flex justify-center">
          <span className="gold-rule" />
        </div>
      )}
      {subtitle && (
        <p className={cn("text-base leading-relaxed max-w-2xl", align === "center" && "mx-auto", light ? "text-white/70" : "text-gray-500")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
interface CardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function Card({ children, className, dark }: CardProps) {
  return (
    <div className={cn(dark ? "card-dark" : "card", "p-6", className)}>
      {children}
    </div>
  );
}

// ─── Badge ────────────────────────────────────────────────────────────────────
interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export function Badge({ children, variant = "primary" }: BadgeProps) {
  const variants = {
    primary:   "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    outline:   "border border-current text-secondary",
  };
  return (
    <span className={cn("text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-sm", variants[variant])}>
      {children}
    </span>
  );
}

// ─── PageHero ─────────────────────────────────────────────────────────────────
import Image from "next/image";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  blurDataURL?: string;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "Hero image",
  blurDataURL,
}: PageHeroProps) {
  return (
    <>
      <section className="relative min-h-[380px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[520px] flex items-center bg-primary overflow-hidden mx-4 mb-0 rounded-b-2xl">
        
        {/* Background image */}
        {image && (
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
            placeholder={blurDataURL ? "blur" : "empty"}
            blurDataURL={blurDataURL}
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/30" />

        {/* Content inside image */}
        <div className="section-container relative z-10 space-y-4 py-10 md:py-12 -translate-y-2 md:translate-y-0">
          {eyebrow && (
            <p className="section-eyebrow text-secondary">
              {eyebrow}
            </p>
          )}
          <h1 className="font-heading text-5xl sm:text-4xl md:text-6xl text-white font-bold leading-tight max-w-3xl">
            {title}
          </h1>
          <div className="gold-rule" />
        </div>
      </section>

      {subtitle && (
  <div className="mx-4 mb-4 bg-[#F8F4EA] rounded-b-2xl border-t border-secondary/20 py-10 px-6">
    <div className="max-w-2xl mx-auto text-center space-y-3">
      <p className="text-primary text-base md:text-lg leading-relaxed font-light tracking-wide">
        {subtitle}
      </p>
      <div className="flex justify-center">
        <span className="gold-rule" />
      </div>
    </div>
  </div>
)}
    </>
  );
}
