"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Map, Briefcase, Ticket, Users, Coffee } from "lucide-react";

const services = [
  {
    icon: <Compass className="h-12 w-12 text-blue-500" />,
    title: "Adventure Tours",
    description:
      "Embark on thrilling experiences designed for the bold traveler. Our adventure tours take you off the beaten path to discover hidden gems and breathtaking landscapes. From hiking through lush rainforests and scaling majestic mountains to white-water rafting down pristine rivers and exploring ancient caves.",
    color: "bg-blue-50",
    hoverColor: "hover:bg-blue-100",
    borderColor: "border-blue-200",
  },
  {
    icon: <Map className="h-12 w-12 text-green-500" />,
    title: "Custom Itineraries",
    description:
      "Experience travel your way with our bespoke itinerary planning service. We understand that every traveler is unique, which is why we take the time to understand your preferences, interests, and travel style. Our destination experts will craft a day-by-day personalized journey that perfectly balances must-see attractions with hidden local treasures.",
    color: "bg-green-50",
    hoverColor: "hover:bg-green-100",
    borderColor: "border-green-200",
  },
  {
    icon: <Briefcase className="h-12 w-12 text-purple-500" />,
    title: "Business Travel",
    description:
      "Elevate your corporate travel experience with our premium business travel services. We understand the unique demands of business travelers and offer seamless arrangements that maximize productivity while minimizing stress. From booking executive-class flights and luxury accommodations to arranging conference facilities and transportation.",
    color: "bg-purple-50",
    hoverColor: "hover:bg-purple-100",
    borderColor: "border-purple-200",
  },
  {
    icon: <Ticket className="h-12 w-12 text-red-500" />,
    title: "Ticket Booking",
    description:
      "Skip the hassle of searching multiple platforms for the best deals. Our comprehensive ticket booking service covers flights, trains, cruises, and local transportation at competitive prices. We leverage our industry relationships to secure preferred rates and exclusive offers not available to the general public.",
    color: "bg-red-50",
    hoverColor: "hover:bg-red-100",
    borderColor: "border-red-200",
  },
  {
    icon: <Users className="h-12 w-12 text-yellow-500" />,
    title: "Group Tours",
    description:
      "Connect with like-minded travelers on our carefully curated group adventures. Our group tours blend the convenience of pre-arranged travel with the joy of shared experiences. Led by knowledgeable local guides, these tours offer a perfect balance of structured activities and free time to explore on your own.",
    color: "bg-yellow-50",
    hoverColor: "hover:bg-yellow-100",
    borderColor: "border-yellow-200",
  },
  {
    icon: <Coffee className="h-12 w-12 text-orange-500" />,
    title: "Retreat Packages",
    description:
      "Escape the demands of everyday life with our rejuvenating retreat packages. Designed with wellness and relaxation in mind, these carefully crafted getaways provide the perfect balance of structured activities and personal downtime. Return home feeling refreshed, centered, and inspired.",
    color: "bg-orange-50",
    hoverColor: "hover:bg-orange-100",
    borderColor: "border-orange-200",
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-white to-sky-50 py-24"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute left-0 top-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="none"
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.path
            d="M0,20 Q25,40 50,20 T100,20"
            fill="none"
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 0.5,
            }}
          />
          <motion.path
            d="M0,50 Q25,70 50,50 T100,50"
            fill="none"
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
          />
          <motion.path
            d="M0,80 Q25,100 50,80 T100,80"
            fill="none"
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1.5,
            }}
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-800">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-blue-600"></div>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover our comprehensive range of travel services designed to make
            your journey seamless, memorable, and tailored to your unique
            preferences.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative min-h-[320px] overflow-hidden rounded-xl border-2 shadow-lg transition-all duration-300 ${service.color} ${service.hoverColor} ${service.borderColor}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Decorative elements */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/30 opacity-70"></div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-white/20 opacity-50"></div>

              <div className="relative z-10 flex h-full flex-col p-8">
                <div className="flex items-center gap-4 border-b border-gray-200/50 pb-4">
                  <motion.div
                    animate={{
                      rotate:
                        hoveredIndex === index ? [0, -10, 10, -5, 5, 0] : 0,
                      scale: hoveredIndex === index ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 0.5 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 shadow-md"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {service.title}
                  </h3>
                </div>

                <div className="mt-4 flex-grow">
                  <p className="text-base leading-relaxed text-gray-700">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 rounded-full bg-white px-5 py-2 font-medium text-gray-800 shadow-md transition-colors hover:bg-gray-50"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Animated border on hover */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: hoveredIndex === index ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="relative rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 p-8 text-white shadow-xl">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-yellow-300 opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-300 opacity-20"></div>

            <div className="relative z-10 grid gap-8 md:grid-cols-5">
              <div className="md:col-span-3">
                <h3 className="mb-4 text-2xl font-bold">
                  Ready for your next adventure?
                </h3>
                <p className="mb-6">
                  Our travel experts are standing by to help you plan the
                  perfect getaway. Whether you're dreaming of pristine beaches,
                  majestic mountains, or vibrant cities, we'll make it happen.
                </p>
                <button className="rounded-full bg-white px-6 py-3 font-medium text-blue-600 shadow-md transition-transform hover:scale-105">
                  Contact Us Today
                </button>
              </div>

              <div className="relative md:col-span-2">
                <div className="relative h-48 w-full overflow-hidden rounded-lg md:h-full">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Travel destination"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                    style={{
                      clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
