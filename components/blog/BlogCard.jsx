// components/BlogCard.js
"use client"
import cab from "@/public/images/blog/second.png";
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from 'react';

const BlogCard = ({id,title,introduction}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blog/${id}`);
  };
  return (
    <div  className="border-2 rounded-xl overflow-hidden shadow-lg h-[25rem]  w-80 mx-4 my-6">
    <Image onClick={handleClick} src={cab}  className="w-full h-56 object-cover onClick={handleClick} " alt='' />
      <div className="p-4 flex flex-col gap-2 justify-between">
        <p onClick={handleClick}  className="text-black text-xl hover:text-[#003C82] cursor-pointer  font-bold mb-2">{title}</p>
        <p className="text-black text-sm truncate">{introduction}</p>
      </div>
    </div>
  );
};

export default BlogCard;
