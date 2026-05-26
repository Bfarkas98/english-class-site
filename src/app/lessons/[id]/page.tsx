import LessonCard from "@/components/LessonCard";
import { lessons } from "@/data/lessons";
import { notFound } from "next/navigation";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const lesson = lessons.find(
    (lesson) => lesson.slug === id
  );

  if (!lesson) {
    notFound();
  }

  return (
    <LessonCard
      title={lesson.title}
      memo={lesson.memo}
      homework={lesson.homework}
      vocab={lesson.vocab}
    />
  );
}