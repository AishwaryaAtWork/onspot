"use client"
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { data } from './data';
import Card from './Card';

function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentClient, setCurrentClient] = useState(data[0]); 

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
      setCurrentClient(data[(next + 1) % data.length]);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1 ) % data.length);
      setCurrentClient(data[currentSlide]);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentSlide]);
  return (
    <div className=' flex flex-col gap-9 mb-16 '>
    <p className='text-center text-[3rem] font-semibold leading-normal'>Our Happy Clients</p>
    <div className='w-[96vw]  px-7 flex flex-col  '>
      <Slider {...sliderSettings} className=' border-3 flex justify-center items-center border-[black]   '>
        {data.map(({ id, name, review, avtar }, index) => (
          <Card
            key={id}
            name={name}
            review={review}
            avatar={avtar}
            isActive={index === currentSlide}
          />
        ))}
      </Slider>
      {/* <div className='text-center mt-4'>
        <p className='text-xl font-semibold text-gray-800'>
        {`${currentClient.name}`}
        </p>
      </div> */}
    </div>
    </div>
  );
}

export default Testimonial;
