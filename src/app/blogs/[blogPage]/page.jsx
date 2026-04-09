
import Link from "next/link";
import React from 'react';

const blogData = [
  {
            id: 1,
            title: "Mastering Next.js App Router",
            description: "Learn how to build modern web applications using the powerful App Router features in Next.js.",
            author: "Maya Sterling",
            date: "April 5, 2026",
            category: "Technology",
            image: "https://i.ibb.co.com/Xfs8y579/images.webp" 
        },
        {
            id: 2,
            title: "Why JavaScript is King in 2026",
            description: "Exploring the evolution of JavaScript and why it remains the top choice for developers worldwide.",
            author: "Clara Bennett",
            date: "April 6, 2026",
            category: "Programming",
            image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=640"
        },
        {
            id: 3,
            title: "The Power of Tailwind CSS",
            description: "Build beautiful, responsive user interfaces faster than ever with utility-first CSS classes.",
            author: "Aurora Cross",
            date: "April 7, 2026",
            category: "Design",
            image: "https://i.ibb.co.com/sd0xr8L2/tailwindcss-v4.jpg"
        },
        {
            id: 4,
            title: "Getting Started with React Server Components",
            description: "A beginner-friendly guide to understanding how Server Components improve performance and SEO.",
            author: "Hazel Quinn",
            date: "April 8, 2026",
            category: "Frontend",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=640"
        }
];

const SearchPage = async ({ params }) => {
  const { blogPage } = await params;
  const blog = blogData.find(blog => blog.id === parseInt(blogPage));

  return (
    <div className="bg-gray-50 p-6 flex flex-col justify-center items-center min-h-screen">
      {blog ? (
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          
          <div className="h-56 md:h-64 w-full relative">
            <img 
              src={blog.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000"} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-pink-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
                {blog.category}
              </span>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
              <span className="bg-gray-100 px-2 py-1 rounded text-pink-600 font-medium">
                {blog.date}
              </span>
              <span className="font-semibold italic">By {blog.author}</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug mb-4">
              {blog.title}
            </h1>

            <p className="text-gray-600 leading-relaxed border-l-4 border-pink-100 pl-4 py-1 text-sm md:text-base">
              {blog.description}
            </p>

            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center">
              <Link 
                href="/blogs" 
                className="w-full md:w-auto text-center px-10 py-3 border-2 border-[#e91e63] text-[#e91e63] font-bold rounded-xl hover:bg-[#e91e63] hover:text-white transition-all duration-300"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center p-10 bg-white rounded-xl shadow-sm border">
          <h2 className="text-lg font-medium text-gray-400 mb-4">Blog not found!</h2>
          <Link href="/blogs" className="text-pink-500 font-bold underline">
            Return to Blogs
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchPage;