import React, { useEffect, useRef, useState } from 'react';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About_Template = ({ title, content, signature, bgColor, textColor }) => {
  const [isInView, setIsInView] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust threshold as needed
  });

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
    }
  }, [inView, isVisible]);

  useEffect(() => {
    if (isVisible) {
      setIsInView(true);
    }
  }, [isVisible]);

  return (
    <section ref={ref} className="py-8" style={{ background: bgColor }}>
        <div className="max-w-screen-xl mx-auto px-4 text-gray-800 md:px-8">
            <div className="max-w-2xl mx-auto text-center">
            <h2 className={`text-5xl font-semibold mb-6 text-center font-sloopscript`} style={{ color: textColor }}>{title}</h2>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: isInView ? "100%" : 0 }}
                transition={{ duration: 1 }}
                className={`border-t-4 border-b-2 my-4`}
                style={{ borderColor: textColor }}
            ></motion.div>
            </div>
            <div className="mt-12">
            <div className={`text-2xl text-justify`}>
                {content.map((line, idx) => (
                <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: idx * 1.3 }}
                    className="mb-4 text-center" style={{color: textColor}}
                >{line}</motion.p>
                ))}
            </div>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: isInView ? "100%" : 0 }}
                transition={{ duration: 1 }}
                className={`border-t-4 border-b-2 my-4`}
                style={{ borderColor: textColor }}
            ></motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: content.length * 1.3 }}
                className={`flex justify-end items-center`}
            >
                <p className={`text-xl font-bold mr-2`} style={{ color: textColor }}>{signature}</p>
                <motion.div
                whileHover={{ rotate: 360 }}
                >
                <FontAwesomeIcon icon={faHeart} size={'lg'} color={textColor} />
                </motion.div>
            </motion.div>
            </div>
        </div>
    </section>
  );
};

export default About_Template;
