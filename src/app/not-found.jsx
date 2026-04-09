import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-3xl w-full text-center">
        
        <div className="flex justify-center mb-8">
          
        </div>

        <h1 className="text-6xl lg:text-8xl font-extrabold text-gray-800">
          4<span className="text-pink-500">0</span>4
        </h1>
        
        <h2 className="mt-4 text-2xl lg:text-3xl font-bold text-gray-800">
          Lost in Paradise? 🌴
        </h2>
        
        <p className="mt-4 text-gray-600 text-base lg:text-lg max-w-md mx-auto">
          It looks like the destination you're looking for doesn't exist or has been moved to a new secret location.
        </p>

        <div className="mt-10">
          <Link href="/">
            <button className="px-8 py-3 rounded-full bg-pink-500 text-white text-base font-medium hover:bg-pink-600 transition shadow-lg hover:shadow-pink-200">
              Return to Homepage
            </button>
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-400 font-medium tracking-widest uppercase">
          Travel Guide Error System
        </p>

      </div>
    </section>
  );
};

export default NotFoundPage;