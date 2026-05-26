import Link from "next/link";
import { lessons } from "@/data/lessons";

export default function LessonsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-blue-600">
        Lessons
      </h1>

      <div className="bg-white rounded-2xl shadow p-6">
        <ul className="space-y-4">
          {lessons.map((lesson) => (
            <li key={lesson.id}>
              <Link
                href={`/lessons/${lesson.slug}`}
                className="text-xl text-blue-600 hover:underline"
              >
                • {lesson.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}