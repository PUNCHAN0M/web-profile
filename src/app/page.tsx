import React from 'react';
import Image from 'next/image';
import Carousel from './_components/cardComponent';
import Profile from '@/app/assets/profile.png'
import Protrate from '@/app/assets/protrate.jpg'
import CardIconComponent from './_components/cardIconComponent';
type Props = {};

export default function Index(): Props {

  
  const cardItems = [
    {
      title: "Card 1",
      image: "https://via.placeholder.com/300",
      description: "This is the description for Card 1.",
    },
    {
      title: "Card 2",
      image: "https://via.placeholder.com/300",
      description: "This is the description for Card 2.",
    },
    {
      title: "Card 3",
      image: "https://via.placeholder.com/300",
      description: "This is the description for Card 3.",
    },
  ];

  const cardIcon = [
    {
      title: "Card 1",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Card 2",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Card 3",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className='flex w-screen'>
      {/* Navbar */}
      <nav className="flex flex-row justify-between fixed top-0 w-screen h-[8vh] bg-white text-black z-50 shadow-md">
        <div className="flex mx-[2vw] my-[2vh]">LOGO</div>
        <div className="flex space-x-[3vw] mx-[4vw] my-[2vh]">
          <button className="bg-primary px-4 py-2 rounded">Home</button>
          <button className="px-4 py-2 rounded">Work</button>
          <button className="px-4 py-2 rounded">Content</button>
        </div>
      </nav>

      <div className='w-screen h-screen lg:mt-[8vh] mt-[16vh] '>
        {/* Profile */}
        <div className='flex lg:flex-row flex-col  justify-center items-center w-screen h-[92vh] m-0 p-0'>
          {/* Name */}
          <div className=''>
            <div>PAVANANON PHANICH</div>
            <div>Live in Songkhla</div>
          </div>

          {/* Picture */}
            <Image
              src={Profile}
              alt="Alternative Text"
              className='bg-cover rounded-full xl:w-[30vw] xl:h-[30vw] lg:w-[50vw] lg:h-[50vw] md:w-[50vw] md:h-[50vw] w-[30vh] h-[30vh] lg:mx-[1vh]'
              fill={false}             
            />

          {/* Department */}
          <div>
            <div>Artificial Intelligence</div>
            <div>& Computer Vision</div>
          </div>
        </div>

        {/* About me? */}
        <div className='flex flex-col justify-center items-center bg-blue-200'>
          <div className=''>About me ?</div>
          {/* Content */}
          <div className='grid xl:grid-cols-3 grid-cols-1'>
            {/* Bio */}
            <div className='bg-primary rounded-xl col-span-2 h-[40vh] m-[5vw] max-xl:order-last'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            
            {/* Picture */}
            <div className='bg-secondary col-span-1 lg:row-span-2 m-[5vw]' >
              <Image
                src={Protrate}
                alt="Alternative Text"
                className='object-cover'
                fill={false}            
              />
            </div>
          </div>
        </div>

        {/* Education? */}
        <div className='flex flex-col justify-center items-center bg-blue-200'>
          <div className=''>Education ?</div>
          {/* Content */}
          <div className='grid xl:grid-cols-3 grid-cols-1'>
            {/* Picture */}
            <div className='bg-secondary col-span-1 m-[5vw]' >
              <Image
                src={Protrate}
                alt="Alternative Text"
                className='object-cover'
                fill={false}            
              />
            </div>
            {/* Bio */}
            <div className='bg-primary rounded-xl col-span-2 h-[40vh] m-[5vw]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            
            
          </div>
        </div>

        {/* Experience */}
        <div className='m-0 p-0'>
          {/* CARD */}
          <Carousel items={cardItems} />
        </div>

        {/* Skill */}
        <div>
          {/* Programming Language */}
          {/* CARD */}
          <CardIconComponent items={cardIcon} />

          {/* Machine Learning / Computer Vision */}
          {/* CARD */}
        </div>

        {/* Contact */}
        <div></div>
      </div>
    </div>
  );
}
