"use client";
const { motion } = require("framer-motion");
import img from "./../../../public/images/heroimg.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-start lg:items-center gap-5">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={img}
          alt="Travel Background"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-4 pt-36 sm:pt-24 md:pt-28 lg:pt-32 pb-10">
        <div className="max-w-4xl text-left ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black mb-4 sm:mb-6 leading-tight"
          >
            Explore The <span className="text-gradient">World</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/80 mb-8 sm:mb-12 max-w-2xl"
          >
            Discover extraordinary destinations and create unforgettable
            memories
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-white/90 hover:text-black transition-all duration-300">
              Start Your Journey
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-10 left-0 right-0 z-10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              "200+ Destinations",
              "10 Years Experience",
              "100k+ Happy Travelers",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 text-center"
              >
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
