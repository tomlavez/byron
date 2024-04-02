"use client";

import { useState } from "react";

export interface Slide {
  src: string;
  alt: string;
}

export function Carousel({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState<number>(0);

  let previusSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  let nextSlide = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <>
      <div
        id="home"
        className="flex items-center justify-center bg-cinza relative"
      >
        <div className=" relative flex items-center justify-center overflow-hidden max-w-7xl ">
          <div
            className={`flex transition ease-out duration-500`}
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {slides.map((s) => {
              return <img className="" src={s.src} alt={s.alt} key={s.alt} />;
            })}
          </div>
          <div className="absolute items-center flex justify-between   w-full  text-black">
            <svg
              onClick={previusSlide}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20 md:w-28 md:h-28 text-vermelho cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>

            <svg
              onClick={nextSlide}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20 md:w-28 md:h-28 text-vermelho cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-vermelho to-transparent  opacity-20 pointer-events-none flex items-center justify-center"></div>

        <div className="absolute inset-0pointer-events-none flex items-center justify-center">
          <h1 className="text-2xl md:text-6xl font-rollingstone text-bege ">
            Barba Rolling
          </h1>
        </div>
      </div>
    </>
  );
}
