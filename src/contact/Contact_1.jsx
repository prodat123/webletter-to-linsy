import React, {useState} from 'react'

function Contact_1() {
    
    const [body, setBody] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");


    const handleEmailClick = () => {
        const email = 'maxwellwijaya00@gmail.com';
        const subject = 'Contact Form Submission';
        const emailBody = 'Name: ' + name + '\n' + 'Phone Number: ' + phoneNumber + '\n' + 'Message: ' + '\n' + body 
    
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
        window.location.href = mailtoUrl;
    };
        
    return (
        
        <div className='w-screen bg-white grid lg:grid-cols-2 grid-cols-1 gap-4 px-12 mt-12' id='contact'>
            <div className='h-full col-span-1'>
                <div className='h-full flex flex-col items-center justify-center'>
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.370245607322!2d106.60368983182316!3d-6.284416690358856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd856d3c8d11%3A0xdab3fc38f739191e!2sSoulfit%20Fitness!5e0!3m2!1sen!2sid!4v1710159025781!5m2!1sen!2sid" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                    
                </div>
            
            </div>
            <div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className='text-3xl font-bold'>Contact Us and We'll Guarantee You Will Get SoulFit!</div>
                        {/* <div>Ararasa BSD Lt 1 BSD, Tangerang</div> */}

                        <a className='hover:scale-110 transform transition-transform duration-300 ease-in-out bg-primary text-white px-4 py-2 rounded text-center' href='https://wa.me/+6282310937979' target='_blank'>Contact Us Through WHATSAPP</a>
                        <a className='hover:scale-110 transform transition-transform duration-300 ease-in-out bg-primary text-white px-4 py-2 rounded text-center' href='https://www.instagram.com/soulfit.fitness?igsh=czN1OGhmNXpwcjV2' target='_blank'>Contact Us Through INSTAGRAM</a>
                        <a className='hover:scale-110 transform transition-transform duration-300 ease-in-out bg-primary text-white px-4 py-2 rounded text-center' href='https://www.tiktok.com/@soulfit.fitness?_t=8kaWZfWvOqo&_r=1' target='_blank'>Contact Us Through TikTok</a>

                        {/* <div className="form-control">
                            
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name..." className="input input-bordered" onChange={(e) => {setName(e.target.value)}}/>
                        
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" placeholder="Phone Number..." className="input input-bordered" onChange={(e) => {setPhoneNumber(e.target.value)}}/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea type="text" placeholder="Message..." className="input input-bordered" onChange={(e) => {setBody(e.target.value)}}/>
                        </div>
                        
                        <div className="form-control mt-6">
                        <button className="btn bg-secondary text-white" onClick={handleEmailClick}>Send</button>
                        </div>
                     */}
                    </div>
                </div>
            </div>
            
            
        </div>
        
    )
}

export default Contact_1