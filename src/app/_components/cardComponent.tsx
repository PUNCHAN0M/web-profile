"use client";
import React from "react";

interface cardComponent {
  title: string;
  image: string;
  description: string;
}

interface cardComponentProps {
  items: cardComponent[];
}

const cardComponent: React.FC<cardComponentProps> = ({ items }) => {
  return (
    <div className="bg-red-300 flex justify-center " >
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-secondary text-black rounded-xl flex flex-col space-y-[5%] p-[1%] "
          style={{backgroundColor:"",margin:5,width:"400px",height:"600px"}}
        >
          <div className="bg-red-600 mx-[3%] ">
            <div className="">{item.title}asdasd</div>
          </div>
          <img
            className="mx-[3%] border-primary border-[10px]"
            alt={""}
            src={item.image}            
          />
          <div className="mx-[3%] bg-red-500 overflow-hidden">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, eum molestiae. Quia laborum et quam maxime odit, soluta distinctio, similiquasxcdjkdhhhhhjkdasasjkdhasjkhasdjkhasjkhjkhasdLore Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cumque praesentium iure enim quas iusto porro similique nam voluptatum corporis ratione nostrum qui libero, quam, quod veritatis ducimus quae doloremque!e ipsam vel, eum esse facere. Vero dicta adipisci harum? Sunt.
          </div>
        </div>
      ))}
    </div>
  );
};

export default cardComponent;
