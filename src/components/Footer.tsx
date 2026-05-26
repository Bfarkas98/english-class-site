import Link from "next/link";

const links = [
  { href: "/lessons", label: "Lessons" },
  { href: "/calendar", label: "Calendar" },
  { href: "/questions", label: "Questions" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "0.5px solid #ddd8ce",
        marginTop: "3rem",
        padding: "2rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "64rem",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {/* Brand */}
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
              color: "#7c9e5e",
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

        {/* Nav links */}
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontSize: "13px",
                fontWeight: 400,
                color: "#6b7280",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Dots */}
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          {["#7c9e5e", "#5e7eb8", "#b87b5e"].map((c) => (
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
