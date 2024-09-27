import React, { useState } from "react";
import { housesData } from "../data"; // Adjust the import path as necessary

const Compare = () => {
  const [selectedHouse1, setSelectedHouse1] = useState(null);
  const [selectedHouse2, setSelectedHouse2] = useState(null);
  const [compare, setCompare] = useState(false);

  const handleSelectHouse1 = (event) => {
    const selectedId = event.target.value;
    const house = housesData.find((house) => house.id === parseInt(selectedId));
    setSelectedHouse1(house);
  };

  const handleSelectHouse2 = (event) => {
    const selectedId = event.target.value;
    const house = housesData.find((house) => house.id === parseInt(selectedId));
    setSelectedHouse2(house);
  };

  const renderHousePreview = (house) => {
    if (!house) return null;
    return (
      <div className="border p-4 bg-white rounded shadow">
        <img src={house.imageLg} alt={house.name} className="h-48 w-full object-cover mb-4" />
        <h2 className="text-2xl font-bold mb-2">{house.name}</h2>
        <p className="mb-2">{house.country}</p>
      </div>
    );
  };

  const renderComparisonTable = () => {
    if (!compare || !selectedHouse1 || !selectedHouse2) return null;

    return (
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Property</th>
              <th className="py-2 px-4 border">{selectedHouse1.name}</th>
              <th className="py-2 px-4 border">{selectedHouse2.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border">Location</td>
              <td className="py-2 px-4 border">{selectedHouse1.country}</td>
              <td className="py-2 px-4 border">{selectedHouse2.country}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">Bedrooms</td>
              <td className="py-2 px-4 border">{selectedHouse1.bedrooms}</td>
              <td className="py-2 px-4 border">{selectedHouse2.bedrooms}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">Bathrooms</td>
              <td className="py-2 px-4 border">{selectedHouse1.bathrooms}</td>
              <td className="py-2 px-4 border">{selectedHouse2.bathrooms}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">Surface</td>
              <td className="py-2 px-4 border">{selectedHouse1.surface}</td>
              <td className="py-2 px-4 border">{selectedHouse2.surface}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">Year</td>
              <td className="py-2 px-4 border">{selectedHouse1.year}</td>
              <td className="py-2 px-4 border">{selectedHouse2.year}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">Price</td>
              <td className="py-2 px-4 border">${selectedHouse1.price}</td>
              <td className="py-2 px-4 border">${selectedHouse2.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Compare Houses</h1>
      <div className="flex justify-between">
        <div className="w-1/2 p-4">
          <div className="flex items-center justify-center mb-4">
            <select
              onChange={handleSelectHouse1}
              className="p-2 border rounded"
              defaultValue=""
            >
              <option value="" disabled>
                Select a house
              </option>
              {housesData.map((house) => (
                <option key={house.id} value={house.id}>
                  {house.name} - {house.country}
                </option>
              ))}
            </select>
          </div>
          {renderHousePreview(selectedHouse1)}
        </div>
        <div className="w-1/2 p-4">
          <div className="flex items-center justify-center mb-4">
            <select
              onChange={handleSelectHouse2}
              className="p-2 border rounded"
              defaultValue=""
            >
              <option value="" disabled>
                Select a house
              </option>
              {housesData.map((house) => (
                <option key={house.id} value={house.id}>
                  {house.name} - {house.country}
                </option>
              ))}
            </select>
          </div>
          {renderHousePreview(selectedHouse2)}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCompare(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
          disabled={!selectedHouse1 || !selectedHouse2}
        >
          Compare Now
        </button>
      </div>
      {renderComparisonTable()}
    </div>
  );
};

export default Compare;
