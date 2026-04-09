import Link from "next/link";

const ToursPage = () => {
  const tours = [
    {
      title: "Paris Getaway",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60",
      description: "Explore the romantic city of Paris with guided tours to Eiffel Tower, Louvre and more.",
      price: "$1200",
    },
    {
      title: "Tokyo Adventure",
      image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=60",
      description: "Discover the vibrant culture, tech, and cuisine of Tokyo with our expert guides.",
      price: "$1500",
    },
    {
      title: "Bali Relaxation",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
      description: "Enjoy tropical beaches, jungle treks and local Balinese experiences.",
      price: "$1000",
    },
    {
      title: "New York Explorer",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=60",
      description: "Visit iconic landmarks like Statue of Liberty, Central Park and Times Square.",
      price: "$1300",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Our <span className="text-pink-500">Tours</span>
          </h1>
          <p className="mt-3 text-gray-600 text-sm lg:text-base">
            Explore our curated tour packages for amazing travel experiences.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{tour.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{tour.description}</p>
                <p className="mt-2 font-bold text-pink-500">{tour.price}</p>
                <Link href="/contact" className="mt-4 text-center block px-4 py-2 rounded-full bg-pink-500 text-white text-sm font-medium hover:bg-pink-600 transition">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ToursPage;