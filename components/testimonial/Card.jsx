// Card.jsx
import React from 'react';
import Image from 'next/image';

function Card({ name, review, avatar }) {
  return (
    <div className="max-w-xs mx-auto w-full lg:max-w-none lg:w-80 lg:h-80 rounded-2xl flex flex-col gap-8 border-2 border-[#003C82] p-4">
      <div className="bg-[#ECF5FF] rounded-lg text-sm font-normal leading-normal p-4">
        <p className="text-gray-800">{review}</p>
      </div>
      <div className="flex justify-center">
        <Image src={avatar} alt={`Avatar of ${name}`} width={80} height={80} className="rounded-full" />
      </div>
    </div>
  );
}

export default Card;
