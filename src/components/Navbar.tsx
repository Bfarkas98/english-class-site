"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
        {/* Logo */}
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "baseline",
            gap: "6px",
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

        {/* Nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
          {links.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            const accent = accentColors[href];

            return (
              <Link
                key={href}
                href={href}
                style={{
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? "#f5e6a3" : "rgba(240, 236, 224, 0.55)",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  background: isActive
                    ? "rgba(245, 230, 163, 0.1)"
                    : "transparent",
                  borderBottom: isActive && accent
                    ? `2px solid ${accent}`
                    : "2px solid transparent",
                  transition: "color 0.15s, background 0.15s",
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
