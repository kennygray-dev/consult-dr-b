"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname                        = usePathname();
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [scrolled, setScrolled]         = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef                          = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const sortOrder = ["Services", "Programs", "About Us", "Team"];
  const sortedLinks = [...NAV_LINKS]
    .filter((l) => l.label !== "Home")
    .sort((a, b) => sortOrder.indexOf(a.label) - sortOrder.indexOf(b.label));

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500 backdrop-blur-sm bg-white/5 border-b border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
        )}
      >
        <div className="section-container flex items-center justify-between h-20 relative">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img
              src="/logo2.png"
              alt={SITE_NAME}
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
            {sortedLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.label ? null : link.label)
                    }
                    className={cn(
                      "relative flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200 group",
                      isActive(link.href)
                        ? "text-secondary"
                        : scrolled
                          ? "text-[#C8A24A] hover:text-[#C8A24A]"
                          : "text-gray-600 hover:text-gray-900"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      className={cn(
                        "transition-transform duration-300 text-gray-400 group-hover:text-gray-600",
                        openDropdown === link.label && "rotate-180 text-secondary"
                      )}
                    />
                    {isActive(link.href) && (
                      <span className="absolute bottom-1 left-4 right-4 h-px bg-secondary" />
                    )}
                  </button>

                  {/* ── Dropdown Panel ── */}
                  {openDropdown === link.label && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      {/* Arrow pointer */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45 z-10" />

                      <div
                        className="relative bg-white border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden"
                        style={{ width: link.children.length > 4 ? "580px" : "320px" }}
                      >
                        {/* Top accent line */}
                        <div className="h-0.5 bg-gradient-to-r from-secondary/60 via-secondary to-secondary/60" />

                        <div className="p-5">
                          {/* Section label */}
                          <div className="mb-4 pb-3 border-b border-gray-50">
                            <span className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-medium">
                              {link.label}
                            </span>
                          </div>

                          {/* Items */}
                          <div className={cn(
                            "grid gap-1",
                            link.children.length > 4 ? "grid-cols-2" : "grid-cols-1"
                          )}>
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setOpenDropdown(null)}
                                className={cn(
                                  "group/item flex items-center justify-between px-3 py-2.5 transition-all duration-150",
                                  isActive(child.href)
                                    ? "bg-secondary/5 text-secondary"
                                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                )}
                              >
                                <span className="text-sm font-medium">{child.label}</span>
                                <ArrowRight
                                  size={12}
                                  className={cn(
                                    "shrink-0 transition-all duration-150 -translate-x-1 opacity-0 group-hover/item:translate-x-0 group-hover/item:opacity-100",
                                    isActive(child.href) ? "opacity-100 translate-x-0 text-secondary" : "text-gray-400"
                                  )}
                                />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200",
                    isActive(link.href)
                      ? "text-secondary"
                      : scrolled
                        ? "text-[#C8A24A] hover:text-[#C8A24A]"
                        : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-1 left-4 right-4 h-px bg-secondary" />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="border border-[#C8A24A] text-[#C8A24A] px-5 py-2 text-xs tracking-wide hover:bg-[#C8A24A] hover:text-black transition-all duration-200"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ── Mobile Drawer ── */}
        {mobileOpen && (
          <nav className="lg:hidden bg-white border-t border-gray-100">
            <div className="section-container py-4 flex flex-col">
              {sortedLinks.map((link) =>
                link.children ? (
                  <div key={link.href}>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.label ? null : link.label)
                      }
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors",
                        isActive(link.href) ? "text-secondary" : "text-gray-700 hover:text-gray-900"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={15}
                        className={cn(
                          "text-gray-400 transition-transform duration-200",
                          openDropdown === link.label && "rotate-180"
                        )}
                      />
                    </button>

                    {openDropdown === link.label && (
                      <div className="mb-2 border-l-2 border-secondary/30 ml-4 pl-3 flex flex-col gap-0.5">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "flex items-center justify-between px-3 py-2.5 text-sm transition-colors",
                              isActive(child.href)
                                ? "text-secondary font-medium"
                                : "text-gray-700 hover:text-gray-900"
                            )}
                          >
                            {child.label}
                            <ArrowRight size={12} className="text-gray-300" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-3 text-sm font-medium transition-colors",
                      isActive(link.href) ? "text-secondary" : "text-gray-700 hover:text-gray-900"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="block text-center border border-[#C8A24A] text-[#C8A24A] px-5 py-2.5 text-xs tracking-wide hover:bg-[#C8A24A] hover:text-black transition-all duration-200"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}