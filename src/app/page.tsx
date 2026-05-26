export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="bg-white rounded-2xl shadow p-8">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">
          Welcome to English Class with Beni
        </h1>

        <p className="text-lg text-gray-700">
          Here you can find lesson summaries,
          homework, vocabulary lists and lesson schedules.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Lessons
          </h2>

          <p className="text-gray-700">
            Review lesson notes and vocabulary.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Calendar
          </h2>

          <p className="text-gray-700">
            Check upcoming lesson times.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Questions
          </h2>

          <p className="text-gray-700">
            Send questions directly to Beni.
          </p>
        </div>
      </section>
    </div>
  );
}