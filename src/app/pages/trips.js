// pages/trips.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TripCard from "../components/TripCard";

export default function Trips() {
  const trips = [
    {
      title: "Trip to the Mountains",
      description: "Experience the serene landscapes and thrilling adventures.",
      image: "/images/trip1.jpg",
    },
    {
      title: "Beachside Relaxation",
      description:
        "Enjoy the sun, sand, and surf on our exclusive beach tours.",
      image: "/images/trip2.jpg",
    },
    // ... Add more trips as needed
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Our Trips & Tours</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip, index) => (
            <TripCard key={index} {...trip} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
