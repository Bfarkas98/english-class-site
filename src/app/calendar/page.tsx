export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-blue-600">
        Lesson Calendar
      </h1>

      <div className="bg-white rounded-2xl shadow p-4">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=e6a3fdfa398116f35b98a056f021eb09b56858a6c2e25b239769f97f8671595b%40group.calendar.google.com&ctz=Europe%2FBudapest"
          style={{ border: 0 }}
          width="100%"
          height="600"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}