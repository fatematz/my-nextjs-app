const AboutPage = () => {
  return (
    <section className="bg-white py-16 lg:py-24">

      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
            About <span className="text-pink-500">Our Tours</span>
          </h1>
          <p className="mt-3 text-gray-600 text-sm lg:text-base">
            Discover more about our travel services and why clients trust us for unforgettable trips
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 items-center">

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Who We Are
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We are a dedicated travel company passionate about showing people the best destinations. 
              Our team ensures smooth and enjoyable trips while providing expert guidance throughout the journey.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mission is to create memorable travel experiences that are safe, exciting, and tailored to each client’s needs.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-2 border border-pink-500 text-pink-500 rounded-full text-sm">
                Guided Tours
              </span>
              <span className="px-4 py-2 border border-pink-500 text-pink-500 rounded-full text-sm">
                Adventure Trips
              </span>
              <span className="px-4 py-2 border border-pink-500 text-pink-500 rounded-full text-sm">
                Customized Packages
              </span>
              <span className="px-4 py-2 border border-pink-500 text-pink-500 rounded-full text-sm">
                Travel Planning
              </span>
              <span className="px-4 py-2 border border-pink-500 text-pink-500 rounded-full text-sm">
                24/7 Support
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://i.ibb.co.com/mrjYkLBp/images.jpg"
              alt="about"
              className="max-w-[280px] lg:max-w-[350px]   "
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutPage;