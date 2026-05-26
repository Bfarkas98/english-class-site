import LessonCard from "@/components/LessonCard";
import { lessons } from "@/data/lessons";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default function LessonPage({ params }: Props) {
  const lesson = lessons.find(
    (lesson) => lesson.slug === params.id
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