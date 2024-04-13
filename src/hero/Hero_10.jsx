import React from 'react'

function Hero_10() {
  return (
    <section>
      <div className="hero min-h-screen bg-blue-800 w-screen px-12">
          <div className="hero-content flex-col lg:flex-row-reverse grid lg:grid-cols-3 grid-cols-1 p-4">
              <div className='lg:col-span-2 col-start-1 w-full text-center'>
                  <h1 className="text-5xl font-bold text-white">Limited Edition</h1>
                  <p className="py-6">Be the first to grab our exclusive products.</p>
                  <a className="btn bg-yellow-400" href=''>Shop Now</a>
              </div>
              <div className='lg:col-span-1 lg:col-start-3'>
                  <div className="carousel w-full rounded-lg">
                      {/* Carousel items */}
                  </div>
              </div>
          </div>
      </div>
  </section>
  )
}

export default Hero_10