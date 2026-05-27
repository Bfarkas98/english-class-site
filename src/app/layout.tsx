import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
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
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
