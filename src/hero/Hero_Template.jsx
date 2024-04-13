import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

const Hero_Template = ({ bgColor, textColor, title, description, buttonLabel, complementColor, imageSrc }) => {
  const heroStyle = {
    backgroundColor: bgColor,
    color: textColor
  };

  const buttonStyle = {
    backgroundColor: complementColor,
  };


  return (
    // <section className="h-screen grid" style={heroStyle}>
    //   <div className="hero-content grid lg:grid-cols-3 grid-cols-1 p-4">
    //     <div className='col-span-2  w-full text-center'>
    //       <h1 className='text-3xl font-bold'>{title}</h1>
    //       <p className='text-md'>{description}</p>
    //       <br></br>
    //       <a className={`px-4 py-2 text-white border rounded w-32`} style={buttonStyle} href=''>{buttonLabel}</a>
    //     </div>
    //     <div className='lg:col-span-1 lg:col-start-3'>
    //       <img src={imageSrc} alt="Hero" />
    //     </div>
    //   </div>
    // </section>
    <section
        className="relative flex flex-col items-center justify-center h-screen"
        style={heroStyle}
    >
        
        <motion.h1
            className="text-8xl font-bold mb-4 mt-12 text-center font-sloopscript"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ color: textColor }}
            whileHover={{scale: 1.1}}
        >
            {title}
        </motion.h1>
        <motion.h1
            className="text-lg mb-8 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ color: textColor }}
            whileHover={{scale: 1.1}}
        >
            {description}
        </motion.h1>
        {/* <motion.button
            className="text-white font-bold py-2 px-4 rounded-full shadow-lg"
            style={{background: textColor}}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
        >
            Read More
        </motion.button> */}
        <motion.div
            className="heart-icon"
            style={{ text: textColor }}
            initial={{ scale: 1, y: 0 }} // Set initial y position
            animate={{ y: [0, -10, 0] }} // Include y position
            transition={{ repeat: Infinity, duration: 0.5, repeatDelay: 1 }}
        >
            <FontAwesomeIcon icon={faArrowDown} />
        </motion.div>


        {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary w-1/2 h-3/4"
        
        >
            <img className='rounded-md' src={require('../images/mileyBirthday/pic1.jpeg')}></img>
        </motion.div> */}
        
        
        
    </section>
  );
};

export default Hero_Template;
