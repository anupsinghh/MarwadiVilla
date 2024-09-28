import React, { useState, useEffect } from 'react';
import { addHouseToLocalStorage } from '../data'; // Ensure this function correctly manages local storage

const Listing = () => {
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    description: '',
    image: '',
    imageLg: '',
    country: '',
    city: '',
    address: '',
    bedrooms: '',
    bathrooms: '',
    surface: '',
    year: '',
    price: '',
    agentName: '',
    agentPhone: '',
  });

  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    // Fetch initial data from local storage
    const storedHouses = JSON.parse(localStorage.getItem('houses')) || [];
    setAllHouses(storedHouses); // Only use data from local storage
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHouse = {
      id: Date.now(), // Use timestamp as a unique ID
      type: formData.type,
      name: formData.name,
      description: formData.description,
      image: formData.image,
      imageLg: formData.imageLg,
      country: formData.country,
      city: formData.city,
      address: formData.address,
      bedrooms: formData.bedrooms,
      bathrooms: formData.bathrooms,
      surface: formData.surface,
      year: formData.year,
      price: formData.price,
      date: new Date().toLocaleDateString(),
      agent: {
        image: '', // You might want to include an agent image if available
        name: formData.agentName,
        phone: formData.agentPhone,
      },
    };

    // Add the new house to local storage
    const updatedHouses = [...allHouses, newHouse];
    localStorage.setItem('houses', JSON.stringify(updatedHouses)); // Update local storage directly
    setAllHouses(updatedHouses); // Update the state with the new house

    // Reset the form
    setFormData({
      type: '',
      name: '',
      description: '',
      image: '',
      imageLg: '',
      country: '',
      city: '',
      address: '',
      bedrooms: '',
      bathrooms: '',
      surface: '',
      year: '',
      price: '',
      agentName: '',
      agentPhone: '',
    });
    alert('Property added successfully!');
  };

  const handleDelete = (id) => {
    const updatedHouses = allHouses.filter(house => house.id !== id); // Remove the house with the specified id
    localStorage.setItem('houses', JSON.stringify(updatedHouses)); // Update local storage
    setAllHouses(updatedHouses); // Update the state to reflect the deletion
    alert('Property deleted successfully!'); // Optional alert
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a Property</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mb-16">
        {/* Form fields for property input */}
        <div>
          <label htmlFor="type" className="block">Type:</label>
          <input type="text" name="type" id="type" value={formData.type} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="name" className="block">Name:</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="description" className="block">Description:</label>
          <textarea name="description" id="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="image" className="block">Image URL:</label>
          <input type="text" name="image" id="image" value={formData.image} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="imageLg" className="block">Large Image URL:</label>
          <input type="text" name="imageLg" id="imageLg" value={formData.imageLg} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="country" className="block">Country:</label>
          <input type="text" name="country" id="country" value={formData.country} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="city" className="block">City:</label>
          <input type="text" name="city" id="city" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="address" className="block">Address:</label>
          <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="bedrooms" className="block">Bedrooms:</label>
          <input type="number" name="bedrooms" id="bedrooms" value={formData.bedrooms} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="bathrooms" className="block">Bathrooms:</label>
          <input type="number" name="bathrooms" id="bathrooms" value={formData.bathrooms} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="surface" className="block">Surface Area:</label>
          <input type="text" name="surface" id="surface" value={formData.surface} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="year" className="block">Year:</label>
          <input type="text" name="year" id="year" value={formData.year} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="price" className="block">Price:</label>
          <input type="number" name="price" id="price" value={formData.price} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="agentName" className="block">Agent Name:</label>
          <input type="text" name="agentName" id="agentName" value={formData.agentName} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="agentPhone" className="block">Agent Phone:</label>
          <input type="text" name="agentPhone" id="agentPhone" value={formData.agentPhone} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">
          Add Property
        </button>
      </form>

      <h2 className="text-xl font-bold mb-4">Existing Properties</h2>
      <div className="space-y-4">
        {allHouses.length === 0 ? (
          <p>No properties added yet.</p>
        ) : (
          allHouses.map((house) => (
            <div key={house.id} className="border p-4 rounded shadow">
              <img src={house.image} alt={house.name} className="w-full h-48 object-cover mb-2 rounded" />
              <h3 className="font-bold text-lg">{house.name}</h3>
              <p>{house.description}</p>
              <p className="text-gray-600">Location: {house.city}, {house.country}</p>
              <p className="text-gray-600">Price: ${house.price}</p>
              <button
                onClick={() => handleDelete(house.id)}
                className="mt-2 bg-red-500 text-white p-1 rounded hover:bg-red-600 transition duration-200"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Listing;
