// import React, { useState } from 'react';
// import FlowerBurst from './FlowerBurst';

// const MouseTrail = () => {
//     const [flowerBursts, setFlowerBursts] = useState([]);

//     const handleClick = (event) => {
//         const { clientX, clientY } = event;
//         setFlowerBursts((prevBursts) => [...prevBursts, { x: clientX, y: clientY }]);
//     };

//     return (
//         <div
//         className="fixed inset-0 z-50 pointer-events-none"
//         onClick={handleClick}
//         >
//         {flowerBursts.map((burst, index) => (
//             <FlowerBurst key={index} x={burst.x} y={burst.y} />
//         ))}
//         </div>
//     );
// };

// export default MouseTrail;

import React, { useState, useEffect } from 'react';
import FlowerBurst from './FlowerBurst';

const MouseTrail = () => {
    const [flowerBursts, setFlowerBursts] = useState([]);

    const handleClick = (event) => {
        const { clientX, clientY } = event;
        setFlowerBursts((prevBursts) => [...prevBursts, { x: clientX, y: clientY }]);
    };

    useEffect(() => {
        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    return (
        <div className="fixed inset-0 z-50 pointer-events-none">
        {flowerBursts.map((burst, index) => (
            <FlowerBurst key={index} x={burst.x} y={burst.y} />
        ))}
        </div>
    );
};

export default MouseTrail;


