"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CardComponent from "./_components/cardComponent";
import Profile from "@/app/assets/profile.jpg";
import Protrate1 from "@/app/assets/protrate1.png";
import Protrate2 from "@/app/assets/protrate2.png";

import CardIconComponent from "./_components/cardIconComponent";
import {
  aboutSections,
  contactItems,
  educationSections,
  experienceItems,
  skillGroups,
  workExperienceItems,
} from "./data";
import CardList from "./_components/CardList";

export default function Index(): React.JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sortedExperienceItems = [...experienceItems].sort((a, b) =>
    a.title.localeCompare(b.title, "en", { sensitivity: "base" })
  );
  const sortedSkillGroups = skillGroups.map((skillGroup) => ({
    ...skillGroup,
    items: [...skillGroup.items].sort((a, b) =>
      a.title.localeCompare(b.title, "en", { sensitivity: "base" })
    ),
  }));
  const sortedWorkExperienceItems = [...workExperienceItems].sort((a, b) =>
    a.organization.localeCompare(b.organization, "en", { sensitivity: "base" })
  );
  const sectionIds = [
    "home",
    "aboutMe",
    "education",
    "workExperience",
    "experience",
    "skill",
    "contact",
  ];

  const navButtonClass = (id: string): string => {
    const baseClass =
      "px-4 py-2 rounded-full border transition-all duration-300";

    if (activeSection === id) {
      return `${baseClass} border-orange-300 bg-orange-500 text-black shadow-[0_6px_16px_rgba(255,106,0,0.35)]`;
    }

    return `${baseClass} border-orange-300/20 text-orange-100 hover:bg-orange-500 hover:text-black hover:border-orange-300`;
  };

  const mobileNavButtonClass = (id: string): string => {
    const baseClass =
      "px-4 py-2 rounded-lg border transition-colors duration-300";

    if (activeSection === id) {
      return `${baseClass} border-orange-300 bg-orange-500 text-black`;
    }

    return `${baseClass} border-orange-300/30 text-orange-100 hover:bg-orange-500 hover:text-black`;
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const targetElement = document.getElementById(id);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsSidebarOpen(false); // ปิด Sidebar หลังการคลิก
  };

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col w-full font-Antonio text-zinc-100 tracking-wide">
      {/* Navbar */}
      {!isSidebarOpen && ( // ซ่อน Navbar เมื่อ Sidebar เปิด
        <div className="flex flex-row justify-between items-center fixed top-0 w-full h-[8vh] bg-black/70 text-orange-50 z-50 shadow-[0_6px_30px_rgba(0,0,0,0.45)] border-b border-orange-400/30 backdrop-blur-md font-Antonio px-4 text-[2vh]">
          <div className="flex items-center text-orange-300 font-semibold tracking-[0.22em]">
            PORTFOLIO
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md bg-zinc-900 border border-orange-400/40"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <div className="space-y-1">
              <div className="w-6 h-[2px] bg-orange-300"></div>
              <div className="w-6 h-[2px] bg-orange-300"></div>
              <div className="w-6 h-[2px] bg-orange-300"></div>
            </div>
          </button>

          {/* Full Navbar for Desktop */}
          <div className="hidden lg:flex gap-3">
            <button
              onClick={() => scrollToSection("home")}
              className={navButtonClass("home")}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("aboutMe")}
              className={navButtonClass("aboutMe")}
            >
              About me
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className={navButtonClass("education")}
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("workExperience")}
              className={navButtonClass("workExperience")}
            >
              Work Experience
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={navButtonClass("experience")}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("skill")}
              className={navButtonClass("skill")}
            >
              Skill
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={navButtonClass("contact")}
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
            className="fixed top-0 left-0 w-[75vw] h-full bg-zinc-950 text-orange-100 shadow-lg p-4 border-r border-orange-400/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-lg font-bold text-orange-300"
              onClick={() => setIsSidebarOpen(false)}
            >
              ✕
            </button>
            <div className="flex flex-col space-y-4 mt-8">
              <button
                onClick={() => scrollToSection("home")}
                className={mobileNavButtonClass("home")}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("aboutMe")}
                className={mobileNavButtonClass("aboutMe")}
              >
                About me
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className={mobileNavButtonClass("education")}
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("workExperience")}
                className={mobileNavButtonClass("workExperience")}
              >
                Work Experience
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className={mobileNavButtonClass("experience")}
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("skill")}
                className={mobileNavButtonClass("skill")}
              >
                Skill
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={mobileNavButtonClass("contact")}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div
        id="home"
        className="w-full lg:mt-[8vh] mt-[8vh] overflow-y-auto scroll-mt-[10vh]"
      >
        {/* Profile */}
        <div className="flex lg:flex-row flex-col justify-center items-center w-full min-h-[92vh] px-5 lg:px-10 gap-6">
          <div className="text-center lg:text-left flex flex-col items-end">
            <div className="text-[4vh] lg:text-[3vh] xl:text-[5vh]">
              PAVANANON PHANICH
            </div>
            <div className="text-orange-200/80">Live in Songkhla</div>
          </div>

          <Image
            src={Profile}
            alt="Profile Image"
            className="bg-cover rounded-full xl:w-[30vw] xl:h-[30vw] lg:w-[45vw] lg:h-[45vw] md:w-[45vw] md:h-[45vw] w-[30vh] h-[30vh] lg:mx-[1vh]"
          />

          <div className="text-center lg:text-left text-[4vh] lg:text-[3vh] xl:text-[5vh]">
            <div>Artificial Intelligence</div>
            <div className="text-orange-300">& Computer Vision</div>
          </div>
        </div>

        {/* About Me */}
        <div
          id="aboutMe"
          className="flex flex-col justify-center items-center scroll-mt-[10vh] py-10"
        >
          <div className="text-[4vh] text-orange-300 uppercase tracking-[0.14em] mb-2">About me</div>
          <div className="grid xl:grid-cols-3 grid-cols-1 gap-4 p-4  justify-center items-center">
            <div className="flex flex-col gap-4 col-span-2 order-last xl:order-first">
              {aboutSections.map((aboutItem, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl border border-orange-300/40 p-8 xl:p-10 text-white shadow-[0_16px_40px_rgba(255,106,0,0.28)]"
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 tracking-wide">
                    {aboutItem.title}
                  </h3>
                  <p className="text-start text-base md:text-lg leading-relaxed tracking-wide max-w-3xl">
                    {aboutItem.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-black/45 border border-orange-300/20 rounded-2xl overflow-hidden col-span-1">
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
          className="flex flex-col justify-center items-center scroll-mt-[10vh] py-10"
        >
          <div className="text-[4vh] text-orange-300 uppercase tracking-[0.14em] mb-2">Education</div>
          <div className="grid xl:grid-cols-3 grid-cols-1 gap-4 p-4 justify-center items-center">
            <div className="bg-black/45 border border-orange-300/20 rounded-2xl overflow-hidden col-span-1">
              <Image
                src={Protrate2}
                alt="Protrate Image"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 col-span-2 order-first xl:order-last">
              {educationSections.map((educationItem, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/80 border border-orange-400/35 rounded-2xl p-10 xl:p-12 text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
                >
                  <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold leading-snug tracking-wide">
                    {educationItem.school} [{educationItem.period}]
                  </h3>
                  <p className="text-base md:text-lg lg:text-2xl text-orange-100/90 mt-3 leading-relaxed">
                    {educationItem.program}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div
          id="workExperience"
          className="flex flex-col justify-center items-center scroll-mt-[10vh] py-10"
        >
          <div className="text-[4vh] text-orange-300 uppercase tracking-[0.14em] mb-2">Work Experience</div>
          <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
            {sortedWorkExperienceItems.map((workItem, index) => (
              <div
                key={index}
                className="bg-zinc-900/80 border border-orange-300/25 rounded-2xl p-6 shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
              >
                <a href={workItem.href} target="_blank" rel="noreferrer" className="block mb-4">
                  <Image
                    src={workItem.image}
                    alt={workItem.organization}
                    width={520}
                    height={260}
                    className="w-full aspect-square object-cover rounded-xl border border-orange-300/25"
                  />
                </a>
                <a
                  href={workItem.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange-300 text-xl md:text-2xl font-semibold tracking-wide hover:text-orange-200 transition-colors"
                >
                  {workItem.organization}
                </a>
                <p className="mt-3 text-sm md:text-base text-zinc-200/90 leading-relaxed">
                  {workItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div
          id="experience"
          className="flex flex-col justify-center items-center scroll-mt-[10vh] py-10"
        >
          <div className="text-[4vh] text-orange-300 uppercase tracking-[0.14em] mb-2">Experience</div>
          <div className="flex lg:flex-col flex-row justify-center items-center">
            <CardComponent items={sortedExperienceItems} />
          </div>
        </div>

        {/* Skill */}
        <div
          id="skill"
          className="flex flex-col justify-center items-center space-y-[3vh] lg:text-[4vh] text-[2vh] scroll-mt-[10vh] py-10"
        >
          <div className="text-[4vh] text-orange-300 uppercase tracking-[0.14em]">Skill</div>
          {sortedSkillGroups.map((skillGroup, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center gap-1 px-4 text-center">
                <div className="lg:text-[4vh] text-[2vh] text-orange-200">
                  {skillGroup.title}
                </div>
                {skillGroup.description ? (
                  <p className="text-sm md:text-base text-orange-100/75 max-w-3xl leading-relaxed">
                    {skillGroup.description}
                  </p>
                ) : null}
              </div>
              <CardIconComponent items={skillGroup.items} />
            </React.Fragment>
          ))}
        </div>

        {/* Contact */}
        <div
          id="contact"
          className="flex flex-col justify-center items-center scroll-mt-[10vh] py-10"
        >
          <div className="text-[4vh] text-orange-300 uppercase tracking-[0.14em] mb-2">Contact</div>
          <CardList items={contactItems} />
        </div>
      </div>
    </div>
  );
}
