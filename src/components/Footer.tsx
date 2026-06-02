import Link from "next/link";

const links = [
  { href: "/lessons", label: "Lessons" },
  { href: "/calendar", label: "Calendar" },
  { href: "/questions", label: "Questions" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#374151",
            }}
          >
            English Class{" "}
          </span>
          <em
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.95rem",
              fontStyle: "italic",
              color: "var(--color-lessons)",
            }}
          >
            with Beni
          </em>
          <p
            style={{
              fontSize: "12px",
              color: "#9ca3af",
              fontWeight: 300,
              margin: "3px 0 0",
            }}
          >
            Keep learning, every day.
          </p>
        </div>

        <nav style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="footer-link" style={{
              fontSize: "13px",
              fontWeight: 400,
              color: "#6b7280",
              textDecoration: "none",
              transition: "color 0.15s",
            }}>
              {label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", gap: "5px", alignItems: "center" }} aria-hidden="true">
          {["var(--color-lessons)", "var(--color-calendar)", "var(--color-questions)"].map((c) => (
            <div
              key={c}
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: c,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
