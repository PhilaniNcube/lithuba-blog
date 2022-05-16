/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react';

export default function Events() {
  return (
    <Fragment>
      <div className="md:px-0 sm:px-12 lg:px-0 px-4 mx-auto container pb-12">
        <div className="w-full md:flex items-center justify-between md:pt-0 pt-12 ">
          <div className="md:w-5/12 w-full">
            <h1
              role="heading"
              className="lg:text-6xl text-3xl font-extrabold leading-tight text-gray-800"
            >
              Upcoming Lithuba Events
            </h1>
            <p
              role="contentinfo"
              className="text-base leading-6 pt-4 text-gray-600"
            >
              Join us for an event that you won’t be forgettig anytime soon, an
              experience that spans from your hobbies to your work, because
              thats what it’s all about.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <img
              src="https://i.ibb.co/DYQx3sr/blogg.png"
              className="md:w-full w-9/12 rounded-b-md"
              alt="hot air ballons"
            />
          </div>
        </div>
        <div className="py-16 relative w-full bg-sky-400/60 rounded-lg shadow-xl mt-6 px-4">
          <div className="h-72 w-full  absolute z-0 mt-4" />
          <h2
            role="heading"
            className="text-2xl font-semibold leading-6 text-gray-800 relative z-20"
          >
            Top Picks
          </h2>
          <div className="relative z-40 flex w-full sm:flex-row flex-col sm:flex-wrap items-center sm:justify-between justify-center pt-6 ">
            <div className="2xl:w-auto xl:w-96 lg:w-72 md:w-56 sm:w-64 w-80 sm:pb-0 pb-8">
              <div className="relative w-full">
                <div className="absolute bottom-0 left-0 px-7 py-4 bg-white text-base font-medium leading-6 text-gray-800">
                  Music
                </div>
                <img
                  className="w-full"
                  src="https://i.ibb.co/6W2Yvdj/muzik.png"
                  alt="music keyboard"
                />
              </div>
              <p className="lg:w-72 pt-4 text-base font-semibold leading-normal text-gray-800">
                How playing music every morning can boost your creativity?
              </p>
              <div className="flex items-center pt-4">
                <img
                  className="w-6 h-6 shadow rounded-full"
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_2.png"
                  alt=""
                />
                <p className="text-xs ml-2 leading-3 text-gray-800">
                  Jennifer Wright
                </p>
              </div>
            </div>
            <div className="2xl:w-auto xl:w-96 lg:w-72 md:w-56 sm:w-64 w-80  lg:px-0 px-1 ">
              <div className="relative w-full">
                <div className="absolute bottom-0 left-0 px-7 py-4 bg-white text-base font-medium leading-6 text-gray-800">
                  Art
                </div>
                <img
                  className="w-full"
                  src="https://i.ibb.co/yVdVvgd/art.png"
                  alt="arts"
                />
              </div>
              <p className="lg:w-72 pt-4 text-base font-semibold leading-normal text-gray-800">
                10 tips for creating a successful business from your art
              </p>
              <div className="flex items-center pt-4">
                <img
                  className="w-6 h-6 shadow rounded-full"
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_2.png"
                  alt=""
                />
                <p className="text-xs ml-2 leading-3 text-gray-800">
                  Jennifer Wright
                </p>
              </div>
            </div>
            <div className="2xl:w-auto xl:w-96 lg:w-72 md:w-56 sm:w-64 w-80 md:pt-0 pt-8 ">
              <div className="relative w-full">
                <div className="absolute bottom-0 left-0 px-7 py-4 bg-white text-base font-medium leading-6 text-gray-800">
                  Photography
                </div>
                <img
                  className="w-full"
                  src="https://i.ibb.co/0B96c7y/photograph.png"
                  alt="image of a person"
                />
              </div>
              <p className="lg:w-72 pt-4 text-base font-semibold leading-normal text-gray-800">
                How can you learn professional photography by only watching
                videos?
              </p>
              <div className="flex items-center pt-4">
                <img
                  className="w-6 h-6 shadow rounded-full"
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_2.png"
                  alt=""
                />
                <p className="text-xs ml-2 leading-3 text-gray-800">
                  Jennifer Wright
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
