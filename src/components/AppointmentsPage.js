// src/components/AppointmentsPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppointmentList from './AppointmentList';

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments from localStorage
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments);
  }, []);

  const handleCancel = (id) => {
    // Filter out the canceled appointment
    const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
    
    // Update localStorage
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    
    // Update state
    setAppointments(updatedAppointments);
  };

  return (
    <div className='max-w-7xl mx-auto p-5'>
      <Link to="/" className='text-violet-600 hover:underline mb-4 inline-block'>
        &larr; Back to Home
      </Link>
      <h1 className='text-3xl font-bold mb-8 text-center'>My Appointments</h1>
      <AppointmentList appointments={appointments} onCancel={handleCancel} /> {/* Pass onCancel function */}
    </div>
  );
};

export default AppointmentsPage;
