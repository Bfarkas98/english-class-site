import LessonCard from "@/components/LessonCard";
import { lessons } from "@/data/lessons";

export default function LessonsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-blue-600">
        Lessons
      </h1>

      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          title={lesson.title}
          memo={lesson.memo}
          homework={lesson.homework}
          vocab={lesson.vocab}
        />
      ))}
    </div>
  );
}