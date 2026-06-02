import Calendar from "@/components/Calendar";
import PageHeader from "@/components/PageHeader";
import { getGoogleCalendarEmbedUrl } from "@/lib/calendar";

export default function CalendarPage() {
  const embedUrl = getGoogleCalendarEmbedUrl();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <PageHeader
        badge="Schedule"
        title="Lesson"
        titleAccent="Calendar"
        accentColor="#a8bfe8"
        badgeBg="rgba(94, 126, 184, 0.2)"
        badgeBorder="rgba(94, 126, 184, 0.35)"
      />

      <Calendar src={embedUrl} />

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
