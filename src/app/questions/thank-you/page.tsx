import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div
      style={{
        maxWidth: "520px",
        margin: "4rem auto 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        textAlign: "center",
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "20px",
          background: "#1a2e1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 11px, rgba(255,255,255,0.05) 11px, rgba(255,255,255,0.05) 12px)",
          }}
        />
        <span style={{ position: "relative", zIndex: 1 }}>✉️</span>
      </div>

      {/* Heading */}
      <div>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "1.75rem",
            fontWeight: 600,
            color: "#111827",
            margin: "0 0 0.5rem",
            lineHeight: 1.2,
          }}
        >
          Question <em style={{ fontStyle: "italic", color: "#7c9e5e" }}>sent!</em>
        </h1>
        <p
          style={{
            fontSize: "15px",
            fontWeight: 300,
            color: "#6b7280",
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          Beni received your question and will reply as soon as possible.
          Keep practising in the meantime!
        </p>
      </div>

      {/* Divider */}
      <div
        style={{
          width: "48px",
          height: "2px",
          borderRadius: "2px",
          background: "#c8dbb4",
        }}
      />

      {/* Navigation buttons */}
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          href="/lessons"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "#1a2e1a",
            color: "#f5e6a3",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 500,
            fontFamily: "Georgia, serif",
            padding: "0.65rem 1.25rem",
            borderRadius: "12px",
          }}
        >
          Review lessons
        </Link>

        <Link
          href="/questions"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "white",
            color: "#374151",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 400,
            padding: "0.65rem 1.25rem",
            borderRadius: "12px",
            border: "0.5px solid #ddd8ce",
          }}
        >
          Ask another question
        </Link>
      </div>
    </div>
  );
}
