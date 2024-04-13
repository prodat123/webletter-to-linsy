import React from 'react'

function Service_5() {
  return (
    <div className='w-screen bg-white grid lg:grid-cols-2 grid-cols-1 gap-4 px-12'>
        
        
        <div className='h-full col-span-1'>
          <div className='w-full h-full flex flex-col items-center justify-center'>
            <div className='text-3xl font-bold'>Noodle Museum</div>
            <div className='text-center'>Kita punya unique photobooths yang membuat kalian lebih excited untuk makan bakmie ini. </div>
            {/* <ul className='list-disc mt-3'>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
                <li>Service 4</li>
                <li>Service 5</li>
            </ul> */}
          </div>
          
        </div>
        <img src={require('../images/meetjaphokee/IMG_8098.JPG')}  className='h-96 rounded-xl col-span-1 w-full object-cover' style={{ aspectRatio: 'unset' }}></img>

    </div>
  )
}

export default Service_5