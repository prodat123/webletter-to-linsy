// ConfettiEffect.js
import React, { useEffect } from 'react';
import Confetti from 'react-confetti';
import { motion, AnimatePresence } from 'framer-motion';

const ConfettiEffect = ({ duration }) => {
    useEffect(() => {
        // Add animation or any other effects here
    }, []);

    const text = "WOOO HAPPY BDAYY🥳🎉🎊"; // Text to animate

    return (
        <div className="h-screen flex justify-center items-center text-center bg-primary">
        <AnimatePresence> 
            <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-7xl font-bold text-secondary"
            >
            {text.split("").map((letter, index) => (
                <motion.span
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                >
                {letter}
                </motion.span>
            ))}
            </motion.h1>
        </AnimatePresence>
        <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={300}
            gravity={0.4}
            run={duration > 0} // Start confetti only when duration is provided
            timeout={duration + 10000} // Add 5 seconds more
        />
        </div>
    );
};

export default ConfettiEffect;
