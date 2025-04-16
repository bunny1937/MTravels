// pages/contact.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form className="space-y-4 max-w-lg">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 w-full border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 w-full border-gray-300 rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Send
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
