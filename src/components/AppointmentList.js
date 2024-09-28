// src/components/AppointmentList.js
import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentList = ({ appointments }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6'>
      {appointments.length > 0 ? (
        appointments.map((appointment, index) => (
          <div key={index} className='mb-4 p-4 border rounded flex items-center'>
            <img src={appointment.propertyImage} alt="Property" className='w-16 h-16 rounded mr-4' />
            <div className='flex-1'>
              <p><strong>Property:</strong> {appointment.propertyName}</p>
              <p><strong>Location:</strong> {appointment.propertyLocation}</p>
              <p><strong>Agent:</strong> {appointment.agentName} ({appointment.agentPhone})</p>
              <p><strong>Date:</strong> {appointment.date}</p>
              <p><strong>Time:</strong> {appointment.time}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No appointments booked yet.</p>
      )}
    </div>
  );
};

export default AppointmentList;
    