"use client";
import Image from "next/image";
import React from "react";

interface CardItemProps {
  image: string;
  title: string;
  description: string | { en: string; th: string };
}

interface CardComponentProps {
  items: CardItemProps[];
}

const FALLBACK_IMAGE = "/next.svg";

const getSafeImageSrc = (src: string): string => {
  const trimmed = src.trim();

  if (trimmed.startsWith("data:image/")) {
    return trimmed;
  }

  if (trimmed.startsWith("/")) {
    return trimmed;
  }

  try {
    const parsedUrl = new URL(trimmed);
    if (parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:") {
      return trimmed;
    }
  } catch {
    return FALLBACK_IMAGE;
  }

  return FALLBACK_IMAGE;
};

const CardComponent: React.FC<CardComponentProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-6 max-w-[1200px]">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-zinc-900/80 border border-orange-300/25 shadow-[0_12px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_38px_rgba(255,106,0,0.25)] rounded-2xl overflow-hidden flex flex-col sm:flex-row w-full sm:w-[90%] lg:w-[45%] 2xl:w-[40%] transition-transform transform hover:-translate-y-1"
        >
          {/* Image Section */}
          <div className="relative w-full sm:w-1/3">
            <Image
              src={getSafeImageSrc(item.image)}
              alt={item.title}
              width={300}
              height={200}
              className="object-cover w-full h-full aspect-[16/9]"
            />
          </div>

          {/* Content Section */}
          <div className="p-4 flex flex-col justify-center">
            <h3 className="font-semibold text-lg text-orange-300 mb-2 tracking-wide">{item.title}</h3>
            <p className="text-sm text-zinc-200/90 leading-relaxed">
              {typeof item.description === "string" ? item.description : (
                <>
                  <span className="block mb-2">{item.description.th}</span>
                  <span className="text-xs text-zinc-400/80">{item.description.en}</span>
                </>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
