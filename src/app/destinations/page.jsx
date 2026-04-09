import Link from "next/link";

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=400&h=300&fit=crop",
    price: "$1200",
    description: "The city of light and romance.",
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=400&h=300&fit=crop",
    price: "$800",
    description: "Tropical paradise with lush greenery.",
  },
  {
    id: 3,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=400&h=300&fit=crop",
    price: "$1500",
    description: "Beautiful sunsets and white buildings.",
  },
];

const DestinationPage = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Popular <span className="text-pink-500">Destinations</span> 📍
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Choose from our top-rated destinations to explore amazing places. 
            Start your next big adventure right here with us.
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((place) => (
            <div 
              key={place.id} 
              className="group border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                  {place.price}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-500 transition">
                  {place.name}
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {place.description}
                </p>
                
                <div className="mt-6">
                  <Link href={`/destination/${place.id}`}>
                    <button className="w-full py-3 rounded-xl border border-pink-500 text-pink-500 font-medium hover:bg-pink-500 hover:text-white transition duration-300">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationPage;