"use client"
// components/BookForm.js
import React, { useState } from 'react';

const BookForm = ({ setShowOrderForm }) => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');
  const [name, setName] = useState('');
  const [passengerCount, setPassengerCount] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', {
      pickupLocation,
      destinationLocation,
      name,
      passengerCount,
      selectedDate,
    });
  };

  return (
    <div className="min-w-[300px] max-w-[800px]   fixed   top-[48%] md:top-[55%] xl:top-[58%] 2xl:top-[52%]  left-1/2 -translate-x-1/2 -translate-y-1/2  w-1/2 mx-auto   z-30  p-4  bg-[#003C82]  rounded-md">
      <form onSubmit={handleSubmit}>
        <div className=" mb-4">
          <label htmlFor="name" className="block text-white font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border-2 rounded-md  outline-none  border-black "
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col md:flex-row xl:flex-row 2xl:flex-row gap-0  md:gap-4 xl:gap-4 2xl:gap-4 '>

          <div className=" mb-4 w-full">
            <label htmlFor="pickupLocation" className="block text-white font-bold mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="pickupLocation"
              className="w-full p-2 border-2 rounded-md  outline-none  border-black "
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              required
            />
          </div>

          <div className=" mb-4 w-full">
            <label htmlFor="destinationLocation" className="block text-white font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="destinationLocation"
              className="w-full p-2 border-2 rounded-md  outline-none  border-black "
              value={destinationLocation}
              onChange={(e) => setDestinationLocation(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row xl:flex-row 2xl:flex-row gap-0  md:gap-4 xl:gap-4 2xl:gap-4 '>

          <div className=" mb-4 w-full">
            <label htmlFor="pickupLocation" className="block text-white font-bold mb-2">
              Pickup Location
            </label>
            <input
              type="text"
              id="pickupLocation"
              className="w-full p-2 border-2 rounded-md  outline-none  border-black "
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              required
            />
          </div>

          <div className=" mb-4 w-full">
            <label htmlFor="destinationLocation" className="block text-white font-bold mb-2">
              Destination Location
            </label>
            <input
              type="text"
              id="destinationLocation"
              className="w-full p-2 border-2 rounded-md  outline-none  border-black "
              value={destinationLocation}
              onChange={(e) => setDestinationLocation(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='flex gap-4 '>
          <div className=" mb-4 w-full">
            <label htmlFor="passengerCount" className="block text-white font-bold mb-2">
              Number of Passengers
            </label>
            <input
              type="text"
              id="passengerCount"
              className="w-full p-2 border-2 rounded-md  outline-none  border-black "
              value={passengerCount}
              onChange={(e) => setPassengerCount(e.target.value)}
              required
            />
          </div>

          <div className=" mb-4 flex justify-between flex-col w-full">
            <label htmlFor="selectedDate" className="block text-white sm:text-left    text-center font-bold mb-2">
              Date
            </label>
            <input
              type="date"
              id="selectedDate"
              className="w-full p-2 border-2 rounded-md  outline-none  border-black "
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='flex gap-4'>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600  outline-none "
          >
            Submit
          </button>
          <button
            onClick={() => { setShowOrderForm(false) }}
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600  outline-none "
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
