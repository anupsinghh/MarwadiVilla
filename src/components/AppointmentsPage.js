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

  return (
    <div className='max-w-7xl mx-auto p-5'>
      <Link to="/" className='text-violet-600 hover:underline mb-4 inline-block'>
        &larr; Back to Home
      </Link>
      <h1 className='text-3xl font-bold mb-8 text-center'>My Appointments</h1>
      <AppointmentList appointments={appointments} /> {/* Use the AppointmentList component */}
    </div>
  );
};

export default AppointmentsPage;
