"use client";
import Image from "next/image";
import React from "react";

interface cardIconProps {
  title: string;
  image: string;
}

interface cardIconComponentProps {
  items: cardIconProps[];
}

const cardIconComponent: React.FC<cardIconComponentProps> = ({ items }) => {
  return (
    <div className="bg-red-300 flex justify-center overflow-x-scroll" >
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-secondary text-black rounded-xl flex flex-col space-y-[5%] items-center"
          style={{backgroundColor:"",margin:5,width:"400px",height:"600px"}}
        >
          <img
            className="mx-[3%] border-black border-[10px] rounded-full m-[10%] "
            alt={""}
            src={item.image}            
          />
          <div className="bg-red-600 mx-[3%] ">
            <div className="">{item.title}asdasd</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default cardIconComponent;
