import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
