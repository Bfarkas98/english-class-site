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
      <main className="site-container">
        {children}
      </main>
      <Footer />
    </>
  );
}
