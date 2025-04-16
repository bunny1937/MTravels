import Image from "next/image";

const packages = [
  {
    title: "Weekend Getaway",
    price: "₹5499",
    features: [
      "3 Days, 2 Nights",
      "Hotel Accommodation",
      "Guided Tours",
      "Local Transport",
    ],
  },
  {
    title: "Summer Special",
    price: "₹9499",
    features: [
      "7 Days, 6 Nights",
      "4-Star Resort",
      "All Meals Included",
      "Adventure Activities",
    ],
  },
  {
    title: "Luxury Escape",
    price: "₹15499",
    features: [
      "10 Days, 9 Nights",
      "5-Star Hotels",
      "Private Tours",
      "Premium Transport",
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Travel Packages
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect package for your journey
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-center mb-4">
                  {pkg.title}
                </h3>
                <p className="text-4xl text-center text-blue-600 font-bold mb-6">
                  {pkg.price}
                </p>
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
