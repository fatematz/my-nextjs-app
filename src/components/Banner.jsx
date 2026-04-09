import Link from "next/link";

const Banner = () => {
    return (
        <section className="bg-white">
      
      <div className="container px-4 py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-10">

        
        <div className="flex-1 text-center lg:text-left">

          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 leading-snug">
            Explore <span className="text-pink-500">Amazing Places</span> 🌍
            <br />
            With Our Expert Travel Guides
          </h1>

          <p className="mt-4 text-gray-600 text-base lg:text-lg max-w-md mx-auto lg:mx-0">
            Join our tours and discover breathtaking destinations. We provide safe, fun, and customized travel experiences for every adventurer.
          </p>

          <div className="mt-6 flex justify-center lg:justify-start gap-4">
            
            <Link href="/contact">
              <button className="px-6 py-3 rounded-full bg-pink-500 text-white text-sm lg:text-base font-medium hover:bg-pink-600 transition">
                Book a Tour
              </button>
            </Link>

            <Link href="/about">
              <button className="px-6 py-3 rounded-full border border-pink-500 text-pink-500 text-sm lg:text-base font-medium hover:bg-pink-50 transition">
                Learn More
              </button>
            </Link>

          </div>

        </div>

        
        <div className="flex-1 flex justify-center">
        
        </div>

      </div>

    </section>
    );
};

export default Banner;