// src/components/AppointmentList.js
import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentList = ({ appointments, onCancel }) => {
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
            <button
              className='bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 ml-4'
              onClick={() => onCancel(appointment.id)} // Call onCancel function with the appointment ID
            >
              Cancel
            </button>
          </div>
        ))
      ) : (
        <p>No appointments booked yet.</p>
      )}
    </div>
  );
};

export default AppointmentList;
