import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">
          English Class with Beni
        </h1>

        <div className="flex gap-6 text-lg">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="/lessons" className="hover:text-blue-600">
            Lessons
          </Link>

          <Link href="/calendar" className="hover:text-blue-600">
            Calendar
          </Link>

          <Link href="/questions" className="hover:text-blue-600">
            Questions
          </Link>
        </div>
      </div>
    </nav>
  );
}