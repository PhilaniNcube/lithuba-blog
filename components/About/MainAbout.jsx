/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const MainAbout = () => {
  return (
    <motion.div
      className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-16 lg:mt-2"
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ ease: 'easeOut', duration: 0.8 }}
    >
      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <motion.div
          className="w-full lg:w-6/12"
          layouId="about"
          transition={{ ease: 'easeOut', duration: 1.6 }}
        >
          <Image
            className="lg:block hidden w-full"
            width={640}
            height={426}
            src="/images/singing.jpg"
            alt="Purple flowers on a book"
          />
        </motion.div>
        <div className="w-full lg:w-6/12 flex flex-col justify-center">
          <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
            About Us
          </h2>
          <p className="font-normal text-base md:text-xl leading-6 text-gray-600 mt-6">
            Driven by the need to address social injustices, the organisation
            has decided to extend their services to those who need them but
            cannot afford.
          </p>
        </div>
      </div>

      <div className="relative mt-24">
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 5V21"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 5V14"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 4.99984C5.93464 4.08371 7.19124 3.57056 8.5 3.57056C9.80876 3.57056 11.0654 4.08371 12 4.99984C12.9346 5.91598 14.1912 6.42913 15.5 6.42913C16.8088 6.42913 18.0654 5.91598 19 4.99984"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 14.0001C5.93464 13.084 7.19124 12.5708 8.5 12.5708C9.80876 12.5708 11.0654 13.084 12 14.0001C12.9346 14.9162 14.1912 15.4294 15.5 15.4294C16.8088 15.4294 18.0654 14.9162 19 14.0001"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <svg
            className="z-20"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="24" fill="#1F2937" />
            <path
              d="M26 15V19C26 19.2652 26.1054 19.5196 26.2929 19.7071C26.4804 19.8946 26.7348 20 27 20H31"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M31 30V31C31 31.5304 30.7893 32.0391 30.4142 32.4142C30.0391 32.7893 29.5304 33 29 33H19C18.4696 33 17.9609 32.7893 17.5858 32.4142C17.2107 32.0391 17 31.5304 17 31V30"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M30 26H33M15 26H18H15ZM22.5 26H25.5H22.5Z"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 22V17C17 16.4696 17.2107 15.9609 17.5858 15.5858C17.9609 15.2107 18.4696 15 19 15H26L31 20V22"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            className="z-20 sm:block hidden"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="24" fill="#1F2937" />
            <path
              d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 sm:gap-8 gap-4">
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
            Women Empowerment
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            To have goal-orientated women with an ability to decide the destiny
            of their lives
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            To instill confidence in women to trust in their abilities and
            internal assets to change theirlives
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            To make women understand the important role they play in the
            community and thus inculcating self-confidence in their abilities
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            To inculcate the self-sufficiency and self-dependence in women
          </p>
        </div>
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
            Entrepreneur@SMME
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            To build business leaders who can strategise and respond to
            environmental influences proactively.
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            To create composed business leaders amid a chaotic, complex and
            uncertain business environment
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            To create well-rounded business leaders who are knowledgeable about
            how the external and internal environment impacts their businesses
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            To create visionaries who would align their actions outside of their
            business to the visions they set for themselves and their business
          </p>
        </div>
        <div className="">
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
            Unlocking Youth Talent
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            To create a calibre of young people who can make informed decisions
            about themselves and thus contribute to the community at large.
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            The develop self-reliant young people who are aware of themselves
            and their environment
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            To have young people with the ability to define their future beyond
            their current circumstances and be able to adjust their behaviours
            accordingly
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            To inculcate the culture of critical thinking in young people and be
            able to trust their abilities to challenge the status quo
          </p>
        </div>
      </div>
      <div className="sm:hidden block relative mt-8">
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <svg
            className="z-20"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="24" fill="#1F2937" />
            <path
              d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
      </div>

      <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
        <div className="w-full lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
            Our Objectives
          </h2>
          <div className="w-full my-8">
            <Image
              alt=""
              width={1920}
              height={1280}
              src="/images/goals.jpg"
              className="rounded"
            />
          </div>
        </div>
        <div className="w-full lg:w-6/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
            {/* <!-- Team Card --> */}
            <div className="flex p-4 shadow-lg rounded-lg bg-sky-200">
              <div className="mr-6">
                <img className="h-24 w-24" alt="" src="/images/icon-01.svg" />
              </div>
              <div className="">
                <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                  To work with underprivileged communities in defining their
                  struggles and to co-construct tailor-made programmes that will
                  address the specific challenges of their community.
                </p>
              </div>
            </div>

            {/* <!-- Board Card --> */}
            <div className="flex p-4 shadow-lg rounded-lg bg-sky-200">
              <div className="mr-6">
                <img className="h-24 w-24" alt="" src="/images/icon-02.svg" />
              </div>
              <div className="">
                <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                  To build resilient communities that can take on challenges
                  presented to them and finding creative solutions.
                </p>
              </div>
            </div>

            {/* <!-- Press Card --> */}
            <div className="flex p-4 shadow-lg rounded-lg bg-sky-200">
              <div className="mr-6">
                <img className="h-24 w-24" alt="" src="/images/icon-03.svg" />
              </div>
              <div className="">
                <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                  To work in conjunction with other role players in the NPO
                  space, government department and private sector, forging
                  strategic alliances with partners who might provide needed
                  services that are beyond the scope of our organisation.
                </p>
              </div>
            </div>

            <div className="flex p-4 shadow-lg rounded-lg bg-sky-200">
              <div className="mr-6">
                <img className="h-24 w-24" alt="" src="/images/icon-04.svg" />
              </div>
              <div className="">
                <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                  To have an efficient and effective organisation that will
                  drive the noble vision of contributing to holistic
                  emancipation marginalized communities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MainAbout;