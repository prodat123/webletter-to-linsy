import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Service_Gallery = ({ title, description, textColor, bgColor, images }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const { ref, inView } = useInView({ triggerOnce: true });

    const openImage = (index) => {
        setSelectedImage(index);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        setSelectedImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage = () => {
        setSelectedImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <section ref={ref} className="py-8">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <h2 className="text-5xl font-semibold mb-4 text-center font-sloopscript" style={{ color: textColor }}>
                {title}
                </h2>
                <p className="text-lg mb-8 text-center" style={{color: textColor}}>
                {description}
                </p>
                <AnimatePresence>
                {inView && (
                    <motion.div
                    className="flex flex-wrap justify-center gap-4 p-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    >
                    {images.map((image, index) => (
                        <motion.div
                        key={index}
                        className="relative overflow-hidden rounded-lg cursor-pointer w-48"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => openImage(index)}
                        >
                        <img
                            src={image.url}
                            alt={`Artwork ${index + 1}`}
                            className="w-full h-auto max-h-48 object-cover rounded-lg"
                        />
                        <AnimatePresence>
                            {selectedImage === index && (
                            <motion.div
                                className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="text-lg">{image.description}</div>
                            </motion.div>
                            )}
                        </AnimatePresence>
                        </motion.div>
                    ))}
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
            {selectedImage !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
               <motion.div
                    className="w-full h-full flex flex-col justify-center items-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                >
                    <img src={images[selectedImage].url} alt={`Artwork ${selectedImage + 1}`} className="w-1/2 h-3/4 object-contain" />
                    <div className="text-white z-50 text-center">{images[selectedImage].description}</div>
                    <div className="absolute top-4 left-4 text-white">
                        <button onClick={prevImage}><FontAwesomeIcon icon={faArrowLeft} /></button>
                    </div>
                    <div className="absolute top-4 right-4 text-white">
                        <button onClick={nextImage}><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                    <div className="absolute bottom-4 right-4 text-white">
                        <button onClick={closeImage}>Close</button>
                    </div>
                </motion.div>




                </div>
            )}
        </section>
    );
};

export default Service_Gallery;
