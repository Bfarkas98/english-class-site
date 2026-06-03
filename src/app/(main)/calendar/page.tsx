import Calendar from "@/components/Calendar";
import PageHeader from "@/components/PageHeader";

export default function CalendarPage() {
  return (
    <div className="page-stack">
      <PageHeader
        badge="Schedule"
        title="Lesson"
        titleAccent="Calendar"
        description="See upcoming lesson times. On your phone, opening Google Calendar directly is the most reliable option."
        accentColor="#a8bfe8"
        badgeBg="rgba(94, 126, 184, 0.2)"
        badgeBorder="rgba(94, 126, 184, 0.35)"
      />

      <Calendar />

      <p className="page-footnote">
        All times shown in Budapest time (CET/CEST)
      </p>
    </div>
  );
}
