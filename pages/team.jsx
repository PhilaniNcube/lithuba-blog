import React, { Fragment } from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <Fragment>
      <div className="xl:mx-auto xl:container 2xl:px-20 px-6 py-20">
        <h1 className="text-5xl font-semibold leading-10 text-gray-800 text-center">
          Meet our team
        </h1>
        <div className="flex flex-wrap items-stretch xl:justify-between justify-center mt-16 xl:gap-6 gap-4">
          <div className="lg:w-96 w-80">
            <Image
              width={411}
              height={317}
              src="/images/team-1.png"
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="woman smiling"
            />
            <div className="bg-sky-100 shadow-md rounded-b-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-600">
                Samantha Jane
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">Designer</p>
            </div>
          </div>
          <div className="bg-indigo-700 rounded-md lg:w-96 w-80 flex flex-col items-center justify-center md:py-0 py-12">
            <h3 className="text-2xl font-semibold leading-6 text-center text-white">
              About Team
            </h3>
            <p className="lg:w-80 lg:px-0 px-4 text-base leading-6 text-center text-white mt-6">
              Teamwork is the collaborative effort of a team to achieve a common
              goal or to complete task in the most effective way. This concept
              is seen in the greater framework of a team in which indipendent
              indiviuals who work together towards common goal basic requirement
              for effective team and company
            </p>
          </div>
          <div className="lg:w-96 w-80">
            <Image
              width={411}
              height={317}
              src="/images/team-2.png"
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="woman in black dress"
            />
            <div className="bg-green-200 shadow-md rounded-b-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-600">
                Marilyn Rhodes
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">Designer</p>
            </div>
          </div>
          <div className="lg:w-96 w-80">
            <Image
              width={411}
              height={317}
              src="/images/team-3.png"
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="woman smiling"
            />
            <div className="bg-yellow-100 shadow-md rounded-b-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-600">
                Marry Smith
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">Writer</p>
            </div>
          </div>
          <div className="lg:w-96 w-80">
            <Image
              width={411}
              height={317}
              src="/images/team-4.png"
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="woman smiling"
            />
            <div className="bg-pink-200 shadow-md rounded-b-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-600">
                John Renolds
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">
                Developer
              </p>
            </div>
          </div>
          <div className="lg:w-96 w-80">
            <Image
              width={411}
              height={317}
              src="/images/team-5.png"
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="woman smiling"
            />
            <div className="bg-red-100 shadow-md rounded-b-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-600">
                Annie Jackie
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">Designer</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
