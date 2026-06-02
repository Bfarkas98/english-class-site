import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect("https://accounts.englishclasswithbeni.xyz/sign-in");
  }

  return ( 
    <>
      <Navbar />
      <main
        style={{
          maxWidth: "64rem",
          margin: "0 auto",
          padding: "clamp(1.25rem, 4vw, 2rem) clamp(1rem, 4vw, 1.5rem) clamp(2.5rem, 6vw, 4rem)",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
