import React from 'react'

function Service_2() {
  return (
    <div className='w-screen bg-white grid lg:grid-cols-3 grid-cols-1 px-12 space-y-4 gap-3'>
        <div className='h-full col-span-1'>
          <div className='w-full h-full flex flex-col items-center justify-center'>
            <div className='text-3xl font-bold'>The Ambience</div>
            <div className='text-center'>Here at Mee Tjap Hokee we provide a modern twist to the classical bakmie halal dengan mood yang calm and relaxing.</div>
            {/* <div className='btn bg-[#ADD9E6] mt-4'>Learn More</div> */}
          </div>
          
        </div>
        <div className='h-96 rounded col-span-2 w-full grid grid-cols-2 grid-rows-2 gap-3'>
          <img src={require('../images/meetjaphokee/Ambience 1.jpg')}  className='h-full w-full col-span-1 rounded-xl object-cover' style={{ aspectRatio: 'unset' }}></img>
          <img src={require('../images/meetjaphokee/Ambience 3.jpg')}  className='h-full w-full col-span-1 rounded-xl object-cover' style={{ aspectRatio: 'unset' }}></img>
          <img src={require('../images/meetjaphokee/Ambience 6.jpg')}  className='h-full w-full col-span-2 rounded-xl object-cover' style={{ aspectRatio: 'unset' }}></img>
          
        </div>
        
    </div>
  )
}

export default Service_2