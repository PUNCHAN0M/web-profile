// data.ts
export const cardIcon = [
    {
      title: "Scikit-learn",
      description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
      image: "data:image/png;base64,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",
    },
    {
      title: "YOLO",
      description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHFaVv7MM1MFJVF5yhhRjfx4tcACq7X6Kgtw&sVqzo9PF1uXp7v/vcn/7mtHFKd4qP43iFDFbCKmZeCsXtv2uckcsagbyB+2X5XzDYP0dO4df0fvn4uPwpH+z/j/4Hl8EQ8rJeurEAAAAASUVORK5CYII=",
    },
    {
      title: "SAM",
      description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
      image: "data:image/jpeg;base64,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",
    },
    {
      title: "Tesseract OCR",
      description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jbmTZ6lxc98B-DBWcyCC1qwOtAnAO1NfaQ&s",
    },
    {
      title: "Ollama",
      description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
      image: "data:image/png;base64,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",
    },
    {
      title: "OpenCV",
      description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
      image: "data:image/png;base64,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",
    },
    {
      title: "Pytorch",
      description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
      image: "/assets/pytorch.png",
    },
    {
      title: "FAISS",
      description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
      image: "/assets/faiss.png",
    },

  ];
  export const cardLang = [
    {
      title: "PYTHON",
      description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
      image: "data:image/png;base64,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",
    },
    {
      title: "TYPESCRIPT",
      description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
      image: "data:image/png;base64,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",
    },
    {
      title: "JAVASCRIPT",
      description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
      image: "data:image/png;base64,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",
    },
    {
      title: "C++",
      description: {
        en: "Basic",
        th: "มือใหม่",
      },
      image: "/assets/cpp.png",
    },
    {
      title: "C#",
      description: {
        en: "Basic",
        th: "มือใหม่",
      },
      image: "/assets/Csharp.png",
    },
  ];
  export const cardItems = [
  {
    title: "Autonomous Maze Navigator (RoboMaster)",
    description: {
      en: "Developed an autonomous navigation system for robots to navigate complex mazes and execute precise target acquisition.",
      th: "พัฒนาระบบควบคุมหุ่นยนต์เคลื่อนที่ผ่านเขาวงกตอัตโนมัติ พร้อมตรวจจับและเข้าหาวัตถุเป้าหมาย",
    },
    image: "https://gammaco.com/gammaco/assets/product/89DJI010.jpg",
  },
  {
    title: "Pharmacy Stock Mobile App",
    description: {
      en: "Developed a React Native mobile application for real-time hospital medication tracking and inventory management.",
      th: "พัฒนาแอปพลิเคชันจัดการคลังยาโรงพยาบาลด้วย React Native รองรับการตรวจสอบสต็อกแบบ Real-time",
    },
    image: "/assets/handheld.jpg",
  },
  {
    title: "Smart Thai ID OCR",
    description: {
      en: "Implemented an OCR-based system to automate data extraction from Thai National ID cards, streamlining the registration process.",
      th: "พัฒนาระบบดึงข้อมูลจากบัตรประชาชนอัตโนมัติด้วยเทคโนโลยี OCR เพื่อลดขั้นตอนการกรอกข้อมูล",
    },
    image: "/assets/thaiidocr.jpg",
  },
  {
    title: "Smart Shelf Inventory System",
    description: {
      en: "Designed an intelligent inventory management system for pharmaceutical cabinets to monitor medication movements and stock levels.",
      th: "ระบบบริหารจัดการทรัพยากรภายในตู้ยาอัจฉริยะ ตรวจสอบการเข้า-ออกของยา",
    },
    image: "/assets/shelf.png",
  },
  {
    title: "Facial Recognition Attendance System",
    description: {
      en: "Engineered a biometric facial recognition system for secure employee attendance tracking and system access control.",
      th: "ระบบยืนยันตัวตนด้วยใบหน้าเพื่อบันทึกเวลาเข้างานและควบคุมการเข้าถึงระบบ",
    },
    image: "/assets/facescaning.jpg",
  },
  {
    title: "Tablet Defect & Counting System",
    description: {
      en: "Deployed an AI-driven vision system to detect pill defects and automate counting for pharmaceutical quality control.",
      th: "ระบบ AI ตรวจสอบตำหนิของเม็ดยาและนับจำนวนอัตโนมัติเพื่อควบคุมคุณภาพการจ่ายยา",
    },
    image: "/assets/pill.png",
  },
  {
    title: "Retail Customer Analytics",
    description: {
      en: "Built a computer vision system to monitor customer traffic and analyze purchasing behavior for retail optimization.",
      th: "ระบบตรวจนับจำนวนลูกค้าและวิเคราะห์พฤติกรรมการเลือกซื้อสินค้าในร้านสะดวกซื้อ",
    },
    image: "/assets/snackvision.png",
  },
  {
    title: "BIA Website Development (Project Manager)",
    description: {
      en: "Orchestrated the BIA website development by overseeing strategic planning, task delegation, and cross-functional coordination.",
      th: "จัดการโครงการพัฒนาเว็บไซต์ BIA โดยดูแลการวางแผนเชิงกลยุทธ์ การมอบหมายงาน และการประสานงานระหว่างฝ่าย",
    },
    image: "/assets/BIA.jpg",
  },
  {
    title: "Pronto: 3D Asset Health Monitor",
    description: {
      en: "Developed a 3D monitoring system to assess component status and predict Remaining Useful Life (RUL) for proactive maintenance.",
      th: "พัฒนาระบบตรวจสอบสถานะชิ้นส่วนผ่านโมเดล 3 มิติ เพื่อประเมินอายุการใช้งานและวางแผนซ่อมบำรุงล่วงหน้า",
    },
    image: "/assets/Pronto.png",
  },
];
  
  // data.tsx
  export const contextIcons = [
    {
      title: "Phone : ",
      link:"062-497-9905",
      image: "phone",
    },
    {
      title: "Github : ",
      link:"https://github.com/PUNCHAN0M",
      image: "github",
    },
    {
      title: " Email : ",
      link:"pavananonphanich@gmail.com",
      image: "email",
    },
    {
      title: "LinkedIn : ",
      link:"https://www.linkedin.com/in/pavananon-phanich-054320339/",
      image: "linkedin",
    },
    // Add more items as needed
  ];

