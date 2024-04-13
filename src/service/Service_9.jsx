import React from 'react'

function Service_9() {
    const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>,
            title: "Free Consultation to Set Your Fitness Goals.",
            desc: "Unlock your fitness journey with a complimentary consultation to tailor your goals."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>,
            title: "Free Body Test Because Every Body is Beautifully Different.",
            desc: "Embrace the beauty of diversity with our Free Body Test."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>,
            title: "Treat Yourself With Our Membership Discounts.",
            desc: "Elevate self-care and embrace a healthier lifestyle while enjoying special perks and savings."
        },
        
    ]
    return (
        <section className="py-14 relative" style={{ fontFamily: 'nunito_sans, sans-serif' }} id='services'>
                
            <div class="ml-3 w-96 h-96 bg-primary absolute rounded-full rotate-60 -z-10 top-1/2 opacity-[0.5]">
                <img src={require("../images/soulfit/IVAN1103.JPG")} className='h-full w-full object-cover rounded-full brightness-50'></img>
            </div>
            <div class="mr-3 w-44 h-44 bg-primary rounded-full rotate-120 absolute right-0 top-1/4 -z-10 opacity-[0.5]">
                <img src={require("../images/soulfit/IVAN0476.JPG")} className='h-full w-full object-cover rounded-full brightness-50'></img>

            </div>

            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-xl mx-auto space-y-3 sm:text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        We got you covered!
                    </h3>
                    <br></br>
                    <h1 className="text-4xl font-bold text-primary">
                       With Irresistible Bonuses.
                    </h1>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 bg-secondary text-primary rounded-lg flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Service_9