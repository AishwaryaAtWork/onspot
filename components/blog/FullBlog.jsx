import Image from 'next/image';
import React from 'react';
import cab from "@/public/images/blog/second.png";

function FullBlog({post}) {
    const { title,heading1,heading2,heading3,heading4,heading5,detail1,detail2,detail3,detail4,detail5,conclusionPara,conclusionTitle,introduction} = post;
  return (
    <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        <Image src={cab} alt='' className="rounded-lg" />
      </div>
      <div className="text-black p-4">
        <p className="text-3xl font-bold mb-4">{title}</p>
        <p className="mb-4">{introduction}</p>
        <p className="mb-4 text-xl text-black font-medium ">{heading1}</p>
        <p className="mb-4">{detail1}</p>
        <p className="mb-4 text-xl text-black font-medium">{heading2}</p>
        <p className="mb-4">{detail2}</p>
        <p className="mb-4 text-xl text-black font-medium">{heading3}</p>
        <p className="mb-4">{detail3}</p>
        <p className="mb-4 text-xl text-black font-medium">{heading4}</p>
        <p className="mb-4">{detail4}</p>
        <p className="mb-4 text-xl text-black font-medium">{heading5}</p>
        <p className="mb-4">{detail5}</p>
        <p className="text-2xl font-bold mb-4">{conclusionTitle}</p>
        <p className="mb-4">{conclusionPara}</p>
      </div>
    </div>
  );
}

export default FullBlog;
