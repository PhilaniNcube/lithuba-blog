/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect } from 'react';
import styles from './Hero.module.css';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Hero() {
  const containerRef = useRef(null);
  const manImageRef = useRef(null);
  const womanImageRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const manImage = manImageRef.current;
    const womanImage = womanImageRef.current;
    const heading = headingRef.current;

    let tl = gsap.timeline({
      delay: 1,
      defaults: {
        ease: 'easeOut',
      },
    });

    tl.from(manImage, {
      duration: 0.6,
      autoAlpha: 0,
      y: '-100%',
    })
      .from(womanImage, { duration: 0.5, autoAlpha: 0, x: '150%' })
      .from(heading, { duration: 1, autoAlpha: 0, y: '100%' });
  }, []);

  return (
    <div ref={containerRef} className="container mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-wrap md:flex-row px-8 md:px-0">
        <div className="flex flex-col space-y-3 md:min-h-[80vh] mt-32 md:mt-4 justify-center md:max-w-1/2 ">
          <div className="overflow-hidden py-4">
            <h1
              ref={headingRef}
              className="text-gray-800 leading-3 font-extrabold text-2xl md:text-4xl lg:text6xl uppercase"
            >
              <span>Unlocking</span>{' '}
              <span className="text-purple-700">Greatness</span>
            </h1>
          </div>
          <p className="text-gray-800 font-medium text-xl md:text-2xl">
            TRANSFERING ESSENTIAL LIFE SKILLS
          </p>
          <p className="text-black max-w-[40ch]">
            Enabling purposeful living, holistic emancipation and general
            wellbeing in South African society
          </p>
          <div className="flex space-x-2 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-purple-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <p className="text-lg uppercase font-bold">Explore</p>
          </div>
        </div>
        <div className="flex justify-center space-x-2 py-8 flex-1 pl-3 md:pl-12 lg:pl-24">
          <img
            ref={manImageRef}
            className="self-end min-h-[55%] max-h-[75%] max-w-[45%] object-cover rounded shadow-md"
            alt=""
            src="/images/adult-man.jpg"
          />
          <img
            ref={womanImageRef}
            className="self-start min-h-[55%] max-h-[75%] max-w-[45%] object-cover rounded shadow-md"
            alt=""
            src="/images/adult-woman.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
