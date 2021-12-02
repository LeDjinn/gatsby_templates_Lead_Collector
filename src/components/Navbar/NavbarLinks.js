import React from 'react';
import { Link } from 'gatsby';
import { Menu, Transition } from '@headlessui/react';

const NavbarLinks = () => {
  return (
    <>
      <nav className="hidden md:flex md:items-center md:justify-center space-x-10 z-20">
        <Link
          to="/"
          className="text-base font-medium text-gray-500 hover:text-gray-900 hover:shadow-inner rounded-md px-4 py-2"
          activeClassName="bg-gray-300 text-purple-800 rounded-md shadow-xl"
          aria-current={'isActive' ? 'page' : undefined}
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
                    className="inline-flex items-center justify-center w-full rounded-md px-4 py-2 text-base font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-gray-50 hover:text-gray-900 hover:shadow-inner focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 "
                    activeClassName="bg-gray-300 text-purple-800 rounded-md shadow-xl px-4 py-2"
                  >
                    <Menu.Button aria-label='Nos services'  className="flex items-center justify-center">
                      <span>Nos services</span>

                      <svg
                        className={
                          open
                            ? 'transform rotate-180 ml-2 h-5 w-5 text-purple-700 group-hover:text-gray-800 transition ease-out duration-200'
                            : 'transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-purple-700 group-hover:text-gray-800'
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
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="absolute right-0 w-56 mt-2 origin-top-right bg-gray-50 border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                  >
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/services/site-vitrine"
                            className={`${
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            activeClassName="bg-gray-300 text-purple-800 shadow-xl"
                          >
                            Site vitrine
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/services/application-web"
                            className={`${
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            activeClassName="bg-gray-300 text-purple-800 shadow-xl"
                          >
                            Application Web
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/services/e-commerce"
                            className={`${
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            activeClassName="bg-gray-300 text-purple-800 shadow-xl"
                          >
                            E-commerce
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/services/portfolio"
                            className={`${
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            activeClassName="bg-gray-300 text-purple-800 shadow-xl"
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
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            activeClassName="bg-gray-300 text-purple-800 shadow-xl"
                          >
                            Blog
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/services/machine-learning"
                            className={`${
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            activeClassName="bg-gray-300 text-purple-800 shadow-xl"
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
          className="text-base font-medium text-gray-500 hover:text-gray-900 hover:shadow-inner hover:shadow-2xl rounded-md  px-4 py-2"
          activeClassName="bg-gray-300 text-purple-800 rounded-md shadow-xl"
          aria-current={'isActive' ? 'page' : undefined}
        >
          Notre méthodologie
        </Link>
        <Link
          to="/a-propos"
          className="text-base font-medium text-gray-500 hover:text-gray-900 hover:shadow-inner hover:shadow-2xl rounded-md  px-4 py-2"
          activeClassName="bg-gray-300 text-purple-800 rounded-md shadow-xl"
          aria-current={'isActive' ? 'page' : undefined}
        >
          L'agence
        </Link>
        <Link
          to="/nous-contacter"
          className="text-base font-medium text-gray-500 hover:text-gray-900 hover:shadow-inner hover:shadow-2xl rounded-md  px-4 py-2"
          activeClassName="bg-gray-300 text-purple-800 rounded-md shadow-xl"
          aria-current={'isActive' ? 'page' : undefined}
        >
          Nous contacter
        </Link>
      </nav>
    </>
  );
};

export default NavbarLinks;
