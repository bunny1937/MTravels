import Image from "next/image";

const images = [
  { id: 1, src: "/images/gallery/goldentemple.webp", alt: "goldentemple" },
  { id: 2, src: "/images/gallery/hawamahal1.webp", alt: "hawamahal" },
  { id: 3, src: "/images/gallery/munnarkerala.webp", alt: "munnar" },
  { id: 4, src: "/images/gallery/himachal.webp", alt: "himachal" },
  { id: 5, src: "/images/gallery/tajmahal.webp", alt: "tajmahal" },
  { id: 6, src: "/images/gallery/uttarakhand.webp", alt: "uttarakhand" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Gallery
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Memories from our amazing tours
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative h-78 rounded-lg overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500} // specify width
                height={100} // specify height
                priority
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
