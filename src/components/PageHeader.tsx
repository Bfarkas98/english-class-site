type PageHeaderProps = {
  badge: string;
  title: string;
  titleAccent?: string;
  description?: string;
  accentColor?: string;
  badgeBg?: string;
  badgeBorder?: string;
};

export default function PageHeader({
  badge,
  title,
  titleAccent,
  description,
  accentColor = "rgba(245, 230, 163, 0.6)",
  badgeBg = "rgba(245, 230, 163, 0.15)",
  badgeBorder = "rgba(245, 230, 163, 0.3)",
}: PageHeaderProps) {
  return (
    <div
      style={{
        background: "#1a2e1a",
        borderRadius: "20px",
        padding: "1.75rem 2rem",
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
            "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(255,255,255,0.04) 27px, rgba(255,255,255,0.04) 28px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #f5e6a3, #e8c97a, #f5e6a3)",
          opacity: 0.7,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: badgeBg,
            border: `0.5px solid ${badgeBorder}`,
            color: accentColor,
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "4px 11px",
            borderRadius: "100px",
            marginBottom: description ? "0.75rem" : "0.75rem",
          }}
        >
          {badge}
        </div>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(1.35rem, 3vw, 1.5rem)",
            fontWeight: 600,
            color: "#f0ece0",
            margin: description ? "0 0 0.4rem" : 0,
            lineHeight: 1.2,
          }}
        >
          {titleAccent ? (
            <>
              {title}{" "}
              <em style={{ fontStyle: "italic", color: "#f5e6a3" }}>
                {titleAccent}
              </em>
            </>
          ) : (
            title
          )}
        </h1>
        {description && (
          <p
            style={{
              fontSize: "14px",
              fontWeight: 300,
              color: "rgba(240, 236, 224, 0.55)",
              margin: 0,
              lineHeight: 1.5,
              maxWidth: "520px",
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
