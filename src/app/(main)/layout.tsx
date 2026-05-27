import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { auth } from "@clerk/nextjs/server";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Protect all routes under (main) — redirects to Clerk sign-in if not signed in
  await auth.protect();

  return (
    <>
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
    </>
  );
}
