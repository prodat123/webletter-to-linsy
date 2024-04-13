import React from 'react'

function Service_1() {
  return (
    <section className='w-screen lg:h-96 h-full bg-white'>
        {/* <div className='bg-black opacity-30 w-screen h-96 absolute'></div> */}
        <div className='h-full text-center flex flex-col justify-center z-20 text-white'>
            <div className='text-3xl font-bold z-20 text-black'>Our Services</div>
            <div className='z-20'>...Description...</div>
            <div className='grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0'>
                <div className='h-64 bg-white rounded shadow-xl m-3'>
                    <div className='text-black'>Menu</div>
                </div>
                <div className='h-64 bg-white rounded shadow-xl m-3'>
                    <div className='text-black'>Hello</div>
                </div>
                <div className='h-64 bg-white rounded shadow-xl m-3'>
                    <div className='text-black'>Hello</div>
                </div>
            </div>
        
        </div>
        
    </section>
  )
}

export default Service_1