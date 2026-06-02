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
  "/lessons": "#7c9e5e",
  "/calendar": "#5e7eb8",
  "/questions": "#b87b5e",
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
    <nav
      style={{
        background: "#1a2e1a",
        borderBottom: "1px solid rgba(245, 230, 163, 0.15)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "64rem",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "baseline",
            gap: "6px",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#f0ece0",
              letterSpacing: "-0.01em",
            }}
          >
            English Class
          </span>
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.1rem",
              fontStyle: "italic",
              color: "#f5e6a3",
            }}
          >
            with Beni
          </span>
        </Link>

        <div
          className="hidden md:flex"
          style={{ alignItems: "center", gap: "0.25rem" }}
        >
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

        <div className="flex md:hidden" style={{ alignItems: "center", gap: "0.5rem" }}>
          <AuthSection compact />
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            style={{
              background: "rgba(245, 230, 163, 0.1)",
              border: "0.5px solid rgba(245, 230, 163, 0.25)",
              borderRadius: "8px",
              color: "#f5e6a3",
              width: "36px",
              height: "36px",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: "18px",
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden"
          style={{
            borderTop: "0.5px solid rgba(245, 230, 163, 0.12)",
            background: "#152414",
            padding: "0.75rem 1.5rem 1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {links.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            const accent = accentColors[href];

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? "#f5e6a3" : "rgba(240, 236, 224, 0.7)",
                  padding: "0.75rem 0.5rem",
                  borderRadius: "8px",
                  background: isActive
                    ? "rgba(245, 230, 163, 0.08)"
                    : "transparent",
                  borderLeft: isActive && accent ? `3px solid ${accent}` : "3px solid transparent",
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
      style={{
        textDecoration: "none",
        fontSize: "14px",
        fontWeight: isActive ? 500 : 400,
        color: isActive ? "#f5e6a3" : "rgba(240, 236, 224, 0.55)",
        padding: "6px 12px",
        borderRadius: "8px",
        background: isActive ? "rgba(245, 230, 163, 0.1)" : "transparent",
        borderBottom:
          isActive && accent ? `2px solid ${accent}` : "2px solid transparent",
        transition: "color 0.15s, background 0.15s",
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
