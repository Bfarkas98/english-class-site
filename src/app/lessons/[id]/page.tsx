import LessonCard from "@/components/LessonCard";
import { lessons } from "@/data/lessons";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const lesson = lessons.find((lesson) => lesson.slug === id);

  if (!lesson) {
    notFound();
  }

  const lessonIndex = lessons.findIndex((l) => l.slug === id);
  const prevLesson = lessonIndex > 0 ? lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < lessons.length - 1 ? lessons[lessonIndex + 1] : null;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

      {/* Back link */}
      <div>
        <Link
          href="/lessons"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            fontWeight: 400,
            color: "#6b7280",
            textDecoration: "none",
            padding: "6px 0",
            transition: "color 0.15s",
          }}
          className="hover:text-[#4a7028]"
        >
          ← All lessons
        </Link>
      </div>

      {/* Lesson card */}
      <LessonCard
        title={lesson.title}
        date={lesson.date}
        memo={lesson.memo}
        homework={lesson.homework}
        vocab={lesson.vocab}
      />

      {/* Prev / Next navigation */}
      {(prevLesson || nextLesson) && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
            marginTop: "0.25rem",
          }}
        >
          {prevLesson ? (
            <Link
              href={`/lessons/${prevLesson.slug}`}
              style={{
                background: "white",
                border: "0.5px solid #ddd8ce",
                borderRadius: "14px",
                padding: "0.9rem 1.1rem",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                gap: "3px",
                transition: "border-color 0.15s",
              }}
              className="hover:border-[#c8dbb4]"
            >
              <span style={{ fontSize: "11px", color: "#9ca3af", fontWeight: 300 }}>
                ← Previous
              </span>
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#111827",
                  lineHeight: 1.3,
                }}
              >
                {prevLesson.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <Link
              href={`/lessons/${nextLesson.slug}`}
              style={{
                background: "white",
                border: "0.5px solid #ddd8ce",
                borderRadius: "14px",
                padding: "0.9rem 1.1rem",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "3px",
                transition: "border-color 0.15s",
              }}
              className="hover:border-[#c8dbb4]"
            >
              <span style={{ fontSize: "11px", color: "#9ca3af", fontWeight: 300 }}>
                Next →
              </span>
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#111827",
                  lineHeight: 1.3,
                  textAlign: "right",
                }}
              >
                {nextLesson.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      )}

    </div>
  );
}
