"use client"
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { data } from './data';
import TourCard from './TourCard';

function Tour() {
  const [currentSlide, setCurrentSlide] = useState(0);
  

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
     
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  

  return (
    <div className='flex flex-col p-3  justify-center items-center gap-9 mb-16  '>
      
      <div className='w-[96vw]  px-10 flex flex-col  '>
        <Slider {...sliderSettings} className=' flex justify-center items-center    '>
            <p className='text-[2rem] font-bold'>
            Journey through On Spot Cab Services: A Visual Tour
            </p>
          {data.map(({ id, location, detail, to, from }, index) => (
            
            <TourCard
              key={id}
              location={location}
              detail={detail}
              to={to}
              from={from}
              isActive={index === currentSlide}
            />
          ))}
        </Slider>
        
      </div>
    </div>
  );
}

export default Tour;
