"use client";
import React, { useState } from "react";
import Image from "next/image";
import CardComponent from "./_components/cardComponent";
import Profile from "@/app/assets/profile.jpg";
import Protrate1 from "@/app/assets/protrate1.png";
import Protrate2 from "@/app/assets/protrate2.png";

import CardIconComponent from "./_components/cardIconComponent";
import { cardIcon, cardItems, cardLang, contextIcons } from "./data";
import CardList from "./_components/CardList";

export default function Index(): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (id === "home") {
      // เลื่อนหน้าไปที่บนสุด
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // เลื่อนไปที่ ID ที่ระบุ
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: id === "skill" ? "start" : "center", // "start" สำหรับ Skill, "center" สำหรับส่วนอื่น
        });
      }
    }
    setIsSidebarOpen(false); // ปิด Sidebar หลังการคลิก
  };

  return (
    <div className="flex flex-col w-full font-Antonio ">
      {/* Navbar */}
      {!isSidebarOpen && ( // ซ่อน Navbar เมื่อ Sidebar เปิด
        <div className="flex flex-row justify-between items-center fixed top-0 w-full h-[8vh] bg-white text-black z-50 shadow-md font-Antonio px-4 text-[2vh]">
          <div className="flex items-center">PORTFOLIO</div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md bg-gray-200"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <div className="space-y-1">
              <div className="w-6 h-[2px] bg-black"></div>
              <div className="w-6 h-[2px] bg-black"></div>
              <div className="w-6 h-[2px] bg-black"></div>
            </div>
          </button>

          {/* Full Navbar for Desktop */}
          <div className="hidden lg:flex space-x-[1vw]">
            <button
              onClick={() => scrollToSection("home")}
              className="px-4 py-2 rounded hover:bg-primary"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("aboutMe")}
              className="px-4 py-2 rounded hover:bg-primary"
            >
              About me
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="px-4 py-2 rounded hover:bg-primary"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="px-4 py-2 rounded hover:bg-primary"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("skill")}
              className="px-4 py-2 rounded hover:bg-primary"
            >
              Skill
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 rounded hover:bg-primary"
            >
              Contact
            </button>
          </div>
        </div>
      )}

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 "
          onClick={() => setIsSidebarOpen(false)}
        >
          <div
            className="fixed top-0 left-0 w-[75vw] h-full bg-white shadow-lg p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-lg font-bold"
              onClick={() => setIsSidebarOpen(false)}
            >
              ✕
            </button>
            <div className="flex flex-col space-y-4 mt-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-black px-4 py-2 rounded hover:bg-primary"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("aboutMe")}
                className="text-black px-4 py-2 rounded hover:bg-primary"
              >
                About me
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-black px-4 py-2 rounded hover:bg-primary"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-black px-4 py-2 rounded hover:bg-primary"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("skill")}
                className="text-black px-4 py-2 rounded hover:bg-primary"
              >
                Skill
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-black px-4 py-2 rounded hover:bg-primary"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div id="home" className="w-full lg:mt-[8vh] mt-[8vh] overflow-y-auto">
        {/* Profile */}
        <div className="flex lg:flex-row flex-col justify-center items-center w-full h-[92vh]">
          <div className="text-center lg:text-left flex flex-col items-end">
            <div className="text-[4vh] lg:text-[3vh] xl:text-[5vh]">
              PAVANANON PHANICH
            </div>
            <div>Live in Songkhla</div>
          </div>

          <Image
            src={Profile}
            alt="Profile Image"
            className="bg-cover rounded-full xl:w-[30vw] xl:h-[30vw] lg:w-[45vw] lg:h-[45vw] md:w-[45vw] md:h-[45vw] w-[30vh] h-[30vh] lg:mx-[1vh]"
          />

          <div className="text-center lg:text-left text-[4vh] lg:text-[3vh] xl:text-[5vh] ">
            <div>Artificial Intelligence</div>
            <div>& Computer Vision</div>
          </div>
        </div>

        {/* About Me */}
        <div id="aboutMe" className="flex flex-col justify-center items-center">
          <div className="text-[4vh]">About me ?</div>
          <div className="grid xl:grid-cols-3 grid-cols-1 gap-4 p-4  justify-center items-center">
            <div className="flex bg-primary rounded-xl col-span-2 h-auto xl:h-[40vh] order-last xl:order-first p-8 xl:p-14 text-wrap justify-center items-center text-white shadow-lg">
              <span className="text-start text-base md:text-lg lg:text-2xl leading-relaxed tracking-wide max-w-3xl">
                Hello, I<p>&aposm</p>{" "}
                <span className="font-semibold">Pavananon Phanich</span>,
                studying <br className="hidden md:inline" />
                <br className="hidden md:inline" />
                <span className="font-semibold">
                  Artificial Intelligence Engineering
                </span>
                . I have
                <span className="font-semibold">
                  {" "}
                  3 years of coding experience
                </span>
                , primarily <br className="hidden md:inline" />
                using <span className="font-semibold">Python</span> for my
                studies and work in AI and Image Processing.{" "}
                <br className="hidden md:inline" />I also work with{" "}
                <span className="font-semibold">TypeScript and JavaScript</span>{" "}
                for website development, <br className="hidden md:inline" />
                as my projects involve{" "}
                <span className="font-semibold">
                  React, React Native, and Next.js
                </span>
                , <br className="hidden md:inline" />
                which I use extensively. I am deeply passionate about IT and
                eager to learn. <br className="hidden md:inline" />
                This drives my decision to seek internships in{" "}
                <span className="font-semibold">
                  challenging environments
                </span>{" "}
                <br className="hidden md:inline" />
                where I can enhance my professional skills and grow.
              </span>
            </div>

            <div className="bg-secondary col-span-1">
              <Image
                src={Protrate1}
                alt="Protrate Image"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Education */}
        <div
          id="education"
          className="flex flex-col justify-center items-center"
        >
          <div className="text-[4vh]">Education ?</div>
          <div className="grid xl:grid-cols-3 grid-cols-1 gap-4 p-4 justify-center items-center">
            <div className="bg-secondary col-span-1">
              <Image
                src={Protrate2}
                alt="Protrate Image"
                className="object-cover"
              />
            </div>
            <div className="flex bg-primary rounded-xl col-span-2 h-auto xl:h-[25vh] order-first xl:order-last p-10 xl:p-16 text-wrap justify-center items-center text-white shadow-lg">
              <span className="text-start text-lg md:text-xl lg:text-3xl leading-loose tracking-wide max-w-3xl">
                Prince of Songkla University [ 2022 - 2024 ] <br />
                Bachelor of Engineering Program in Artificial Intelligence
                Engineering
              </span>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div
          id="experience"
          className="flex flex-col justify-center items-center"
        >
          <div className="text-[4vh]">Experience</div>
          <div className="flex lg:flex-col flex-row justify-center items-center">
            <CardComponent items={cardItems} />
          </div>
        </div>

        {/* Skill */}
        <div
          id="skill"
          className="flex flex-col justify-center items-center space-y-[3vh] lg:text-[4vh] text-[2vh]"
        >
          <div className="text-[4vh]">Skill</div>
          <div className="lg:text-[4vh] text-[2vh]">Programming Language</div>
          <CardIconComponent items={cardLang} />
          <div className="lg:text-[4vh] text-[2vh]">
            Machine Learning / Computer Vision
          </div>
          <CardIconComponent items={cardIcon} />
        </div>

        {/* Contact */}
        <div id="contact" className="flex flex-col justify-center items-center">
          <div className="text-[4vh]">Contact</div>
          <CardList items={contextIcons} />
        </div>
      </div>
    </div>
  );
}
