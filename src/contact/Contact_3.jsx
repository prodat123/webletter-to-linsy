import React, {useState} from 'react'

function Contact_3() {
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
        
        <div className='w-screen bg-white grid lg:grid-cols-2 grid-cols-1 gap-4 px-4 px-12'>
            
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 lg:order-1 order-2">
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
                    <button className="btn bg-primary" onClick={handleEmailClick}>Send</button>
                    </div>
                
                </div>
            </div>
            
            <div className='h-full col-span-1 lg:order-2 order-1'>
                <div className='h-full flex flex-col items-center justify-center'>
                    <div className='text-3xl font-bold'>Contact Us</div>
                    <div>...Description...</div>
                    
                </div>
                
            </div>
        </div>
        
    )
}

export default Contact_3