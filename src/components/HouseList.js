import React, { useContext } from 'react';
import { HouseContext } from "./HouseContext";
import House from "./House";
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
    const { houses, loading } = useContext(HouseContext);

    // Debug: Log the houses data and loading state
    console.log('Loading:', loading);
    console.log('Houses:', houses);

    if (loading) {
        return (
            <ImSpinner2 className='mx-auto animate-spin text-4xl text-violet-700 font-bold mt-[200px]' />
        );
    }

    // Filter houses with IDs from 1 to 9
    const filteredHouses = houses.filter(house => house.id >= 1 && house.id <= 9);

    console.log('Filtered Houses:', filteredHouses); // Debug log

    if (filteredHouses.length < 1) {
        return <div>Sorry, no match found!</div>;
    }

    return (
        <section className='mb-20'>
            <div className="container mx-auto max-w-[1100px]">
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5'>
                    {filteredHouses.map((house, index) => {
                        return (
                            <Link to={`/property/${house.id}`} key={index}>
                                <House house={house} />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default HouseList;
