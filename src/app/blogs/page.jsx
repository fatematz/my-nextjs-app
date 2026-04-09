import Link from "next/link";

const BlogPage = () => {
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

    return (
        <div className="py-10  container ">
    
            <div className="mb-10 text-center">
                <h1 className="text-4xl font-extrabold text-gray-800">Our Blog</h1>
                <p className="text-gray-600 mt-2 max-w-lg mx-auto">
                    Explore our latest articles on web development, design trends, and technology.
                </p>
            </div>

         
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                {
                    blogData.map(blog => (
                        <div key={blog.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group ">
                            
                            
                            {blog.image && (
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={blog.image} 
                                        alt={blog.title} 
                                        className="w-full h-full object-cover "
                                    />
                                </div>
                            )}

                       
                            <div className="p-6 flex flex-col flex-grow">
                      
                                <div className="flex items-center justify-between mb-3 text-sm">
                                    <span className="bg-pink-50 text-[#e91e63] px-3 py-1 rounded-full font-semibold">
                                        {blog.category}
                                    </span>
                                    <span className="text-gray-500">{blog.date}</span>
                                </div>

                                <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                                    {blog.title}
                                </h2> 

                                <p className="text-gray-600 text-sm mb-5 flex-grow line-clamp-3">
                                    {blog.description}
                                </p>

                                <div className="border-t border-gray-100 pt-4 mt-auto flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden text-center text-xs leading-8 text-gray-400 font-bold uppercase">
                                            {blog.author.substring(0, 2)}
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Author</p>
                                            <p className="text-sm font-semibold text-gray-700">{blog.author}</p>
                                        </div>
                                    </div>
                                    <Link 
                                        href={`/blogs/${blog.id}`} 
                                        className="text-sm font-bold text-[#e91e63] hover:text-pink-600 flex items-center gap-1 group"
                                    >
                                        Read More
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BlogPage;