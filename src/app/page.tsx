import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-5">
      {/* Hero — chalkboard style */}
      <section
        style={{
          background: "#1a2e1a",
          borderRadius: "20px",
          padding: "2.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ruled-line texture */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(255,255,255,0.04) 31px, rgba(255,255,255,0.04) 32px)",
            borderRadius: "20px",
            pointerEvents: "none",
          }}
        />
        {/* Chalk top border */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #f5e6a3, #e8c97a, #f5e6a3)",
            borderRadius: "20px 20px 0 0",
            opacity: 0.7,
          }}
        />
        {/* Decorative emoji */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "2rem",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "5rem",
            opacity: 0.07,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          📚
        </span>

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(245, 230, 163, 0.15)",
              border: "0.5px solid rgba(245, 230, 163, 0.3)",
              color: "#f5e6a3",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "5px 12px",
              borderRadius: "100px",
              marginBottom: "1.25rem",
            }}
          >
            English Class
          </div>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 600,
              color: "#f0ece0",
              lineHeight: 1.2,
              margin: "0 0 0.75rem",
            }}
          >
            Welcome to class with{" "}
            <em style={{ fontStyle: "italic", color: "#f5e6a3" }}>Beni</em>
          </h1>

          <p
            style={{
              fontSize: "15px",
              fontWeight: 300,
              color: "rgba(240, 236, 224, 0.65)",
              lineHeight: 1.6,
              maxWidth: "480px",
              margin: 0,
            }}
          >
            Your lesson notes, vocabulary, schedule, and a direct line to ask
            questions — all in one place.
          </p>
        </div>
      </section>

      {/* Cards grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            href: "/lessons",
            label: "Lessons",
            desc: "Review notes, vocabulary lists, and homework from each session.",
            accent: "#7c9e5e",
            iconBg: "#eef3e8",
            iconColor: "#4a7028",
            icon: "📖",
          },
          {
            href: "/calendar",
            label: "Calendar",
            desc: "Check upcoming lesson times and plan ahead for each week.",
            accent: "#5e7eb8",
            iconBg: "#e8eef8",
            iconColor: "#2a4e88",
            icon: "📅",
          },
          {
            href: "/questions",
            label: "Questions",
            desc: "Send your questions directly to Beni between lessons.",
            accent: "#b87b5e",
            iconBg: "#f8eee8",
            iconColor: "#884028",
            icon: "💬",
          },
        ].map(({ href, label, desc, accent, iconBg, iconColor, icon }) => (
          <Link key={href} href={href} className="group block">
            <div
              style={{
                background: "white",
                border: "0.5px solid #e5e7eb",
                borderRadius: "16px",
                padding: "1.4rem 1.25rem 1.25rem",
                position: "relative",
                overflow: "hidden",
                height: "100%",
                transition: "border-color 0.2s, transform 0.15s",
              }}
              className="hover:-translate-y-0.5 hover:border-gray-300"
            >
              {/* Accent stripe */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: accent,
                  borderRadius: "16px 16px 0 0",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: iconBg,
                  color: iconColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  marginBottom: "0.85rem",
                }}
              >
                {icon}
              </div>

              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  margin: "0 0 0.4rem",
                  color: "#111",
                }}
              >
                {label}
              </h2>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "#6b7280",
                  lineHeight: 1.5,
                  margin: "0 0 0.5rem",
                }}
              >
                {desc}
              </p>

              {/* Arrow hint */}
              <span
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  right: "1.1rem",
                  fontSize: "15px",
                  color: "#9ca3af",
                  opacity: 0,
                  transform: "translateX(-4px)",
                  transition: "opacity 0.2s, transform 0.2s",
                }}
                className="group-hover:opacity-100 group-hover:translate-x-0"
              >
                →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer strip */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.75rem 0.25rem 0",
          borderTop: "0.5px solid #e5e7eb",
        }}
      >
        <span style={{ fontSize: "12px", color: "#9ca3af", fontWeight: 300 }}>
          English Class with Beni — always learning
        </span>
        <div style={{ display: "flex", gap: "5px" }}>
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
    </div>
  );
}
