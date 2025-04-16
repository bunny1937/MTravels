import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Moreshwar Travels",
  description:
    "Discover amazing destinations and unforgettable experiences with TravelPro.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
