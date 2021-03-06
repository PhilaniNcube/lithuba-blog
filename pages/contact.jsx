import React from 'react';
import Image from 'next/image';

function Contact() {
  return (
    <div className="bg-gray-50">
      <div className="w-full h-full lg:flex items-start justify-center xl:py-20 py-8 px-4">
        <div className="lg:w-1/2 xl:mr-12 lg:mr-6">
          <Image
            width={640}
            height={440}
            src="/images/contact.jpg"
            alt="contact"
            className="w-full h-full rounded-lg"
          />
          <div className="flex flex-wrap items-center mt-8 bg-sky-200">
            <div
              arial-label="Address"
              className="mr-6 md:w-auto w-full rounded py-6 pr-9 pl-6"
            >
              <p className="text-base font-semibold leading-4 text-gray-900">
                60 Zephyr Avenue,
              </p>
              <p className="text-base leading-4 mt-4 text-gray-600">
                Bluewater Bay, Port Elizabeth
              </p>
              <p className="text-base leading-4 mt-2 text-gray-600">6013</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 xl:pl-12 lg:pl-6 lg:pt-0 pt-4">
          <h1
            aria-label="Get in touch"
            role="heading"
            className="text-3xl font-bold text-gray-800"
          >
            Get in touch
          </h1>

          <div className="xl:flex items-center justify-between mt-10">
            <div>
              <p className="text-base font-medium leading-4 mb-4 text-gray-800">
                First Name
              </p>
              <input
                type="name"
                aria-label="Please input first name"
                className="xl:w-48 w-full p-3 text-base leading-none text-gray-500 bg-gray-200 rounded placeholder-gray-500"
                placeholder="eg. William"
              />
            </div>
            <div className="xl:ml-6 xl:mt-0 mt-4">
              <p className="text-base font-medium leading-4 mb-4 text-gray-800">
                Last Name
              </p>
              <input
                type="name"
                aria-label="Please input Last name"
                className="xl:w-48 w-full p-3 text-base leading-none text-gray-500 bg-gray-200 rounded placeholder-gray-500"
                placeholder="eg. Smith"
              />
            </div>
          </div>
          <div className="mt-6">
            <p className="text-base font-medium leading-4 mb-4 text-gray-800">
              Email Address
            </p>
            <input
              type="email"
              aria-label="Please enter email"
              className="w-full p-3 text-base leading-none text-gray-500 bg-gray-200 rounded placeholder-gray-500"
              placeholder="eg. william.smith@doeco.com"
            />
          </div>
          <div className="mt-6">
            <p className="text-base font-medium leading-4 mb-4 text-gray-800">
              Message{' '}
            </p>
            <textarea
              aria-label="Please leave comments"
              className="w-full resize-none h-40 p-3 text-base leading-none text-gray-500 bg-gray-200 rounded placeholder-gray-500"
              defaultValue={''}
            />
          </div>
          <button
            role="button"
            arial-label="send message "
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 hover:bg-gray-600 text-base font-semibold leading-4 py-6 px-8 text-white bg-gray-700 rounded mt-12"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
