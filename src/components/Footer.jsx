const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10">
      
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-pink-500">TravelGuide</h2>
          <p className="mt-3 text-gray-600 text-sm">
            Creating unforgettable travel experiences for adventurers worldwide.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-pink-500 cursor-pointer">Home</li>
            <li className="hover:text-pink-500 cursor-pointer">About</li>
            <li className="hover:text-pink-500 cursor-pointer">Tours</li>
            <li className="hover:text-pink-500 cursor-pointer">Destinations</li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-pink-500 cursor-pointer">Blog</li>
            <li className="hover:text-pink-500 cursor-pointer">Testimonials</li>
            <li className="hover:text-pink-500 cursor-pointer">Privacy</li>
            <li className="hover:text-pink-500 cursor-pointer">Terms</li>
          </ul>
        </div>

        {/* SUBSCRIBE */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Subscribe</h3>
          <p className="text-sm text-gray-600 mb-3">
            Get updates about our latest tours and destinations.
          </p>

          <div className="flex items-center border rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 w-full outline-none text-sm"
            />
            <button className="bg-pink-500 text-white px-4 py-2 text-sm hover:bg-pink-600 transition">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm text-gray-500 pb-5">
        © 2026 TravelGuide. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;