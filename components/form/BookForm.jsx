"use client"
// components/BookForm.js
import React, { useState } from 'react';

const BookForm = ({ setShowOrderForm }) => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');
  const [name, setName] = useState('');
  const [passengerCount, setPassengerCount] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [PhoneNumber, SetPhoneNumber] = useState('');
  const [email,SetEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', {
      pickupLocation,
      destinationLocation,
      PhoneNumber,
      email,
      name,
      passengerCount,
      selectedDate,
    });
  };

  return (
    <div id='BookForm' className='flex h-[auto]  pb-16   pt-20 md:pt-16 xl:pt-24 2xl:pt-24  flex-col items-center gap-2 justify-center '>
     
    <div className=" p-4 min-w-[300px]  max-w-[800px]  flex justify-center  sm:flex-col   bg-[#ECF5FF]  rounded-md">
      <form onSubmit={handleSubmit}>
        <div className=" mb-4">
          <label htmlFor="name" className="block text-black font-bold mb-2">
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
            <label htmlFor="pickupLocation" className="block text-black font-bold mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="pickupLocation"
              className="w-full p-2 border-2 rounded-md  outline-none  border-black "
              value={PhoneNumber}
              onChange={(e) => SetPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className=" mb-4 w-full">
            <label htmlFor="destinationLocation" className="block text-black font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="destinationLocation"
              className="w-full p-2 border-2 rounded-md  outline-none  border-black "
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row xl:flex-row 2xl:flex-row gap-0  md:gap-4 xl:gap-4 2xl:gap-4 '>

          <div className=" mb-4 w-full">
            <label htmlFor="pickupLocation" className="block text-black font-bold mb-2">
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
            <label htmlFor="destinationLocation" className="block text-black font-bold mb-2">
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
        <div className='flex-col flex md:flex-row xl:flex-row 2xl:flex-row gap-4 '>
          <div className=" mb-0 md:mb-4 xl:mb-4 2xl:mb-4 w-full">
            <label htmlFor="passengerCount" className="block text-black font-bold mb-2">
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

          <div className=" mb-0 md:mb-4 xl:mb-4 2xl:mb-4 flex justify-between flex-col w-full">
            <label htmlFor="selectedDate" className="block text-black  text-left font-bold mb-2">
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
          <div className=" mb-0 md:mb-4 xl:mb-4 2xl:mb-4 flex justify-between flex-col w-full">
            <label htmlFor="selectedDate" className="block text-black text-left  font-bold mb-2">
              Time
            </label>
            <input
              type="time"
              id="selectedDate"
              className="w-full p-2 border-2 rounded-md  outline-none  border-black "
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </div>
        </div>
      </form>
    </div>
        <div className='flex justify-center gap-4'>
          <button
            type="submit"
            className=" hover:bg-[#ECF5FF] text-black px-4 py-2 rounded-md   outline-none "
          >
            Submit
          </button>
          <button
            onClick={() => { setShowOrderForm(false) }}
            type="submit"
            className="hover:bg-[#ECF5FF] text-black px-4 py-2 rounded-md   outline-none "
          >
            cancel
          </button>
        </div>
    </div>
  );
};

export default BookForm;
