import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLeaf, faRibbon } from '@fortawesome/free-solid-svg-icons';
import './App.css'; // Import CSS file for animation

const FlowerBurst = ({ x, y }) => {
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
        setFlowers([]);
        }, 1000); // Set the duration for the flower burst to be visible

        // Generate random flowers
        const newFlowers = [];
        for (let i = 0; i < 10; i++) {
        newFlowers.push({
            x: x + Math.random() * 100 - 50, // Random x coordinate within 50 pixels of the clicked point
            y: y + Math.random() * 100 - 50, // Random y coordinate within 50 pixels of the clicked point
            rotation: Math.random() * 360, // Random rotation for variety
        });
        }
        setFlowers(newFlowers);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
        {flowers.map((flower, index) => (
            <FontAwesomeIcon
            key={index}
            icon={faHeart}
            className="absolute animate-burst text-secondary"
            style={{
                left: flower.x,
                top: flower.y,
                fontSize: '2rem',
                transform: `rotate(${flower.rotation}deg)`, // Apply random rotation
            }}
            />
        ))}
        </>
    );
};

export default FlowerBurst;

