"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLDivElement>(null);

  // ── Scroll logic ──
  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;

      // NEW: proper scroll state for styling
      setIsScrolled(currentScrollY > 50);

      // header show/hide behavior (unchanged)
      if (currentScrollY < 50) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close mobile on route change ──
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const sortOrder = ["Services", "Programs", "About Us", "Team"];
  const sortedLinks = [...NAV_LINKS]
    .filter((l) => l.label !== "Home")
    .sort((a, b) => sortOrder.indexOf(a.label) - sortOrder.indexOf(b.label));

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-transform duration-300 will-change-transform",
        showHeader ? "translate-y-0" : "-translate-y-full",
        "backdrop-blur-sm bg-white/5 border-b border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
      )}
    >
      <div
        ref={navRef}
        className="section-container flex items-center justify-between h-20 relative"
      >
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img
            src="/logo2.png"
            alt={SITE_NAME}
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {sortedLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {/* Trigger */}
                <div
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm transition-colors cursor-pointer",
                    isScrolled ? "text-[#C8A24A]" : "text-black"
                  )}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={cn(
                      "transition-transform",
                      openDropdown === link.label && "rotate-180"
                    )}
                  />
                </div>

                {/* Dropdown */}
                <div
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 mt-4 w-[520px] transition-all duration-300",
                    openDropdown === link.label
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 translate-y-2 invisible"
                  )}
                >
                  <div className="bg-white rounded-2xl shadow-xl border p-4 grid gap-2 pointer-events-auto">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex justify-between px-4 py-3 rounded-xl hover:bg-gray-50"
                      >
                        {child.label}
                        <ArrowRight size={13} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm transition-colors",
                  isScrolled ? "text-[#C8A24A]" : "text-black"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex">
          <Link
            href="/contact"
            className="border border-[#C8A24A] text-[#C8A24A] px-5 py-2 text-xs"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen((p) => !p)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-white border-t",
          mobileOpen ? "max-h-[600px]" : "max-h-0"
        )}
      >
        <div className="section-container py-4 flex flex-col">
          {sortedLinks.map((link) =>
            link.children ? (
              <div key={link.href}>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.label ? null : link.label
                    )
                  }
                  className="w-full flex justify-between px-4 py-3 text-sm"
                >
                  {link.label}
                  <ChevronDown
                    size={15}
                    className={cn(
                      "transition-transform",
                      openDropdown === link.label && "rotate-180"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "transition-all duration-300 overflow-hidden",
                    openDropdown === link.label
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="ml-4 border-l pl-3">
                    {link.children.map((child) => (
                      <button
                        key={child.href}
                        onClick={() => {
                          setMobileOpen(false);
                          setOpenDropdown(null);
                          setTimeout(() => {
                            router.push(child.href);
                          }, 50);
                        }}
                        className="w-full text-left px-3 py-2 text-sm flex justify-between"
                      >
                        {child.label}
                        <ArrowRight size={12} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <button
                key={link.href}
                onClick={() => {
                  setMobileOpen(false);
                  router.push(link.href);
                }}
                className="px-4 py-3 text-left text-sm"
              >
                {link.label}
              </button>
            )
          )}

          {/* CTA */}
          <div className="mt-4">
            <button
              onClick={() => {
                setMobileOpen(false);
                router.push("/contact");
              }}
              className="w-full border border-[#C8A24A] text-[#C8A24A] px-5 py-2 text-xs"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}