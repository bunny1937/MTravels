// pages/packages.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PackageCard from "../components/PackageCard";

export default function Packages() {
  const packages = [
    {
      title: "Luxury Package",
      description: "Enjoy premium amenities and exceptional service.",
      image: "/images/package1.jpg",
    },
    {
      title: "Budget Package",
      description: "Experience value with a well-curated set of services.",
      image: "/images/package2.jpg",
    },
    // Add other packages as needed
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Our Packages & Deals</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
