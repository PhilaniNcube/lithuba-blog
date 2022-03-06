/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import {
  BsFacebook,
  BsWhatsapp,
  BsInstagram,
  BsLinkedin,
} from 'react-icons/bs';

export default function Navbar() {
  const [sideBar, setsideBar] = useState();

  const dropdownHandler = () => {
    console.log('dropdown');
  };

  return (
    <Fragment>
      <div className="h-full w-full">
        {/* Code block starts */}
        <nav
          role="navigation"
          className="md:px-6 lg:px-4 w-full mx-auto hidden md:block bg-white shadow-md"
        >
          <div className="container justify-between h-20 flex items-center bg-white md:items-stretch mx-auto">
            <div className="h-full flex items-center">
              <Link href="/" passHref>
                <button
                  role="img"
                  aria-label="logo"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mr-10 flex items-center"
                >
                  <img
                    src="/images/logo.png"
                    alt="Lithuba"
                    className="h-12 object-cover"
                  />
                </button>
              </Link>
              <ul className="pr-12 md:flex items-center h-full hidden">
                <li>
                  <Link href="/blog">
                    <a className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 tracking-normal border-white">
                      Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/events">
                    <a className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 mx-6 tracking-normal">
                      Events
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/team">
                    <a className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 mr-6 tracking-normal">
                      Team
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 mr-6 tracking-normal">
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 mr-6 tracking-normal">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:flex items-center justify-end hidden">
              <div className="flex items-center">
                <div className="md:pr-10 lg:pr-0 h-full flex items-center">
                  <div className="relative">
                    <div className="text-gray-600 absolute ml-3 inset-0 m-auto lg:w-4 lg:h-4 md:w-6 md:h-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-600 stroke-current icon icon-tabler icon-tabler-search"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={10} cy={10} r={7} />
                        <line x1={21} y1={21} x2={15} y2={15} />
                      </svg>
                    </div>
                    <input
                      className="hidden lg:block border border-gray-200 focus:outline-none focus:border-indigo-700 w-64 rounded text-sm text-gray-800 pl-8 py-2"
                      type="text"
                      placeholder="Search here"
                    />
                  </div>
                  <ul className="md:flex items-center h-full hidden">
                    <li>
                      <Link href="https://www.facebook.com/" passHref>
                        <a>
                          <BsFacebook className="text-indigo-700 p-1 h-8 w-8 ml-2 cursor-pointer" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/" passHref>
                        <a>
                          <BsInstagram className="text-indigo-700 p-1 h-8 w-8 cursor-pointer" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Navbar */}
        <nav className="md:hidden">
          <div className="w-full shadow-md bg-white fixed top-0 z-40">
            <div className="flex md:hidden mx-auto container">
              <div className="border-b py-4 border-gray-200 flex items-stretch justify-between mx-4 md:items-center w-full">
                <div
                  aria-label="logo"
                  role="img"
                  tabIndex={0}
                  className="focus:outline-none"
                >
                  <img
                    src="/images/logo.png"
                    alt="Lithuba"
                    className="h-12 object-cover"
                  />
                </div>
                <div className="flex md:hidden items-center justify-end">
                  <div className="flex items-center">
                    <div className="h-full flex items-center">
                      <button
                        id="menu"
                        aria-label="open menu"
                        className="focus:outline-none focus:ring-2 focus:ring-gray-700 rounded-md text-gray-800"
                        onClick={() => setsideBar(!sideBar)}
                      >
                        <svg
                          width={30}
                          height={30}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21 10H3"
                            stroke="#4B5563"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 6H3"
                            stroke="#4B5563"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 14H3"
                            stroke="#4B5563"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 18H3"
                            stroke="#4B5563"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              sideBar
                ? 'absolute w-full h-full transform translate-x-0 z-40 transition duration-700 sm:hidden'
                : 'absolute w-full h-full transform -translate-x-full z-40 transition duration-700 sm:hidden'
            }
            id="mobile-nav"
          >
            <div className="w-full h-full shadow-lg z-40 fixed overflow-y-auto  top-0 bg-white flex-col justify-between xl:hidden pb-4 transition duration-500 ease-in-out">
              <div className="px-5 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="border-b border-gray-200 pb-8 flex items-center justify-between w-full">
                        <div className="md:pr-10 lg:pr-0 h-full flex items-center w-full">
                          <div className="relative w-full">
                            <div className="text-gray-800 absolute ml-3 inset-0 m-auto w-4 h-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-search"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={10} cy={10} r={7} />
                                <line x1={21} y1={21} x2={15} y2={15} />
                              </svg>
                            </div>
                            <input
                              className="md:hidden border border-gray-300 focus:outline-none focus:border-indigo-700 w-full rounded text-sm text-gray-800 pl-8 py-2"
                              type="text"
                              placeholder="Search here"
                            />
                          </div>
                        </div>
                        <button
                          aria-label="close menu"
                          className="focus:outline-none focus:ring-2 rounded-md text-gray-800 pl-8"
                          onClick={() => setsideBar(!sideBar)}
                        >
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13 1L1 13"
                              stroke="#1F2937"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1 1L13 13"
                              stroke="#1F2937"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <ul className="">
                      <li>
                        <Link href="/blog" passHref>
                          <a className="cursor-pointer">
                            <div className="text-gray-800 pt-10">
                              <div className="flex items-center">
                                <p
                                  tabIndex={0}
                                  className="focus:outline-none text-gray-800 text-sm font-medium"
                                >
                                  Blog
                                </p>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/events">
                          <a className="cursor-pointer">
                            <div className="text-gray-800 pt-8">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <p
                                    tabIndex={0}
                                    className="focus:outline-none text-gray-800 text-sm font-medium"
                                  >
                                    Events
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/team">
                          <a className="cursor-pointer">
                            <div className="text-gray-800 pt-8">
                              <div className="flex items-center">
                                <p
                                  tabIndex={0}
                                  className="focus:outline-none text-gray-800 text-sm font-medium"
                                >
                                  Team
                                </p>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about">
                          <a className="cursor-pointer">
                            <div className="text-gray-800 pt-8">
                              <div className="flex items-center">
                                <p
                                  tabIndex={0}
                                  className="focus:outline-none text-gray-800 text-sm font-medium"
                                >
                                  About
                                </p>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          <a className="cursor-pointer">
                            <div className="text-gray-800 pt-8">
                              <div className="flex items-center">
                                <p
                                  tabIndex={0}
                                  className="focus:outline-none text-gray-800 text-sm font-medium"
                                >
                                  Contact
                                </p>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Sidebar ends */}
        {/* Code block ends */}
      </div>
    </Fragment>
  );
}
