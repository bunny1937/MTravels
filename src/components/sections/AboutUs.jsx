"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  const shapesRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (shapesRef.current) {
        const shapes = shapesRef.current.children;
        for (let i = 0; i < shapes.length; i++) {
          const shape = shapes[i];
          const randomX = Math.random() * 10 - 5;
          const randomY = Math.random() * 10 - 5;

          if (shape instanceof HTMLElement) {
            shape.style.transform = `translate(${randomX}px, ${randomY}px)`;
          }
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white py-24"
    >
      {/* Floating shapes */}
      <div ref={shapesRef} className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-24 w-24 rounded-full bg-yellow-200 opacity-20 blur-xl transition-transform duration-[3s]"></div>
        <div className="absolute right-[15%] top-[10%] h-32 w-32 rounded-full bg-blue-200 opacity-30 blur-xl transition-transform duration-[3s]"></div>
        <div className="absolute bottom-[15%] left-[20%] h-40 w-40 rounded-full bg-green-200 opacity-20 blur-xl transition-transform duration-[3s]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-800">
            About <span className="text-blue-600">Wanderlust</span>
          </h2>
          <div className="mx-auto h-1 w-20 bg-blue-600"></div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="text-2xl leading-relaxed text-gray-700">
              Founded in 2022,{" "}
              <span className="font-semibold text-blue-600">
                Moreshwar Travel
              </span>{" "}
              has been helping adventurers discover the world's most
              breathtaking destinations. Our team of experienced travel
              enthusiasts is dedicated to crafting unforgettable journeys
              tailored to your unique preferences and dreams.
            </p>
            <p className="text-2xl leading-relaxed text-gray-700">
              What sets us apart is our commitment to authentic experiences,
              sustainable tourism, and personalized service. Whether you're
              seeking a serene beach retreat, an adrenaline-pumping adventure,
              or a cultural immersion, we're here to transform your travel
              aspirations into reality.
            </p>
          </motion.div>

          <div className="relative grid grid-cols-2 gap-4">
            {/* Main image with mask */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="col-span-2 overflow-hidden"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-80">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-transparent"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Tropical beach destination"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)",
                  }}
                />
              </div>
            </motion.div>

            {/* Small image 1 with irregular border */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-tr-3xl rounded-bl-3xl md:h-48">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Mountain adventure"
                  width={300}
                  height={200}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-yellow-500/20"></div>
              </div>
            </motion.div>

            {/* Small image 2 with mask effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-tl-3xl rounded-br-3xl md:h-48">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Cultural experience"
                  width={300}
                  height={200}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-500/20"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full border-8 border-dashed border-blue-200 opacity-50"></div>
        <div className="absolute -right-10 top-1/3 h-32 w-32 rounded-full border-8 border-dotted border-yellow-200 opacity-40"></div>
      </div>
    </section>
  );
}
