import Link from "next/link";
import { lessons } from "@/data/lessons";

export default function LessonsPage() {
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
              background: "rgba(124, 158, 94, 0.2)",
              border: "0.5px solid rgba(124, 158, 94, 0.35)",
              color: "#a8c98a",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "4px 11px",
              borderRadius: "100px",
              marginBottom: "0.75rem",
            }}
          >
            {lessons.length} lesson{lessons.length !== 1 ? "s" : ""}
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
            All <em style={{ fontStyle: "italic", color: "#f5e6a3" }}>Lessons</em>
          </h1>
        </div>
      </div>

      {/* Lesson list */}
      <div
        style={{
          background: "white",
          border: "0.5px solid #ddd8ce",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        {lessons.length === 0 ? (
          <p
            style={{
              padding: "2rem",
              textAlign: "center",
              fontSize: "14px",
              color: "#9ca3af",
              fontWeight: 300,
              margin: 0,
            }}
          >
            No lessons yet — check back soon!
          </p>
        ) : (
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {lessons.map((lesson, index) => (
              <li
                key={lesson.id}
                style={{
                  borderBottom:
                    index < lessons.length - 1
                      ? "0.5px solid #eee8df"
                      : "none",
                }}
              >
                <Link
                  href={`/lessons/${lesson.slug}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1rem 1.5rem",
                    textDecoration: "none",
                    transition: "background 0.15s",
                  }}
                  className="group hover:bg-[#f9f7f3]"
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    {/* Lesson number badge */}
                    <span
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "8px",
                        background: "#eef3e8",
                        color: "#4a7028",
                        fontSize: "12px",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {index + 1}
                    </span>

                    <div>
                      <span
                        style={{
                          fontFamily: "Georgia, serif",
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "#111827",
                          display: "block",
                          lineHeight: 1.3,
                        }}
                      >
                        {lesson.title}
                      </span>
                      {lesson.date && (
                        <span
                          style={{
                            fontSize: "12px",
                            color: "#9ca3af",
                            fontWeight: 300,
                          }}
                        >
                          {lesson.date}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Arrow */}
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#9ca3af",
                      transition: "transform 0.15s, color 0.15s",
                      flexShrink: 0,
                    }}
                    className="group-hover:text-[#4a7028] group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}
