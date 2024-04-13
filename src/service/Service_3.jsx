import React from 'react'

function Service_3() {
  return (
    <section className='relative px-4' id='services'>
        {/* <div class="w-full h-96 bg-gradient-to-br from-white to-transparent absolute -z-10">
          <div class="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-white to-transparent"></div>
          <div class="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-white to-primary"></div>
          <div class="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-white to-transparent"></div>
          
        </div> */}
        <div className='text-3xl font-bold text-center'>Our Services</div>
        <div className='text-center'>Monday – Sunday / 7 AM – 10 PM </div>
        <div className='h-[500px] grid lg:grid-cols-2 grid-cols-1 gap-8 px-4 py-2 mt-6'>
            <div className='h-full bg-white flex items-center justify-center relative rounded-xl'>
              <img className='absolute w-full h-full rounded-xl blur-sm filter grayscale contrast-200 object-cover' src={require("../images/meetjaphokee/Ambience 1.jpg")}></img>

              <div className='w-full h-full rounded-xl flex justify-center items-center bg-primary opacity-[0.3] backdrop-brightness-75 absolute'>              </div>
              <a href='http://bit.ly/meetjaphokeemenu1' className='text-6xl font-bold hover:text-7xl z-20 text-white' target='_blank'>Menu</a>
            </div>
            <div className='h-full bg-white rounded-xl shadow-xl  flex items-center justify-center relative'>
              <img className='absolute w-full h-full rounded-xl blur-sm filter grayscale contrast-200 object-cover' src={require("../images/meetjaphokee/PromotionImage.jpeg")}></img>
              <div className='w-full h-full rounded-xl flex justify-center items-center bg-primary opacity-[0.3] backdrop-brightness-75 absolute'>              </div>

              <a href='http://bit.ly/meetjaphokeepromos' className='text-6xl font-bold hover:text-7xl z-20 text-white' target='_blank'>Promotions</a>
            </div>
            {/* <div className='h-64 bg-white rounded shadow-xl p-4'>3</div>
            <div className='h-64 bg-white rounded shadow-xl p-4'>4</div> */}
        </div>
        
    </section>
    
  )
}

export default Service_3