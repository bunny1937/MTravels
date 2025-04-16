// pages/about.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700">
          This section will contain details about the resort...
        </p>
      </main>
      <Footer />
    </>
  );
}
