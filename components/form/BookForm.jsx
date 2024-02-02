"use client"
// components/BookForm.js
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const BookForm = ({ setShowOrderForm }) => {
  const [details, setDetails] = useState({
    name : '', email: '', phoneNumber: '', pickupLocation: '', destinationLocation: '', 
    passengerCount: '', selectedDate: '', selectedTime: ''
  })

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle form submission logic here
    
    if (!Object.values(details).every(Boolean)) {
      alert("Please fill in all the fields.");
      return;
    }
  
    emailjs
    .sendForm("service_57or3ml", "template_d1scq1f", formRef.current, "UO4Ts9Kc6kOynEHjw"
      )
      .then(
          (result) => {
              console.log(result.text);
              formRef.current.reset();
              alert("Form submitted succefully");
              setDetails({
                name : '', email: '', phoneNumber: '', pickupLocation: '', destinationLocation: '', 
                passengerCount: '', selectedDate: '', selectedTime: ''
              })
            },
            (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id='BookForm' className='flex h-[auto]  pb-16   pt-20 md:pt-16 xl:pt-24 2xl:pt-24  flex-col items-center gap-2 justify-center '>
     
    <div className=" p-4 min-w-[300px]  max-w-[800px]  flex justify-center  sm:flex-col   bg-[#ECF5FF]  rounded-md">
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className=" mb-4">
          <label htmlFor="name" className="block text-black font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            className="w-full p-2 border-2 rounded-md  outline-none  border-black "
            name='name'
            value={details.name}
            onChange={(e) => setDetails((prev)=>( {...prev, name: e.target.value}))}
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
              className="w-full p-2 border-2 rounded-md  outline-none  border-black "
              name='phoneNumber'
            value={details.phoneNumber}
            onChange={(e) => setDetails((prev)=>( {...prev, phoneNumber: e.target.value}))}
              required
            />
          </div>

          <div className=" mb-4 w-full">
            <label htmlFor="destinationLocation" className="block text-black font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border-2 rounded-md  outline-none  border-black "
              name='email'
            value={details.email}
            onChange={(e) => setDetails((prev)=>( {...prev, email: e.target.value}))}
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
              className="w-full p-2 border-2 rounded-md  outline-none  border-black "
              name='pickupLocation'
            value={details.pickupLocation}
            onChange={(e) => setDetails((prev)=>( {...prev, pickupLocation: e.target.value}))}
              required
            />
          </div>

          <div className=" mb-4 w-full">
            <label htmlFor="destinationLocation" className="block text-black font-bold mb-2">
              Destination Location
            </label>
            <input
              type="text"
              className="w-full p-2 border-2 rounded-md  outline-none  border-black "
              name='destinationLocation'
            value={details.destinationLocation}
            onChange={(e) => setDetails((prev)=>( {...prev, destinationLocation: e.target.value}))}
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
              className="w-full p-2 border-2 rounded-md  outline-none  border-black "
              name='passengerCount'
            value={details.passengerCount}
            onChange={(e) => setDetails((prev)=>( {...prev, passengerCount: e.target.value}))}
              required
            />
          </div>

          <div className=" mb-0 md:mb-4 xl:mb-4 2xl:mb-4 flex justify-between flex-col w-full">
            <label htmlFor="selectedDate" className="block text-black  text-left font-bold mb-2">
              Date
            </label>
            <input
              type="date"
              className="w-full p-2 border-2 rounded-md  outline-none  border-black "
              name='selectedDate'
            value={details.selectedDate}
            onChange={(e) => setDetails((prev)=>( {...prev, selectedDate: e.target.value}))}
              required
            />
          </div>
          <div className=" mb-0 md:mb-4 xl:mb-4 2xl:mb-4 flex justify-between flex-col w-full">
            <label htmlFor="selectedDate" className="block text-black text-left  font-bold mb-2">
              Time
            </label>
            <input
              type="time"
              className="w-full p-2 border-2 rounded-md  outline-none  border-black "
              name='selectedTime'
            value={details.selectedTime}
            onChange={(e) => setDetails((prev)=>( {...prev, selectedTime: e.target.value}))}
              required
            />
          </div>
        </div>
      </form>
    </div>
        <div className='flex justify-center gap-4'>
          <button
            onClick={handleSubmit}
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
