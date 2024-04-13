import React from 'react'

function Hero_5() {
  return (
    <div>
        <div className="hero min-h-screen bg-white w-screen">
            <div className="hero-content flex-col lg:flex-row-reverse grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div className='lg:col-span-1 col-start-1 w-full text-center'>
                    <h1 className="text-5xl font-bold">Title</h1>
                    <p className="py-6">...Description...</p>
                    <a className="btn bg-primary" href=''>Get Started</a>
                </div>
                <div className='lg:col-span-2 lg:col-start-2'>
                    <div className="carousel w-full rounded-lg">
                        <div id="slide1" className="carousel-item relative w-full ">
                            <img src={require("../images/placeholder.jpg")} className="rounded-lg shadow-2xl h-screen w-full" style={{ aspectRatio: 'unset' }} />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={require("../images/placeholder.jpg")} className="rounded-lg shadow-2xl h-screen w-full" style={{ aspectRatio: 'unset' }}/>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={require("../images/placeholder.jpg")} className="rounded-lg shadow-2xl h-screen w-full" style={{ aspectRatio: 'unset' }}/>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a> 
                            <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src={require("../images/placeholder.jpg")} className="rounded-lg shadow-2xl h-screen w-full" style={{ aspectRatio: 'unset' }}/>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a> 
                            <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Hero_5