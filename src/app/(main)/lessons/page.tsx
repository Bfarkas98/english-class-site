import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { lessons } from "@/data/lessons";

export default function LessonsPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <PageHeader
        badge={`${lessons.length} lesson${lessons.length !== 1 ? "s" : ""}`}
        title="All"
        titleAccent="Lessons"
        accentColor="#a8c98a"
        badgeBg="rgba(124, 158, 94, 0.2)"
        badgeBorder="rgba(124, 158, 94, 0.35)"
      />

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
