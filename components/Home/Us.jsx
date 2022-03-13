/* eslint-disable @next/next/no-img-element */
import React from 'react';
function Us() {
  return (
    <div className="overflow-y-hidden">
      <div className="pb-16">
        {/* Code block starts */}
        <div>
          <section className="py-12 px-4 md:px-6 lg:px-0 mx-auto max-w-7xl  bg-white">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <div className="w-full md:w-1/2 flex items-center">
                <img
                  loading="lazy"
                  className="rounded"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/boxed-water-is-better-6dX5TPPM34M-unsplash.png"
                  alt="Two Developer Girls writing code"
                  role="img"
                />
              </div>
              <div className="flex flex-col justify-center w-full md:w-1/2">
                <div className="">
                  <p className="font-light text-gray-600">LITHUBA IS</p>
                  <h3
                    role="heading"
                    className="text-2xl xl:text-4xl font-semibold leading-6 xl:leading-10 text-gray-800"
                  >
                    DIRECT <br /> DRIVEN <br /> DEVOTED
                  </h3>
                  <p
                    role="contentinfo"
                    className="text-base xl:text-xl text-gray-600 xl:leading-normal pt-2 lg:pt-4"
                  >
                    Our organization plans to empower members of the community
                    to achieve sustainable economic development. We aim to
                    empower people to access opportunities of economic
                    emancipation.
                  </p>
                  <button className="my-4 lg:my-8 lg:mb-0 bg-gray-500 transition duration-150 ease-in-out hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 rounded text-white py-2 px-4 xl:px-6 xl:py-4 text-base xl:text-xl">
                    Who We Are
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Code block ends */}
      </div>
    </div>
  );
}

export default Us;
