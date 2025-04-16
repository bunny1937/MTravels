import Hero from "../components/sections/Hero";
import AboutUs from "../components/sections/AboutUs";
import Trips from "../components/sections/Trips";
import Gallery from "../components/sections/Gallery";
import Timeline from "../components/sections/Timeline";
import Services from "../components/sections/Services";
import Packages from "../components/sections/Packages";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Trips />
      <Gallery />
      <Timeline />
      <Services />
      <Packages />
      <Contact />
    </main>
  );
}
