"use client";
import InfiniteMenu from "./InfiniteMenu";

const Timeline = () => {
  const items = [
    {
      image: "https://picsum.photos/300/300",
      link: "https://google.com/",
      title: "Heavenly Himachal",
      description:
        "Snow-capped mountains and apple orchards await in this northern paradise. Experience adventure sports in Manali and tranquil meditation in Dharamshala.",
    },
    {
      image: "https://picsum.photos/310/310",
      link: "https://google.com/",
      title: "Radiant Rajasthan",
      description:
        "Land of kings with magnificent forts and vibrant desert cities. Explore the rich heritage of Jaipur's pink palaces and Udaipur's romantic lakes.",
    },
    {
      image: "https://picsum.photos/320/320",
      link: "https://google.com/",
      title: "Gorgeous Goa",
      description:
        "Sun-kissed beaches and Portuguese heritage blend in India's favorite coastal retreat. Enjoy water sports by day and lively beach parties by night.",
    },
    {
      image: "https://picsum.photos/330/330",
      link: "https://google.com/",
      title: "Majestic Mysore",
      description:
        "City of palaces with rich cultural heritage in Karnataka. Visit the spectacular Mysore Palace illuminated by thousands of lights and sample local sweets.",
    },
    {
      image: "https://picsum.photos/340/340",
      link: "https://google.com/",
      title: "Alluring Andamans",
      description:
        "Archipelago of pristine beaches and crystal-clear waters in the Bay of Bengal. Snorkel among vibrant coral reefs and trek through tropical rainforests.",
    },
    {
      image: "https://picsum.photos/350/350",
      link: "https://google.com/",
      title: "Vibrant Varanasi",
      description:
        "India's spiritual capital on the banks of the sacred Ganges. Witness mesmerizing aarti ceremonies and explore ancient narrow lanes filled with culture.",
    },
    {
      image: "https://picsum.photos/360/360",
      link: "https://google.com/",
      title: "Magnificent Munnar",
      description:
        "Emerald tea plantations nestled in Kerala's Western Ghats. Wake up to misty mountains and spot exotic wildlife in Eravikulam National Park.",
    },
    {
      image: "https://picsum.photos/370/370",
      link: "https://google.com/",
      title: "Divine Darjeeling",
      description:
        "Queen of the Himalayas known for world-famous tea and spectacular views. Ride the toy train and watch sunrise over Kanchenjunga, India's highest peak.",
    },
    {
      image: "https://picsum.photos/380/380",
      link: "https://google.com/",
      title: "Enchanting Ellora",
      description:
        "UNESCO World Heritage site with remarkable rock-cut temples in Maharashtra. Marvel at the massive Kailasa Temple carved from a single rock.",
    },
    {
      image: "https://picsum.photos/390/390",
      link: "https://google.com/",
      title: "Kingly Khajuraho",
      description:
        "Medieval temples adorned with intricate sculptures and artwork in Madhya Pradesh. Discover architectural masterpieces that have survived for over a millennium.",
    },
    {
      image: "https://picsum.photos/400/400",
      link: "https://google.com/",
      title: "Lovely Ladakh",
      description:
        "High-altitude desert landscape with dramatic mountains and Buddhist monasteries. Experience the stark beauty of Pangong Lake and ancient culture of Leh.",
    },
    {
      image: "https://picsum.photos/410/410",
      link: "https://google.com/",
      title: "Blissful Backwaters",
      description:
        "Kerala's meandering network of lagoons, canals, and lakes flanked by coconut palms. Cruise on traditional houseboats while enjoying fresh seafood delicacies.",
    },
    {
      image: "https://picsum.photos/420/420",
      link: "https://google.com/",
      title: "Amazing Amritsar",
      description:
        "Home to the magnificent Golden Temple and vibrant Punjabi culture. Witness the moving border ceremony at Wagah and savor delicious Amritsari kulchas.",
    },
    {
      image: "https://picsum.photos/430/430",
      link: "https://google.com/",
      title: "Spectacular Spiti",
      description:
        "Trans-Himalayan region with monasteries perched on rugged cliffs. Trek through a cold desert landscape and stargaze in one of India's clearest night skies.",
    },
    {
      image: "https://picsum.photos/440/440",
      link: "https://google.com/",
      title: "Opulent Orchha",
      description:
        "Medieval town frozen in time with grand palaces and riverside cenotaphs. Explore the hidden gem of Bundelkhand away from typical tourist trails.",
    },
    {
      image: "https://picsum.photos/450/450",
      link: "https://google.com/",
      title: "Peaceful Pondicherry",
      description:
        "French colonial charm meets Tamil culture in this coastal town. Stroll through yellow-washed streets and meditate at the experimental township of Auroville.",
    },
    {
      image: "https://picsum.photos/460/460",
      link: "https://google.com/",
      title: "Captivating Coorg",
      description:
        "Misty coffee plantations and waterfalls in Karnataka's Western Ghats. Experience the unique culture of Kodava people and sample their distinctive cuisine.",
    },
    {
      image: "https://picsum.photos/470/470",
      link: "https://google.com/",
      title: "Regal Rann of Kutch",
      description:
        "Vast white salt desert that transforms into a surreal landscape during full moon nights. Enjoy the colorful Rann Utsav and shop for exquisite handicrafts.",
    },
    {
      image: "https://picsum.photos/480/480",
      link: "https://google.com/",
      title: "Breathtaking Bandhavgarh",
      description:
        "One of India's finest tiger reserves with the highest density of Royal Bengal Tigers. Spot diverse wildlife against the backdrop of ancient ruins and sal forests.",
    },
    {
      image: "https://picsum.photos/490/490",
      link: "https://google.com/",
      title: "Tranquil Tawang",
      description:
        "Arunachal Pradesh's Buddhist haven with the second-largest monastery in Asia. Discover pristine alpine lakes and dramatic mountain passes at the edge of Tibet.",
    },
    {
      image: "https://picsum.photos/500/500",
      link: "https://google.com/",
      title: "Serene Sundarbans",
      description:
        "World's largest mangrove forest and home to the royal Bengal tiger. Cruise through intricate waterways and spot rare aquatic mammals and birds.",
    },
    {
      image: "https://picsum.photos/510/510",
      link: "https://google.com/",
      title: "Majestic Meghalaya",
      description:
        "Land of clouds with living root bridges and cascading waterfalls. Experience the heaviest rainfall on Earth and explore Asia's cleanest village, Mawlynnong.",
    },
    {
      image: "https://picsum.photos/520/520",
      link: "https://google.com/",
      title: "Idyllic Iskcon",
      description:
        "Spiritual haven in Vrindavan where Lord Krishna spent his childhood. Participate in devotional kirtans and celebrate vibrant festivals like Holi and Janmashtami.",
    },
    {
      image: "https://picsum.photos/530/530",
      link: "https://google.com/",
      title: "Wondrous Wayanad",
      description:
        "Lush green hill station in Kerala with spice plantations and wildlife sanctuaries. Trek to Chembra Peak and explore prehistoric Edakkal caves with ancient petroglyphs.",
    },
  ];

  return (
    <div
      style={{ height: "100vh", backgroundColor: "#111", position: "relative" }}
    >
      <InfiniteMenu items={items} />
    </div>
  );
};

export default Timeline;
