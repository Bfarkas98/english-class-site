import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
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
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#f4f1ea",
          color: "#1a1a1a",
          minHeight: "100vh",
          fontFamily:
            "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <Navbar />

        <main
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
            padding: "2rem 1.5rem 4rem",
          }}
        >
          {children}
        </main>

        {/* Subtle footer */}
        <footer
          style={{
            borderTop: "0.5px solid #ddd8ce",
            padding: "1.25rem 1.5rem",
            textAlign: "center",
            fontSize: "12px",
            color: "#aaa49a",
            fontWeight: 300,
          }}
        >
          English Class with Beni &mdash; keep learning, every day
        </footer>
      </body>
    </html>
  );
}
