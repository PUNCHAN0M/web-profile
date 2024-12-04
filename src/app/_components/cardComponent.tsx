"use client";
import React from "react";

interface CardItemProps {
  image: string;
  title: string;
  description: string;
}

interface CardComponentProps {
  items: CardItemProps[];
}

const CardComponent: React.FC<CardComponentProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden flex flex-col sm:flex-row w-full sm:w-[90%] lg:w-[45%] 2xl:w-[40%] transition-transform transform hover:scale-105"
        >
          {/* Image Section */}
          <div className="relative w-full sm:w-1/3">
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full aspect-[16/9]"
            />
          </div>

          {/* Content Section */}
          <div className="p-4 flex flex-col justify-center">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
