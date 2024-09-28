import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { housesData } from '../data'; // Adjust the path as needed
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { RiHeart3Line } from 'react-icons/ri';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Function to get wishlist from local storage
const getWishlistFromLocalStorage = () => {
  const wishlist = localStorage.getItem('wishlist');
  return wishlist ? JSON.parse(wishlist) : [];
};

const PropertyPage = () => {
  const { id } = useParams();
  const numericId = parseInt(id, 10);
  const house = housesData.find((house) => house.id === numericId);
  const [displayPrice, setDisplayPrice] = useState(null);
  const [priceType, setPriceType] = useState('rent');

  // State for wishlist management
  const [wishlist, setWishlist] = useState(getWishlistFromLocalStorage());
  const navigate = useNavigate(); // Use useNavigate for navigation

  useEffect(() => {
    if (house) {
      setDisplayPrice(house.price);
    }
  }, [house]);

  // Toggle wishlist
  const toggleWishlist = () => {
    const updatedWishlist = wishlist.includes(house.id)
      ? wishlist.filter(item => item !== house.id) // Remove from wishlist
      : [...wishlist, house.id]; // Add to wishlist

    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Update local storage

    // Redirect to Wishlist Page if added to wishlist
    if (!wishlist.includes(house.id)) {
      navigate('/wishlist'); // Use navigate instead of history.push
    }
  };

  // Initialize the map with the property location
  useEffect(() => {
    if (house) {
      const map = L.map('map').setView([0, 0], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      const customIcon = L.divIcon({
        html: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
            <path fill="#4F46E5" d="M12 0C7.164 0 3 4.164 3 9c0 7 9 15 9 15s9-8 9-15c0-4.836-4.164-9-9-9zm0 12c-1.656 0-3-1.344-3-3s1.344-3 3-3 3 1.344 3 3-1.344 3-3 3z"/>
          </svg>
        `,
        className: 'custom-icon',
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -36],
      });

      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(house.address)}`)
        .then(response => response.json())
        .then(data => {
          if (data && data.length > 0) {
            const { lat, lon } = data[0];
            map.setView([lat, lon], 13);
            L.marker([lat, lon], { icon: customIcon }).addTo(map)
              .bindPopup(house.address)
              .openPopup();
          }
        })
        .catch(error => console.error('Error:', error));

      return () => {
        map.remove();
      };
    }
  }, [house]);

  if (!house) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <h2 className='text-2xl font-bold mb-4'>Property Not Found</h2>
        <Link to="/" className='text-violet-600 hover:underline'>
          Go Back Home
        </Link>
      </div>
    );
  }

  const { imageLg, type, country, address, bedrooms, bathrooms, surface, description, amenities, agent } = house;

  return (
    <div className='max-w-7xl mx-auto p-5'>
      <Link to="/" className='text-violet-600 hover:underline mb-4 inline-block'>
        &larr; Back to Listings
      </Link>
      <div className='flex flex-col md:flex-row gap-8'>
        <div className='md:w-2/3'>
          <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
            <img className='w-full h-64 object-cover' src={imageLg} alt="house img" />
            <div className='p-6'>
              <div className='flex justify-between items-center mb-4'>
                <div className='text-2xl text-violet-600 font-bold'>
                  ₹{displayPrice} 
                  <span className='text-gray-500 font-light text-base'>
                    {priceType === 'rent' ? '/month' : ' (total)'}
                  </span>
                </div>
                <RiHeart3Line 
                  className={`text-3xl cursor-pointer ${wishlist.includes(house.id) ? 'text-red-500' : 'hover:text-red-500'}`} 
                  onClick={toggleWishlist}
                />
              </div>
              <div className='flex gap-4 mb-4'>
                <button 
                  onClick={() => setPriceType('rent')}
                  className={`px-4 py-2 rounded-full ${priceType === 'rent' ? 'bg-violet-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  Rent
                </button>
                <button 
                  onClick={() => setPriceType('buy')}
                  className={`px-4 py-2 rounded-full ${priceType === 'buy' ? 'bg-violet-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  Buy
                </button>
              </div>
              <div className='flex gap-x-4 mb-2'>
                <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">{type}</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{country}</span>
              </div>
              <h2 className='text-xl font-semibold mb-2'>{address}</h2>
              <p className='text-gray-600 mb-4'>{description}</p>
              <div className='flex justify-around my-4 p-2 border-t-2 border-b-2'>
                <div className='flex items-center gap-2'>
                  <BiBed className='text-2xl text-violet-700' />
                  <span>{bedrooms} Bedrooms</span>
                </div>
                <div className='flex items-center gap-2'>
                  <BiBath className='text-2xl text-violet-700' />
                  <span>{bathrooms} Bathrooms</span>
                </div>
                <div className='flex items-center gap-2'>
                  <BiArea className='text-2xl text-violet-700' />
                  <span>{surface}</span>
                </div>
              </div>
              <div className='mt-4'>
                <h3 className='text-lg font-semibold mb-2'>Amenities</h3>
                <ul className='list-disc list-inside'>
                  {amenities && amenities.map((amenity, index) => (
                    <li key={index} className='text-gray-600'>{amenity}</li>
                  ))}
                </ul>
              </div>
              <div className='mt-4'>
                <h3 className='text-lg font-semibold mb-2'>Agent Information</h3>
                <div className='flex items-center'>
                  <img src={agent.image} alt={agent.name} className='w-12 h-12 rounded-full mr-4' />
                  <div>
                    <p className='text-gray-800 font-semibold'>{agent.name}</p>
                    <p className='text-gray-600'>{agent.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-1/3'>
          <div className='bg-white shadow-lg rounded-lg overflow-hidden sticky top-4'>
            <div id="map" style={{ height: '300px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
