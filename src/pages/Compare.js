import React, { useState, useEffect, useRef } from "react";
import Select from 'react-select';
import { housesData } from "../data"; // Adjust the import path as necessary
import { FaPlus, FaTrash } from 'react-icons/fa'; // Import trash icon for deletion

const Compare = () => {
  const [selectedHouses, setSelectedHouses] = useState([null, null]); // Initialize with two null values
  const [compare, setCompare] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [bestDeal, setBestDeal] = useState(null); // State to store the best deal
  const comparisonTableRef = useRef(null); // Reference to the comparison table

  const handleSelectHouse = (selectedOption, index) => {
    const newHouses = [...selectedHouses];
    if (selectedOption) {
      const house = housesData.find((house) => house.id === parseInt(selectedOption.value));
      newHouses[index] = house;
    } else {
      newHouses[index] = null; // Clear selection
    }
    setSelectedHouses(newHouses);
  };

  const addHouseSelect = () => {
    setSelectedHouses([...selectedHouses, null]);
  };

  const removeHouseSelect = (index) => {
    // Prevent removal if there are only two sections
    if (selectedHouses.length > 2) {
      setSelectedHouses(selectedHouses.filter((_, i) => i !== index));
    }
  };

  const renderHousePreview = (house) => {
    if (!house) return null;
    return (
      <div className="border p-4 bg-white rounded shadow flex flex-col">
        <img src={house.imageLg} alt={house.name} className="h-auto w-full object-cover mb-4" />
        <h2 className="text-2xl font-bold mb-2">{house.name}</h2>
        <p className="mb-2">{house.city}</p>
      </div>
    );
  };

  // Refactored function to calculate and sort scores for all selected houses
  const calculateScores = () => {
    if (selectedHouses.some(house => !house)) return [];
  
    // Extract prices from selected houses and find the min/max
    const prices = selectedHouses.map(house => Number(house.price));
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
  
    // Calculate scores for each selected house
    const scores = selectedHouses.map(house => {
      // Normalize price: 1 for the lowest price, 0 for the highest price
      const priceScore = (maxPrice - Number(house.price)) / (maxPrice - minPrice) || 0; // Avoid division by zero
      const bedroomScore = Number(house.bedrooms) || 0; // More bedrooms = higher score
      const bathroomScore = Number(house.bathrooms) || 0; // More bathrooms = higher score
      const surfaceScore = Number(house.surface) || 0; // More surface area = higher score
  
      // Combine scores with weights (adjustable)
      const totalScore = 
        (bedroomScore * 0.2) + 
        (bathroomScore * 0.2) + 
        (surfaceScore * 0.2) + 
        (priceScore * 0.4); // Price now has higher weight (40%)
  
      return {
        house,
        score: totalScore,
      };
    });
  
    // Sort scores in ascending order (lowest score = best deal)
    scores.sort((a, b) => b.score - a.score); // Higher score is better now (price normalized)
  
    return scores;
  };
  
  useEffect(() => {
    const scores = calculateScores();
    console.log("All house scores:", scores); // Print all scores to the console
    if (scores.length > 0) {
      // Set the house with the maximum score as the best deal (since it's sorted in descending order)
      setBestDeal(scores[0]);
    }
  }, [selectedHouses]);

  const renderComparisonTable = () => {
    if (!compare || selectedHouses.some(house => !house)) return null;

    const scores = calculateScores();
    const bestDeal = scores[0]; // Best deal is the first element after sorting

    // Calculate max/min values
    const maxBedrooms = Math.max(...selectedHouses.map(house => house.bedrooms));
    const maxBathrooms = Math.max(...selectedHouses.map(house => house.bathrooms));
    const minPrice = Math.min(...selectedHouses.map(house => house.price));
    const maxSurface = Math.max(...selectedHouses.map(house => house.surface));

    return (
      <div className="overflow-x-auto mt-8" ref={comparisonTableRef}>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4"></th>
              {selectedHouses.map(house => (
                <th
                  key={house.id}
                  className={`py-2 px-4 text-center ${bestDeal.house.id === house.id ? "bg-yellow-100" : ""}`}
                >
                  {bestDeal.house.id === house.id && (
                    <span className="text-yellow-500 font-bold">Best Deal</span>
                  )}
                </th>
              ))}
            </tr>
            <tr>
              <th className="py-2 px-4 border">Property</th>
              {selectedHouses.map(house => (
                <th key={house.id} className="py-2 px-4 border">{house.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {["Location", "Bedrooms", "Bathrooms", "Surface", "Year", "Price"].map((property) => (
              <tr key={property}>
                <td className="py-2 px-4 border">{property}</td>
                {selectedHouses.map((house) => (
                  <td 
                    key={house.id} 
                    className={`py-2 px-4 border ${
                      (property === "Bedrooms" && house.bedrooms === maxBedrooms) ? "bg-green-200" :
                      (property === "Bathrooms" && house.bathrooms === maxBathrooms) ? "bg-green-200" :
                      (property === "Price" && house.price === minPrice) ? "bg-red-200" :
                      (property === "Surface" && house.surface === maxSurface) ? "bg-blue-200" :
                      ""
                    }`}
                  >
                    {property === "Location" ? `${house.city}, ${house.country}` : house[property.toLowerCase()]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Create options for React Select with filtering based on the search term
  const filteredHouses = housesData.filter(house => {
    const searchLower = searchTerm.toLowerCase();
    return (
      (house.state && house.state.toLowerCase().includes(searchLower)) || 
      (house.country && house.country.toLowerCase().includes(searchLower))
    );
  });

  const houseOptions = filteredHouses.map((house) => ({
    value: house.id,
    label: `${house.name} - ${house.city} (${house.state}, ${house.country})`
  }));

  // Reset the selected houses when the search term changes
  useEffect(() => {
    if (!searchTerm) {
      setSelectedHouses([null, null]); // Keep two selections when search term is cleared
    }
  }, [searchTerm]);

  const handleCompareClick = () => {
    setCompare(!compare);
    setTimeout(() => {
      if (comparisonTableRef.current) {
        comparisonTableRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Give it a slight delay to allow rendering
  };

  return (
    <div className="container mx-auto py-8 pb-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Compare Houses</h1>

      {/* Search Input */}
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Search by state" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="border rounded px-4 py-2 w-full"
        />
      </div>

      <div className="flex flex-wrap justify-between mb-4">
        {selectedHouses.map((selectedHouse, index) => (
          <div key={index} className="flex flex-col w-full md:w-1/3 p-2" style={{ minHeight: '370px' }}>
            <div className="flex items-center justify-between mb-2">
              <div className="w-full"> {/* Responsive select container */}
                <Select
                  options={houseOptions}
                  onChange={(option) => handleSelectHouse(option, index)}
                  className="w-full"
                  placeholder="Select a house"
                  isClearable
                />
              </div>
              <button 
                onClick={() => removeHouseSelect(index)} 
                className="ml-2 text-red-500"
                disabled={selectedHouses.length <= 2} // Prevent removing if only two select sections remain
              >
                <FaTrash />
              </button>
            </div>
            {renderHousePreview(selectedHouse)}
          </div>
        ))}
        <button 
          onClick={addHouseSelect}
          className="flex items-center justify-center w-full md:w-32 p-4 bg-blue-500 text-white rounded mt-2"
        >
          <FaPlus /> Add House
        </button>
      </div>
      
      <div className="flex justify-center mt-4">
        <button
          onClick={handleCompareClick}
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded"
        >
          {compare ? "Close Comparison" : "Compare"}
        </button>
      </div>

      {renderComparisonTable()}
    </div>
  );
};

export default Compare;
