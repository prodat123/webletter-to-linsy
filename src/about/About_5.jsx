import React from 'react'

function About_5() {
  return (
    <section>
        <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
            <div className='flex-none space-y-5 max-w-xl'>
                <h3 className='text-md font-semibold text-secondary'>About Us</h3>
                <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                    Description...
                </h1>
                <p>
                    Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                </p>
                <div className='flex items-center gap-x-3 sm:text-sm'>
                    <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-primary duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                    </a>
                    
                </div>
            </div>
            <div className='flex-1 hidden md:block'>
                {/* Replace with your image */}
                
                <img src={require("../images/placeholder.jpg")} className="max-w-xl rounded-md" />
                
            </div>
        </div>
    </section>
  )
}

export default About_5