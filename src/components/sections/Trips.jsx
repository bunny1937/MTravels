"use client";
const { motion } = require("framer-motion");
import Image from "next/image";
import { fadeIn, staggerContainer } from "../../utils/animations";

export const trips = [
  {
    id: 1,
    name: "Kerala Backwaters Bliss",
    slug: "kerala-backwaters-bliss",
    description:
      "Immerse yourself in the tranquil backwaters, lush landscapes, and vibrant culture of God's Own Country - Kerala.",
    longDescription:
      "Our Kerala Backwaters Bliss tour offers a perfect blend of relaxation and cultural immersion in one of India's most beautiful states. Cruise through serene backwaters on a traditional houseboat, unwind on pristine beaches, explore spice plantations, and witness the unique cultural heritage of Kerala through its art forms and cuisine. Experience ayurvedic treatments, witness traditional Kathakali performances, and savor delicious Kerala cuisine while staying in eco-friendly accommodations that showcase the region's natural beauty.",
    duration: "8 Days",
    price: "₹14799",
    location: "Kochi, Munnar, Thekkady, Alleppey, Kovalam",
    featured: true,
    image: "/images/tours/kerala.webp",

    inclusions: [
      "Private air-conditioned vehicle throughout the tour",
      "Professional English-speaking guide",
      "7 nights accommodation (hotels and 1 night on houseboat)",
      "Daily breakfast and select meals",
      "Private houseboat cruise with meals",
      "Kathakali dance performance",
      "Spice plantation tour",
      "Ayurvedic massage session",
      "Airport transfers",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Kochi",
        description:
          "Welcome at Kochi airport and transfer to your hotel. Evening free to relax or explore the waterfront.",
      },
      {
        day: 2,
        title: "Kochi Exploration",
        description:
          "City tour including Jewish Synagogue, Dutch Palace, St. Francis Church, and Chinese fishing nets. Evening Kathakali dance performance.",
      },
      {
        day: 3,
        title: "Kochi to Munnar",
        description:
          "Drive to Munnar through scenic Western Ghats. Visit tea plantations and Eravikulam National Park if time permits.",
      },
      {
        day: 4,
        title: "Munnar to Thekkady",
        description:
          "Morning tea museum visit. Drive to Thekkady, home to Periyar Wildlife Sanctuary. Evening spice plantation tour.",
      },
      {
        day: 5,
        title: "Thekkady to Alleppey",
        description:
          "Morning boat ride on Lake Periyar. Drive to Alleppey and board your private houseboat for an overnight cruise through the backwaters.",
      },
      {
        day: 6,
        title: "Alleppey to Kovalam",
        description:
          "Disembark from houseboat after breakfast. Drive to Kovalam beach. Evening free to enjoy the beach.",
      },
      {
        day: 7,
        title: "Kovalam",
        description:
          "Day at leisure on the beach. Optional ayurvedic treatment at a local wellness center. Sunset beach dinner.",
      },
      {
        day: 8,
        title: "Departure",
        description:
          "Morning at leisure. Transfer to Trivandrum airport for departure.",
      },
    ],
  },
  {
    id: 2,
    name: "Rajasthan Royal Heritage",
    slug: "rajasthan-royal-heritage",
    description:
      "Journey through the land of kings, exploring magnificent forts, opulent palaces, and experiencing the vibrant culture of Rajasthan.",
    longDescription:
      "Our Rajasthan Royal Heritage tour takes you on a regal journey through India's most colorful state. Explore imposing hilltop forts, wander through ornate palaces, and experience the unique culture of this desert state. From the blue city of Jodhpur to the golden sands of Jaisalmer, from the romantic lakes of Udaipur to the pink hues of Jaipur, this tour offers an immersive experience into Rajasthan's royal past and vibrant present. Stay in heritage hotels that were once homes to royalty, enjoy cultural performances, and savor authentic Rajasthani cuisine.",
    duration: "10 Days",
    price: "₹12499",
    location: "Jaipur, Jodhpur, Jaisalmer, Udaipur",
    featured: true,
    image: "/images/tours/rajasthan.webp",

    inclusions: [
      "Private air-conditioned vehicle",
      "Professional English-speaking guide",
      "9 nights accommodation in heritage hotels",
      "Daily breakfast and select meals",
      "All entrance fees to monuments",
      "Camel safari in Jaisalmer desert",
      "Boat ride on Lake Pichola",
      "Cultural performances and folk music",
      "Airport transfers",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Jaipur",
        description:
          "Welcome at Jaipur airport and transfer to your heritage hotel. Evening orientation walk through the pink city markets.",
      },
      {
        day: 2,
        title: "Jaipur Exploration",
        description:
          "Visit Amber Fort, City Palace, Jantar Mantar observatory, and Hawa Mahal. Evening cultural performance with dinner.",
      },
      {
        day: 3,
        title: "Jaipur to Jodhpur",
        description:
          "Drive to Jodhpur with a stop at Ajmer and Pushkar. Visit the sacred Pushkar Lake and Brahma Temple before continuing to Jodhpur.",
      },
      {
        day: 4,
        title: "Jodhpur Sightseeing",
        description:
          "Explore the magnificent Mehrangarh Fort, Jaswant Thada, and Umaid Bhawan Palace. Walk through the blue city old quarters.",
      },
      {
        day: 5,
        title: "Jodhpur to Jaisalmer",
        description:
          "Drive through the Thar Desert to the golden city of Jaisalmer. Evening visit to Gadisar Lake.",
      },
      {
        day: 6,
        title: "Jaisalmer Exploration",
        description:
          "Visit Jaisalmer Fort, Patwon ki Haveli, and other ornate mansions. Late afternoon camel safari in the Sam Sand Dunes with dinner and folk performances.",
      },
      {
        day: 7,
        title: "Jaisalmer to Udaipur",
        description:
          "Long drive to Udaipur, the city of lakes. Stop at Ranakpur Jain Temple en route.",
      },
      {
        day: 8,
        title: "Udaipur Sightseeing",
        description:
          "Visit City Palace, Jagdish Temple, and Saheliyon ki Bari gardens. Evening boat ride on Lake Pichola.",
      },
      {
        day: 9,
        title: "Udaipur Rural Experience",
        description:
          "Day trip to surrounding countryside, visiting tribal villages and Eklingji & Nagda temples. Evening cooking class for Rajasthani cuisine.",
      },
      {
        day: 10,
        title: "Departure",
        description:
          "Morning at leisure. Transfer to Udaipur airport for departure.",
      },
    ],
  },
  {
    id: 3,
    name: "Himalayan  Odyssey",
    slug: "himalayan-odyssey",
    description:
      "Embark on a spiritual and adventurous journey through India's Himalayan region, experiencing breathtaking landscapes and ancient cultures.",
    longDescription:
      "Our Himalayan Mountain Odyssey takes you through India's spectacular northern mountains, from the spiritual town of Rishikesh to the former British hill station of Shimla. Experience the divine atmosphere of Haridwar on the banks of the sacred Ganges, meditate in Rishikesh - the yoga capital of the world, and enjoy breathtaking mountain panoramas in Mussoorie and Shimla. This tour combines spiritual experiences, moderate hiking opportunities, and cultural immersion in the foothills of the world's mightiest mountain range.",
    duration: "9 Days",
    price: "₹15899",
    location: "Delhi, Haridwar, Rishikesh, Mussoorie, Shimla",
    featured: false,
    image: "/images/tours/himachal.webp",

    inclusions: [
      "Private air-conditioned vehicle",
      "Professional English-speaking guide",
      "8 nights accommodation",
      "Daily breakfast and select meals",
      "Toy train ride in Shimla",
      "Yoga and meditation sessions in Rishikesh",
      "Ganga Aarti ceremony in Haridwar",
      "Guided nature walks",
      "Airport transfers",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Delhi",
        description:
          "Welcome at Delhi airport and transfer to your hotel. Brief orientation and rest.",
      },
      {
        day: 2,
        title: "Delhi to Haridwar",
        description:
          "Drive to Haridwar after breakfast. Evening witness the spectacular Ganga Aarti ceremony at Har Ki Pauri.",
      },
      {
        day: 3,
        title: "Haridwar to Rishikesh",
        description:
          "Morning temple visits in Haridwar. Short drive to Rishikesh. Visit Beatles Ashram and Laxman Jhula.",
      },
      {
        day: 4,
        title: "Rishikesh",
        description:
          "Morning yoga session. Day exploring various ashrams and temples. Evening Ganga Aarti at Parmarth Niketan.",
      },
      {
        day: 5,
        title: "Rishikesh to Mussoorie",
        description:
          "Drive to Mussoorie, a charming hill station. Evening walk on the famous Mall Road with views of distant Himalayan peaks.",
      },
      {
        day: 6,
        title: "Mussoorie Exploration",
        description:
          "Visit Lal Tibba, Cloud's End, and Kempty Falls. Nature walk through pine forests.",
      },
      {
        day: 7,
        title: "Mussoorie to Shimla",
        description:
          "Scenic drive to Shimla, the former summer capital of British India. Evening at leisure on the Ridge.",
      },
      {
        day: 8,
        title: "Shimla Sightseeing",
        description:
          "Visit Viceregal Lodge, Christ Church, and Jakhu Temple. Afternoon toy train ride on the UNESCO-listed Kalka-Shimla railway.",
      },
      {
        day: 9,
        title: "Departure",
        description:
          "Drive to Chandigarh airport for departure, or optional extension to Dharamshala/McLeodganj.",
      },
    ],
  },
];

export default function Trips() {
  return (
    <section id="trips" className="py-20 bg-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeIn("up")} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Trips
          </h2>
          <p className="text-xl text-gray-600">
            Discover our most sought-after destinations
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trips.map((trip, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up")}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative h-136 w-full overflow-hidden">
                <Image
                  src={trip.image}
                  alt={trip.name}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-black/40 to-black/80 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-2xl font-bold">{trip.name}</p>
                  <h3 className="text-2xl font-bold mb-2">{trip.title}</h3>
                  <p className="text-sm mb-3">{trip.description}</p>
                  <p className="text-2xl font-bold">{trip.price}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-opacity-90 transition-all"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
