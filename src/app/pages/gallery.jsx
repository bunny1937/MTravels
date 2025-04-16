// pages/gallery.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    // Add more image paths
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Gallery</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index}`}
              className="w-full h-48 object-cover rounded"
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
