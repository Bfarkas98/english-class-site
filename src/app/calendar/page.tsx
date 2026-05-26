export default function CalendarPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

      {/* Page header */}
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
            top: 0, left: 0, right: 0,
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
              background: "rgba(94, 126, 184, 0.2)",
              border: "0.5px solid rgba(94, 126, 184, 0.35)",
              color: "#a8bfe8",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "4px 11px",
              borderRadius: "100px",
              marginBottom: "0.75rem",
            }}
          >
            Schedule
          </div>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#f0ece0",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Lesson <em style={{ fontStyle: "italic", color: "#f5e6a3" }}>Calendar</em>
          </h1>
        </div>
      </div>

      {/* Calendar embed */}
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
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#5e7eb8" }} />
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
          <span style={{ fontSize: "12px", color: "#9ca3af", marginLeft: "auto", fontWeight: 300 }}>
            Europe / Budapest
          </span>
        </div>

        <iframe
          src="https://calendar.google.com/calendar/embed?src=e6a3fdfa398116f35b98a056f021eb09b56858a6c2e25b239769f97f8671595b%40group.calendar.google.com&ctz=Europe%2FBudapest&mode=MONTH&showTitle=0&showNav=1&showPrint=0&showTabs=0&showCalendars=0"
          style={{ border: 0, display: "block" }}
          width="100%"
          height="600"
          loading="lazy"
          title="Lesson calendar"
        />
      </div>

      {/* Helper note */}
      <p
        style={{
          fontSize: "12px",
          color: "#aaa49a",
          fontWeight: 300,
          textAlign: "center",
          margin: 0,
        }}
      >
        All times shown in Budapest time (CET/CEST)
      </p>

    </div>
  );
}
