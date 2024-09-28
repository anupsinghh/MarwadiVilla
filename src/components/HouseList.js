import React, { useContext, useEffect, useState } from 'react';
import { HouseContext } from "./HouseContext";
import House from "./House";
import { ImSpinner2 } from "react-icons/im";
import { motion } from 'framer-motion';

const HouseList = () => {
    const { houses, loading } = useContext(HouseContext);
    const [scrollDir, setScrollDir] = useState('down');
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? 'down' : 'up';
            if (direction !== scrollDir && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                setScrollDir(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };

        window.addEventListener('scroll', updateScrollDirection); // Add event listener

        return () => {
            window.removeEventListener('scroll', updateScrollDirection); // Cleanup event listener
        };
    }, [scrollDir]);

    useEffect(() => {
        setInitialLoad(false); // Set initial load to false after first render
    }, []);

    console.log('Loading:', loading);
    console.log('Houses:', houses);

    if (loading) {
        return (
            <ImSpinner2 className='mx-auto animate-spin text-4xl text-violet-700 font-bold mt-[200px]' />
        );
    }

    // Filter houses with IDs from 1 to 9
    const filteredHouses = houses.filter(house => house.id >= 1 && house.id <= 9);

    console.log('Filtered Houses:', filteredHouses);

    if (filteredHouses.length < 1) {
        return <div>Sorry, no match found!</div>;
    }

    // Animation variants for left, center, and right cards
    const variants = {
        hiddenLeft: { opacity: 0, x: -100 },
        hiddenCenter: { opacity: 0, y: 100 },
        hiddenRight: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.9, ease: 'easeInOut' }
        },
        hiddenUp: { opacity: 0, y: -100, transition: { duration: 0.9, ease: 'easeInOut' } },
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 },
        }
    };

    return (
        <section className='mb-20'>
            <div className="container mx-auto max-w-[1100px]">
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5'>
                    {filteredHouses.map((house, index) => {
                        let animationVariant;

                        // Determine the animation variant based on the position in the row and scroll direction
                        if (initialLoad) {
                            animationVariant = "visible"; // Animate on initial load
                        } else if (scrollDir === 'down') {
                            if (index % 3 === 0) {
                                // Left column (slides in from left)
                                animationVariant = "hiddenLeft";
                            } else if (index % 3 === 1) {
                                // Center column (slides in from bottom)
                                animationVariant = "hiddenCenter";
                            } else {
                                // Right column (slides in from right)
                                animationVariant = "hiddenRight";
                            }
                        } else {
                            animationVariant = "hiddenUp"; // Slide up on scroll up
                        }

                        return (
                            <Link to={`/property/${house.id}`} key={`${index}-${scrollDir}`}>
                                <motion.div
                                    className='relative z-10'
                                    initial={animationVariant} // Start off-screen
                                    animate="visible" // Animate when in view
                                    exit={animationVariant} // Animate exit
                                    whileHover="hover" // Grow slightly on hover
                                    variants={variants} // Apply defined variants
                                >
                                    <House house={house} />
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default HouseList;
