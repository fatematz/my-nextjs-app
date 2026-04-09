

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Adventure Traveler",
    image: "https://i.pravatar.cc/150?u=sarah",
    feedback: "The expert guides made our trip to Paris absolutely unforgettable. Every detail was handled perfectly, allowing us to just enjoy the moment!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Photography Enthusiast",
    image: "https://i.pravatar.cc/150?u=michael",
    feedback: "The customized experience was exactly what I needed. I captured stunning photos in Bali that wouldn't have been possible without their local knowledge.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Solo Traveler",
    image: "https://i.pravatar.cc/150?u=emma",
    feedback: "As a solo traveler, safety is my priority. This team provided a fun and secure environment. I've already booked my next tour for Santorini!",
    rating: 4
  }
];

const TestimonialPage = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800">
            What Our <span className="text-pink-500">Travelers Say</span> 💬
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Real stories from real adventurers. Discover why thousands of people trust our expert guides for their dream vacations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-pink-200 transition duration-300 relative"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={index < item.rating ? "text-pink-500" : "text-gray-300"}>
                    ★
                  </span>
                ))}
              </div>

              {/* Feedback Text */}
              <p className="text-gray-600 italic leading-relaxed mb-8">
                "{item.feedback}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full border-2 border-pink-100"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-sm lg:text-base">
                    {item.name}
                  </h4>
                  <p className="text-pink-500 text-xs font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-900 transition shadow-lg">
            Share Your Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialPage;