import React from 'react'

function HeroOne({heading, backgroundImg}) {
    function scrollToSection(id) {
        const section = document.getElementById(id);
        const offset = 150;

        if (section) {
            const topPos = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: topPos - offset,
                behavior: "smooth",
            });
        }
    }
    return (
        <div id='home'>
        <div className="home-carousel carousel h-screen w-full">
                <div id="home" className="w-full carousel-item relative flex flex-col justify-center items-center">
                    <img src={backgroundImg} className='brightness-50 object-cover w-full h-full absolute'></img>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[270px]">

                        {/* <a href="#promotion2" className="btn btn-circle btn-ghost z-50 text-white">❮</a>  */}
                        
                        <div className='flex flex-col absolute items-center -z-50'>
                            <h1 className='text-5xl text-center text-white font-bold z-30 px-4 bottom-1/2' style={{ fontFamily: 'nunito_sans, sans-serif' }}>{heading}</h1>
                            <div className='flex flex-row mt-4 flex-wrap'>
                                <button className="btn btn-outline text-white" onClick={() => scrollToSection("about")}>About Us</button>
                                <button className="btn btn-ghost text-white" onClick={() => scrollToSection("contact")}>Contact Us</button>
                            </div>
                            
                        </div>                   
                        
                        
                        {/* <a href="#promotion1" className="btn btn-circle btn-ghost z-50 text-white">❯</a> */}
                    </div>
                </div> 
                {/* <div id="promotion1" className="w-full carousel-item relative flex flex-col justify-center items-center">
                    <h1 className='text-4xl text-center font-bold md:text-6xl z-0 text-white'>Promotion #1</h1>
                    <video autoPlay muted loop className='w-full absolute w-full h-full'>
                        <source src={require("./images/groupPromo.MP4")} type="video/mp4" />
                    </video>
                   
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[270px]">
                        
                            
                        <a href="#home" className="btn btn-circle btn-ghost z-50 text-white">❮</a> 
                        
                        
                        
                        <a href="#promotion2" className="btn btn-circle btn-ghost z-50 text-white">❯</a>
                    </div>
                </div>  */}
                {/* <div id="promotion2" className="carousel-item relative w-full flex flex-col align-center justify-center">
                    <h1 className='text-4xl text-center font-bold w-full md:text-6xl z-0 text-white'>Promotion #2</h1>
                    <video autoPlay muted loop className='w-full absolute w-full h-full'>
                        <source src={require("./images/1678638516900729.MP4")} type="video/mp4" />
                    </video>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[270px]">
                        <a href="#promotion1" className="btn btn-circle btn-ghost z-50 text-white">❮</a> 
                        <div className='flex flex-col absolute w-full h-full -z-50 justify-center items-center '>
                            
                        </div>
                        
                        
                        <a href="#home" className="btn btn-circle btn-ghost z-50 text-white">❯</a>
                    </div>
                </div>  */}
            </div>
        </div>
    )
}

export default HeroOne