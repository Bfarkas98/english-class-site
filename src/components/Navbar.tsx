"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";

const links = [
  { href: "/", label: "Home" },
  { href: "/lessons", label: "Lessons" },
  { href: "/calendar", label: "Calendar" },
  { href: "/questions", label: "Questions" },
];

const accentColors: Record<string, string> = {
  "/lessons": "var(--color-lessons)",
  "/calendar": "var(--color-calendar)",
  "/questions": "var(--color-questions)",
};

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        <Link href="/" className="site-nav__logo">
          <span className="site-nav__logo-main">English Class</span>
          <span className="site-nav__logo-accent">with Beni</span>
        </Link>

        <div className="site-nav__desktop">
          {links.map(({ href, label }) => (
            <NavLink
              key={href}
              href={href}
              label={label}
              isActive={
                href === "/" ? pathname === "/" : pathname.startsWith(href)
              }
              accent={accentColors[href]}
            />
          ))}
          <AuthSection />
        </div>

        <div className="site-nav__mobile">
          <AuthSection compact />
          <button
            type="button"
            className="site-nav__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-nav" className="site-nav__drawer md:hidden">
          {links.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            const accent = accentColors[href];

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="site-nav__drawer-link"
                style={{
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? "#f5e6a3" : "rgba(240, 236, 224, 0.7)",
                  background: isActive
                    ? "rgba(245, 230, 163, 0.08)"
                    : "transparent",
                  borderLeftColor: isActive && accent ? accent : "transparent",
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  label,
  isActive,
  accent,
}: {
  href: string;
  label: string;
  isActive: boolean;
  accent?: string;
}) {
  return (
    <Link
      href={href}
      className={`site-nav__link ${isActive ? "site-nav__link--active" : "site-nav__link--idle"}`}
      style={{
        borderBottomColor: isActive && accent ? accent : "transparent",
      }}
    >
      {label}
    </Link>
  );
}

function AuthSection({ compact = false }: { compact?: boolean }) {
  return (
    <div
      style={{
        marginLeft: compact ? 0 : "0.75rem",
        paddingLeft: compact ? 0 : "0.75rem",
        borderLeft: compact
          ? "none"
          : "0.5px solid rgba(245, 230, 163, 0.15)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Show when="signed-out">
        <SignInButton>
          <button
            style={{
              background: "rgba(245, 230, 163, 0.1)",
              border: "0.5px solid rgba(245, 230, 163, 0.3)",
              borderRadius: "8px",
              color: "#f5e6a3",
              fontSize: compact ? "12px" : "13px",
              fontWeight: 500,
              padding: compact ? "5px 10px" : "5px 14px",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Sign in
          </button>
        </SignInButton>
      </Show>

      <Show when="signed-in">
        <UserButton
          appearance={{
            elements: {
              avatarBox: {
                width: compact ? "26px" : "28px",
                height: compact ? "26px" : "28px",
                border: "1.5px solid rgba(245,230,163,0.3)",
              },
            },
          }}
        />
      </Show>
    </div>
  );
}
