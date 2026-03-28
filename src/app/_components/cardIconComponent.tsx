"use client";
import Image from "next/image";
import React from "react";

interface CardIconProps {
  title: string;
  image: string;
  description?: {
    th: string;
    en: string;
  };
}

interface CardIconComponentProps {
  items: CardIconProps[];
}

const CardIconComponent: React.FC<CardIconComponentProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 p-2 max-w-[1250px]">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-zinc-900/80 text-orange-100 rounded-2xl border border-orange-300/25 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_14px_34px_rgba(255,106,0,0.25)] transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center items-center 2xl:w-[15vw] 2xl:h-[20vw] w-[30vw] md:w-[20vw] h-[32vw] md:h-[25vw] p-4"
        >
          <Image
            className="border-4 border-orange-300/45 rounded-full mb-3 object-cover 2xl:w-[10vw] 2xl:h-[10vw] w-[18vw] md:w-[15vw] h-[18vw] md:h-[15vw]"
            alt={item.title}
            src={item.image}
              width={200}
              height={200}
          />
          <div className="text-center xl:text-[3vh] md:text-[2vh] text-[10px] font-semibold tracking-wide">{item.title}</div>
          {item.description ? (
            <div className="mt-2 text-center space-y-1">
              <p className="text-[9px] md:text-[11px] text-orange-100/85 leading-relaxed">
                {item.description.en}
              </p>
              <p className="text-[9px] md:text-[11px] text-orange-200/80 leading-relaxed">
                {item.description.th}
              </p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default CardIconComponent;
