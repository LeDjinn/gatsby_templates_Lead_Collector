import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Menu, Transition } from '@headlessui/react';

import Logo from './Logo';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggle = () => setNavbarOpen(!navbarOpen);

  return (
    <>
      <div className="fixed top-0 left-0 w-full text-center bg-gray-50 z-10">
        <div className=" mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100  md:justify-start md:space-x-10">
            <Logo />
            <div className="-mr-2 -my-2 md:hidden">
              <button
                aria-label="Ouvrir le menu"
                type="button"
                className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-purple-700 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={toggle}
              >
                <span className="sr-only">Ouvrir le menu</span>

                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <NavbarLinks />
            </div>
          </div>
        </div>

        <div
          className={
            navbarOpen
              ? 'opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
              : 'hidden opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-50 divide-y-2 divide-gray-100">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Logo />
                </div>
                <div className="-mr-2">
                  <button
                    aria-label="Fermez le menu"
                    type="button"
                    className="bg-gray-50 rounded-md  p-2 inline-flex items-center justify-center text-purple-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={toggle}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6 bg-gray-50 border border-gray-300 rounded-md">
              <div className="grid">
                <Link
                  to="/"
                  className="text-xl font-medium text-gray-900  px-4 py-2 rounded-md hover:text-purple-800 hover:bg-gray-300 mb-2"
                  activeClassName="bg-gray-300 text-purple-800 rounded-md shadow-xl"
                >
                  Accueil
                </Link>

                <div className="relative inline-block text-left">
                  <Menu>
                    {({ open }) => (
                      <>
                        <span className="rounded-md shadow-sm">
                          <Link
                            to="/services"
                            className="inline-flex items-center justify-center w-full px-4 py-2 text-lg font-medium  transition duration-150 ease-in-out bg-gray-50 text-xl font-medium text-gray-900  rounded-md  hover:text-purple-800 hover:bg-gray-300 mb-2  focus:outline-none focus:border-blue-300 focus:shadow-outline-blue"
                            activeClassName="bg-gray-300 text-purple-800 rounded-md shadow-xl w-full px-4 py-2"
                          >
                            <span>Nos services</span>
                            <Menu.Button
                              aria-label="Nos services"
                              className="flex items-center justify-center"
                            >
                              <svg
                                className={
                                  open
                                    ? 'transform rotate-180 ml-2 h-5 w-5 text-purple-700 group-hover:text-gray-500 transition ease-out duration-200'
                                    : 'transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-purple-700 group-hover:text-gray-500'
                                }
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </Menu.Button>
                          </Link>
                        </span>

                        <Transition
                          show={open}
                          enter-active-class="transition duration-100 ease-out"
                          enter-from-class="transform scale-95 opacity-0"
                          enter-to-class="transform scale-100 opacity-100"
                          leave-active-class="transition duration-75 ease-out"
                          leave-from-class="transform scale-100 opacity-100"
                          leave-to-class="transform scale-95 opacity-0"
                        >
                          <Menu.Items
                            static
                            className="absolute w-full mt-2 bg-gray-50 border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                          >
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/services/site-vitrine"
                                    activeClassName="bg-gray-300 text-purple-800 shadow-xl"
                                    className={`${
                                      active ? 'bg-gray-100 text-purple-800' : 'text-gray-700'
                                    } flex  items-center justify-center w-full px-4 py-2 text-lg`}
                                  >
                                    Site vitrine
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/services/application-web"
                                    activeClassName="bg-gray-300 text-purple-800 shadow-xl"
                                    className={`${
                                      active ? 'bg-gray-100 text-purple-800' : 'text-gray-700'
                                    } flex items-center justify-center w-full px-4 py-2 text-lg`}
                                  >
                                    Application Web
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/services/e-commerce"
                                    activeClassName="bg-gray-300 text-purple-800 shadow-xl"
                                    className={`${
                                      active ? 'bg-gray-100 text-purple-800' : 'text-gray-700'
                                    } flex items-center justify-center w-full px-4 py-2 text-lg`}
                                  >
                                    E-commerce
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/services/portfolio"
                                    activeClassName="bg-gray-300 text-purple-800 shadow-xl"
                                    className={`${
                                      active ? 'bg-gray-100 text-purple-800' : 'text-gray-700'
                                    } flex items-center justify-center w-full px-4 py-2 text-lg`}
                                  >
                                    Portfolio
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/services/blog"
                                    className={`${
                                      active ? 'bg-gray-100 text-purple-800' : 'text-gray-700'
                                    } flex items-center justify-center justify center w-full px-4 py-2 text-lg`}
                                  >
                                    Blog
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/services/machine-learning"
                                    activeClassName="bg-gray-300 text-purple-800 shadow-xl"
                                    className={`${
                                      active ? 'bg-gray-100 text-purple-800' : 'text-gray-700'
                                    } flex  items-center justify-center w-full px-4 py-2 text-lg`}
                                  >
                                    Machine Learning
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>

                <Link
                  to="/methodologie"
                  className="text-xl font-medium text-gray-900  px-4 py-2 rounded-md hover:text-purple-800 hover:bg-gray-300 mb-2"
                  activeClassName="bg-gray-300 text-purple-800 rounded-md shadow-xl"
                  onClick={() => console.log('test')}
                >
                  Notre méthodologie
                </Link>
                <Link
                  to="/a-propos"
                  className="text-xl font-medium text-gray-900  px-4 py-2 rounded-md hover:text-purple-800 hover:bg-gray-300 mb-2"
                  activeClassName="bg-gray-300 text-purple-800 rounded-md shadow-xl"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  L'agence
                </Link>
                <Link
                  to="/nous-contacter"
                  className="text-xl font-medium text-gray-900  px-4 py-2 rounded-md hover:text-purple-800 hover:bg-gray-300 mb-2"
                  activeClassName="bg-gray-300 text-purple-800 rounded-md shadow-xl"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
