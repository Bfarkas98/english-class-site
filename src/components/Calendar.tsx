export default function Calendar({ src }: { src: string }) {
  return (
    <div
      style={{
        background: "white",
        border: "0.5px solid #ddd8ce",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          padding: "0.85rem 1.25rem",
          borderBottom: "0.5px solid #eee8df",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#5e7eb8",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: "13px",
            fontWeight: 500,
            color: "#374151",
            fontFamily: "Georgia, serif",
          }}
        >
          English Class with Beni
        </span>
        <span
          style={{
            fontSize: "12px",
            color: "#9ca3af",
            marginLeft: "auto",
            fontWeight: 300,
          }}
        >
          Europe / Budapest
        </span>
      </div>

      <iframe
        src={src}
        style={{ border: 0, display: "block" }}
        width="100%"
        height="600"
        loading="lazy"
        title="Lesson calendar"
      />
    </div>
  );
}
