const ContactPage = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4">

        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
            Contact <span className="text-pink-500">Us</span>
          </h1>
          <p className="mt-3 text-gray-600 text-base lg:text-lg">
            Get in touch with us to book your next adventure or ask any questions.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl shadow-md">
          <form className="grid gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-pink-500 text-white font-medium text-base hover:bg-pink-600 transition"
            >
              Send Message
            </button>

          </form>
        </div>

        <div className="mt-12 text-center text-gray-700">
          <p>📞 Call us: <span className="font-semibold">+880 1234 567890</span></p>
          <p>✉️ Email: <span className="font-semibold">info@travelguide.com</span></p>
          <p>📍 Location: <span className="font-semibold">Dhaka, Bangladesh</span></p>
        </div>

      </div>
    </section>
  );
};

export default ContactPage;