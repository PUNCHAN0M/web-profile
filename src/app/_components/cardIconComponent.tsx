"use client";
import React from "react";

interface CardIconProps {
  title: string;
  image: string;
}

interface CardIconComponentProps {
  items: CardIconProps[];
}

const CardIconComponent: React.FC<CardIconComponentProps> = ({ items }) => {
  return (
    <div className=" flex flex-wrap justify-center gap-2 p-0">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex flex-col justify-center items-center 2xl:w-[15vw] 2xl:h-[20vw] w-[20vw] h-[25vw] p-4"
        >
          <img
            className="border-4 border-gray-200 rounded-full mb-2 object-cover 2xl:w-[10vw] 2xl:h-[10vw] w-[15vw] h-[15vw]"
            alt={item.title}
            src={item.image}
          />
          <div className="text-center xl:text-[3vh] md:text-[2vh] text-[10px] font-semibold">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default CardIconComponent;
