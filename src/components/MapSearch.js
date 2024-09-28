import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { housesData } from "../data";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Mock geocoding function
const getCoordinates = (address) => {
    const cityCoordinates = {
        "Mumbai": [19.0760, 72.8777],
        "Delhi": [28.6139, 77.2090],
        "Bengaluru": [12.9716, 77.5946],
        "Chennai": [13.0827, 80.2707],
        "Hyderabad": [17.3850, 78.4867],
        "Kolkata": [22.5726, 88.3639],
        "Pune": [18.5214, 73.8567]
    };

    for (let city in cityCoordinates) {
        if (address.includes(city)) {
            return cityCoordinates[city];
        }
    }

    // Default to center of India if city not found
    return [20.5937, 78.9629];
};

// Component to update map view
function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

const MapSearch = () => {
    const [center, setCenter] = useState([20.5937, 78.9629]);
    const [zoom, setZoom] = useState(5);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredHouses, setFilteredHouses] = useState(housesData);
    const navigate = useNavigate();
    const mapRef = useRef();

    useEffect(() => {
        const results = housesData.filter(house =>
            house.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            house.address.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredHouses(results);

        if (results.length === 1) {
            const [lat, lng] = getCoordinates(results[0].address);
            setCenter([lat, lng]);
            setZoom(12);
        } else {
            fitMapToBounds();
        }
    }, [searchTerm]);

    const fitMapToBounds = () => {
        if (mapRef.current) {
            const bounds = L.latLngBounds(filteredHouses.map(house => getCoordinates(house.address)));
            mapRef.current.fitBounds(bounds);
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleBackToHome = () => {
        navigate('/');
    };

    const handlePropertyClick = (id) => {
        navigate(`/property/${id}`);
    };

    return (
        <div className="h-screen w-full flex flex-col">
            <div className="p-4 bg-white shadow-md z-10">
                <input
                    type="text"
                    placeholder="Search by name or address"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full p-2 border rounded"
                />
                <button
                    onClick={handleBackToHome}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Back to Home
                </button>
            </div>
            <div className="flex-grow">
                <MapContainer 
                    center={center} 
                    zoom={zoom} 
                    style={{ height: "100%", width: "100%" }}
                    ref={mapRef}
                >
                    <ChangeView center={center} zoom={zoom} />
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {filteredHouses.map((house) => {
                        const [lat, lng] = getCoordinates(house.address);
                        return (
                            <Marker key={house.id} position={[lat, lng]}>
                                <Popup>
                                    <div>
                                        <h2 className="text-lg font-bold">{house.name}</h2>
                                        <p>{house.address}</p>
                                        <p>Price: ₹{house.price}/month</p>
                                        <p>Bedrooms: {house.bedrooms}</p>
                                        <p>Bathrooms: {house.bathrooms}</p>
                                        <button 
                                            onClick={() => handlePropertyClick(house.id)}
                                            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </Popup>
                            </Marker>
                        );
                    })}
                </MapContainer>
            </div>
        </div>
    );
};

export default MapSearch;