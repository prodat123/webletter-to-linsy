import React from 'react'

function Service_4() {
  return (
    <div className='w-screen bg-white grid lg:grid-cols-3 grid-cols-1 p-4 px-12 gap-4'>
        <div className='h-96 sm:rounded-lg col-span-2 w-full grid grid-cols-2 grid-rows-2 gap-3'>
          <img src={require('../images/meetjaphokee/_DSC0091.jpg')}  className='w-full h-full col-span-1 row-span-2 rounded-xl object-cover' style={{ aspectRatio: 'unset' }}></img>
          <img src={require('../images/meetjaphokee/_DSC0148.jpg')}  className='w-full h-full col-span-1 rounded-xl object-cover' style={{ aspectRatio: 'unset' }}></img>
          <img src={require('../images/meetjaphokee/_DSC0196.jpg')}  className='w-full h-full col-span-1 rounded-xl object-cover' style={{ aspectRatio: 'unset' }}></img>
        </div>
        <div className='h-full col-span-1'>
          <div className='h-full flex flex-col items-center justify-center'>
            <div className='text-3xl font-bold'>The People</div>
            <div className='text-center'>Banyak orang datang untuk mencoba bakmi halal yang enak ini!! </div>
            {/* <div className='btn bg-secondary text-white mt-4'>Learn More</div> */}
          </div>
          
        </div>
    </div>
  )
}

export default Service_4