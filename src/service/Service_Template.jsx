import React from 'react';
import { Link } from 'react-router-dom';

const Service_Template = ({ services, title, bgColor, textColor, buttonColor }) => {

    // Layout 1 (Horizontal)
    const FEATURE_LAYOUT_1 = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
    };

    // Layout 2 (Vertical)
    const FEATURE_LAYOUT_2 = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    };

    // Layout 3 (Block)
    const FEATURE_LAYOUT_3 = {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1rem',
    };

    // Layout 4 (Zigzag)
    const FEATURE_LAYOUT_4 = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
    };

    // Layout 5 (Creative)
    const FEATURE_LAYOUT_5 = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
    };

    const FEATURE_LAYOUT_6 = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
    };

    const renderSpecialDiv = () => {
        const randomGradient = () => {
            const gradients = [
                `radial-gradient(ellipse farthest-corner at 50% 50%, ${bgColor} 0%, white 100%)`,
                `radial-gradient(ellipse farthest-corner at 25% 25%, ${bgColor} 0%, white 100%)`,
                `radial-gradient(ellipse farthest-corner at 75% 75%, ${bgColor} 0%, white 100%)`,
                `radial-gradient(ellipse farthest-corner at 33% 33%, ${bgColor} 0%, white 100%)`,
                `radial-gradient(ellipse farthest-corner at 66% 66%, ${bgColor} 0%, white 100%)`,
                `radial-gradient(ellipse farthest-corner at 20% 80%, ${bgColor} 0%, white 100%)`,
                `radial-gradient(ellipse farthest-corner at 80% 20%, ${bgColor} 0%, white 100%)`,
            ];
            return gradients[Math.floor(Math.random() * gradients.length)];
        };
        
                    
        
        return (
            <div className="absolute flex inset-0 overflow-hidden">
                <div className="align-center justify-center inset-0 w-full mx-auto blur-[10px] opacity-50" style={{ background: randomGradient() }}></div>
            </div>        
        );
        
    };
    


    // Function to check screen width and adjust layout accordingly
    const randomLayout = () => {
        const layoutOptions = [FEATURE_LAYOUT_1, FEATURE_LAYOUT_2, FEATURE_LAYOUT_3, FEATURE_LAYOUT_4, FEATURE_LAYOUT_5, FEATURE_LAYOUT_6];
        return layoutOptions[Math.floor(Math.random() * layoutOptions.length)];
    };

    // Render features with consistent colors and random layout
    return (
        // <section className="py-14 relative" style={{ backgroundColor: '#FFFFFF' }}>
        //     <div className="max-w-screen-xl px-4 text-gray-600 md:px-8">
        //         <div className="max-w-xl space-y-3 relative z-50">
        //             <h3 className="text-secondary font-semibold" style={{ color: textColor }}>Features</h3>
        //             <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">What we provide</p>
        //             <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius</p>
        //         </div>
        //         <div className="mt-12 relative z-10">
        //             <ul className="grid gap-x-12" style={randomLayout()}>
        //                 {features.map((item, idx) => (
        //                     <li key={idx} className="space-y-3 p-4 border rounded drop-shadow-md">
        //                         <div className="w-12 h-12 border text-primary rounded-full flex items-center justify-center" style={{ color: textColor }}>
        //                             {item.icon}
        //                         </div>
        //                         <h4 className="text-lg text-gray-800 font-semibold">{item.title}</h4>
        //                         <p>{item.desc}</p>
        //                         <button className='px-4 py-2 border rounded w-32 text-white' style={{ backgroundColor: buttonColor }}>Learn more</button>
        //                     </li>
        //                 ))}
        //             </ul>

        //         </div>
        //         {renderSpecialDiv()}

        //     </div>
        // </section>
        <section className={`py-16`} style={{ background: `linear-gradient(to bottom right, ${bgColor}, #FFE6EB)` }}>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-800 md:px-8">
                <div className="max-w-3xl mx-auto sm:text-center">
                    <h2 className="text-4xl font-semibold mb-8">{title}</h2>
                </div>
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white rounded-md p-3 border overflow-hidden shadow-md">
                            <div className="text-pink-500 mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-700">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Service_Template;
