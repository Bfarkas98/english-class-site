import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { lessons } from "@/data/lessons";

export default function LessonsPage() {
  return (
    <div className="page-stack">
      <PageHeader
        badge={`${lessons.length} lesson${lessons.length !== 1 ? "s" : ""}`}
        title="All"
        titleAccent="Lessons"
        accentColor="#a8c98a"
        badgeBg="rgba(124, 158, 94, 0.2)"
        badgeBorder="rgba(124, 158, 94, 0.35)"
      />

      <div className="content-card">
        {lessons.length === 0 ? (
          <p className="content-card__empty">No lessons yet — check back soon!</p>
        ) : (
          <ul className="lesson-list">
            {lessons.map((lesson, index) => (
              <li key={lesson.id} className="lesson-list__item">
                <Link href={`/lessons/${lesson.slug}`} className="lesson-list__link group">
                  <div className="lesson-list__main">
                    <span className="lesson-list__badge">{index + 1}</span>
                    <div>
                      <span className="lesson-list__title">{lesson.title}</span>
                      {lesson.date && (
                        <span className="lesson-list__date">{lesson.date}</span>
                      )}
                    </div>
                  </div>
                  <span className="lesson-list__arrow group-hover:translate-x-0.5 group-hover:text-[#4a7028]">
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