export type AboutSection = {
  title: string;
  description: string;
};

export type EducationSection = {
  school: string;
  period: string;
  program: string;
};

export type SkillGroup = {
  title: string;
  description?: string;
  items: SkillItem[];
};

export type SkillDescription = {
  th: string;
  en: string;
};

export type SkillItem = {
  title: string;
  image: string;
  description?: SkillDescription;
};

export type WorkExperienceItem = {
  organization: string;
  href: string;
  description: string;
  image: string;
};

export type ContactItem = {
  title: string;
  image: "phone" | "email" | "github" | "linkedin" | "instagram" | "facebook";
  value: string;
  href?: string;
};

export const aboutSections: AboutSection[] = [
  {
    title: "About me",
    description:
      "Hello, I'm Pavananon Phanich, studying Artificial Intelligence Engineering. I have 4 years of coding experience, primarily using Python for AI and Image Processing. I also work with TypeScript and JavaScript for React, React Native, and Next.js projects.",
  },
  {
    title: "Career Goal",
    description:
      "I am deeply passionate about IT and eager to learn. I am looking for internship opportunities in challenging environments where I can improve my technical and professional skills.",
  },
];

export const educationSections: EducationSection[] = [
  {
    school: "Prince of Songkla University",
    period: "2022 - 2025",
    program: "Bachelor of Engineering Program in Artificial Intelligence Engineering",
  },
];

export const workExperienceItems: WorkExperienceItem[] = [
  {
    organization: "PUPA",
    href: "https://www.facebook.com/p/Pupa-PSU-Login-100063706101899/",
    description:
      "Worked as Web Developer, AI Developer, and Project Manager in a student club at PSU.",
    image: "/assets/pupa.png",
  },
  {
    organization: "A I SMART TECH COMPANY LIMITED",
    href: "https://www.linkedin.com/company/ai-smart-tech-company-limited/",
    description: "Worked as an AI Developer.",
    image: "/assets/aismarttech.png",
  },
];

export const experienceItems = cardItems;

export const webApplicationSkills: SkillItem[] = [
  {
    title: "React",
    description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
    image: "/assets/Reactjs.png",
  },
  {
    title: "Next.js",
    description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
    image: "/assets/Nextjs.png",
  },
  {
    title: "React Native",
    description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
    image: "/assets/reactnative.png",
  },
  {
    title: "Tailwind CSS",
    description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
    image: "/assets/tailwind.png",
  },
  {
    title: "PostgreSQL",
    description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
    image: "/assets/Postgresql.png",
  },
  {
    title: "Docker",
    description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
    image: "/assets/docker.png",
  },
  {
    title: "Postman",
    description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
    image: "/assets/postman.png",
  },
  {
    title: "Nestjs",
    description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
    image: "/assets/Nestjs.png",
  },
  {
    title: "Superbase",
    description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
    image: "/assets/Superbase.png",
  },
  {
    title: "Flask",
    description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
    image: "/assets/Flask.png",
  },
  {
    title: "FastAPI",
    description: {
        en: "Intermediate",
        th: "มีประสบการณ์ใช้งาน",
      },
    image: "/assets/fastapi.png",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Language",
    description:
      "Languages and web stack I use for software and product development.",
    items: cardLang,
  },
  {
    title: "Machine Learning / Computer Vision",
    description:
      "Core AI and CV tools I use for model training, inference, and image processing.",
    items: cardIcon,
  },
  {
    title: "Web Application Development",
    description:
      "Frameworks and tools I use to build modern web and cross-platform applications.",
    items: webApplicationSkills,
  },
];

export const contactItems: ContactItem[] = [
  {
    title: "Phone",
    image: "phone",
    value: "062-497-9905",
    href: "tel:0624979905",
  },
  {
    title: "Email",
    image: "email",
    value: "pavananonphanich@gmail.com",
    href: "mailto:pavananonphanich@gmail.com",
  },
  {
    title: "Github",
    image: "github",
    value: "PUNCHAN0M",
    href: "https://github.com/PUNCHAN0M",
  },
  {
    title: "LinkedIn",
    image: "linkedin",
    value: "pavananon-phanich-054320339",
    href: "https://www.linkedin.com/in/pavananon-phanich-054320339/",
  },
  {
    title: "Instagram",
    image: "instagram",
    value: "pvn.ig",
    href: "https://www.instagram.com/pvn.ig/",
  },
  {
    title: "Facebook",
    image: "facebook",
    value: "pavananon.phanich.3",
    href: "https://www.facebook.com/pavananon.phanich.3",
  },
];
  