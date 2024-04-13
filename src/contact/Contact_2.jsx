import React, {useState} from 'react'

function Contact_2() {
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
    <div className="bg-primary w-screen">
        <img src={require("../images/placeholder.jpg")} className='w-screen h-screen z-0 absolute'></img>
        <div className='bg-black opacity-30 w-full h-screen absolute z-10'></div>
        
        <div className='grid grid-cols-3 h-screen'>
            <div className='col-start-2 flex flex-col justify-center'>
                

                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 z-20 p-4">
                <div className='text-3xl font-bold text-center text-black underline'>Contact Us</div>
                    <div className="card-body">
                        <div className="form-control">
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
                        <button className="btn bg-[#ADD9E6]" onClick={handleEmailClick}>Send</button>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
            
        
        
        
        
    </div>
  )
}

export default Contact_2