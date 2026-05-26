import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "English Class with Beni",
  description: "English lessons, homework and vocabulary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />

        <main className="max-w-5xl mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}