import React from "react";
import { housesData } from "../data"; // Adjust the import path as necessary

const Compare = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Compare Houses</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Image</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Location</th>
              <th className="py-2 px-4 border">Bedrooms</th>
              <th className="py-2 px-4 border">Bathrooms</th>
              <th className="py-2 px-4 border">Surface</th>
              <th className="py-2 px-4 border">Year</th>
              <th className="py-2 px-4 border">Price</th>
            </tr>
          </thead>
          <tbody>
            {housesData.map((house) => (
              <tr key={house.id}>
                <td className="py-2 px-4 border">
                  <img src={house.image} alt={house.name} className="h-20 w-20 object-cover" />
                </td>
                <td className="py-2 px-4 border">{house.name}</td>
                <td className="py-2 px-4 border">{house.country}</td>
                <td className="py-2 px-4 border">{house.bedrooms}</td>
                <td className="py-2 px-4 border">{house.bathrooms}</td>
                <td className="py-2 px-4 border">{house.surface}</td>
                <td className="py-2 px-4 border">{house.year}</td>
                <td className="py-2 px-4 border">${house.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Compare;
