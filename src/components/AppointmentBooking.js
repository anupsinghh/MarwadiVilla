// src/components/AppointmentBooking.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { housesData } from '../data'; // Adjust the path as needed
import AppointmentList from './AppointmentList'; // Import the new component

const AppointmentBooking = () => {
  const { id } = useParams();
  const numericId = parseInt(id, 10);
  const house = housesData.find((house) => house.id === numericId);
  const [appointments, setAppointments] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    // Fetch appointments from localStorage
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments.filter(app => app.houseId === numericId));
  }, [numericId]);

  const handleBookAppointment = () => {
    const newAppointment = {
      houseId: numericId,
      name,
      email,
      phone,
      date,
      time,
      propertyImage: house.imageLg, // Add property image
      propertyName: house.address, // Add property name
      propertyLocation: house.country, // Add property location
      agentName: house.agent.name, // Add agent name
      agentPhone: house.agent.phone // Add agent phone
    };

    // Save to localStorage
    const updatedAppointments = [...appointments, newAppointment];
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    setAppointments(updatedAppointments);

    // Clear form fields
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setTime('');
  };

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

  const { name: agentName, phone: agentPhone, email: agentEmail, image: agentImage } = house.agent;

  return (
    <div className='max-w-7xl mx-auto p-5'>
      <Link to="/" className='text-violet-600 hover:underline mb-4 inline-block'>
        &larr; Back to Listings
      </Link>
      <h1 className='text-3xl font-bold mb-8 text-center'>Book Appointment</h1>
      <div className='bg-white shadow-lg rounded-lg p-6 mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Contact Agent</h2>
        <div className='flex items-center mb-4'>
          <img src={agentImage} alt={agentName} className='w-12 h-12 rounded-full mr-4' />
          <div>
            <p className='text-gray-800 font-semibold'>{agentName}</p>
            <p className='text-gray-600'>{agentPhone}</p>
            <p className='text-gray-600'>{agentEmail}</p>
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleBookAppointment(); }}>
          <div className='mb-4'>
            <label className='block text-gray-700'>Name</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full p-2 border rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-2 border rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Phone</label>
            <input
              type='tel'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className='w-full p-2 border rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Date</label>
            <input
              type='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className='w-full p-2 border rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Time</label>
            <input
              type='time'
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className='w-full p-2 border rounded'
              required
            />
          </div>
          <button type='submit' className='w-full p-3 bg-violet-600 text-white rounded'>
            Book Appointment
          </button>
        </form>
      </div>
      <h2 className='text-2xl font-semibold mb-4'>Previously Booked Appointments</h2>
      <AppointmentList appointments={appointments} /> {/* Use the new component here */}
    </div>
  );
};

export default AppointmentBooking;
