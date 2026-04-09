import React from 'react';

const blogData = [
  {
    id: 1,
    title: "Mastering Next.js App Router",
    description: "Learn how to build modern web applications using the powerful App Router features in Next.js.",
    author: "Fatema",
    date: "April 5, 2026",
    category: "Technology"
  },
  {
    id: 2,
    title: "Why JavaScript is King in 2026",
    description: "Exploring the evolution of JavaScript and why it remains the top choice for developers worldwide.",
    author: "Zohura",
    date: "April 6, 2026",
    category: "Programming"
  },
  {
    id: 3,
    title: "The Power of Tailwind CSS",
    description: "Build beautiful, responsive user interfaces faster than ever with utility-first CSS classes.",
    author: "Fatema Tuj",
    date: "April 7, 2026",
    category: "Design"
  },
  {
    id: 4,
    title: "Getting Started with React Server Components",
    description: "A beginner-friendly guide to understanding how Server Components improve performance and SEO.",
    author: "Fatema Zohura",
    date: "April 8, 2026",
    category: "Frontend"
  }
];

const SearchPage=async ({params}) => {
    
    const {blogPage}=await params;
    const blog=blogData.find(blog => blog.id=== parseInt(blogPage))
    
    console.log(blog , "params" )
    return (
        <div>
            <h1>SearchPage</h1>

            {
                blog &&  <div className="">
                <h2> {blog.title} </h2>
                    <p> {blog.description} </p>
                    </div>
            }
           

            
        </div>
    );
};

export default SearchPage;