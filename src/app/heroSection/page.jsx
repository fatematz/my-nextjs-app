// app/heroSection/page.tsx
// import React from "react";

export default function HeroSectionPage() {
    return (
        <section className='bg-white py-16 lg:py-24'>
            <div className='max-w-6xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-10'>
                {/* TEXT */}
                <div className='flex-1 text-center lg:text-left'>
                    <h1 className='text-3xl lg:text-5xl font-bold text-gray-800 leading-snug'>
                        Welcome to{' '}
                        <span className='text-pink-500'>Our Tours</span> 🌎
                    </h1>
                    <p className='mt-4 text-gray-600 text-base lg:text-lg max-w-md mx-auto lg:mx-0'>
                        Explore amazing destinations and book your next
                        adventure with us!
                    </p>
                    <div className='mt-6 flex justify-center lg:justify-start gap-4'>
                        <a
                            href='/contact'
                            className='px-6 py-3 rounded-full bg-pink-500 text-white text-sm lg:text-base font-medium hover:bg-pink-600 transition'
                        >
                            Contact Us
                        </a>
                        <a
                            href='/tours'
                            className='px-6 py-3 rounded-full border border-pink-500 text-pink-500 text-sm lg:text-base font-medium hover:bg-pink-50 transition'
                        >
                            View Tours
                        </a>
                    </div>
                </div>

                {/* IMAGE */}
                <div className='flex-1 flex justify-center'>
                    <img
                        src='https://illustrations.popsy.co/pink/travel.svg'
                        alt='hero'
                        className='w-[300px] lg:w-[400px]'
                    />
                </div>
            </div>
        </section>
    )
}
