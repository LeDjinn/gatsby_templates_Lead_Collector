import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export default function HeroHome() {
  return (
    <div className="mt-24">
      <div className="relative  bg-gray-50 overflow-hidden z-0">
        <div className="max-w-7xl mx-auto">
          <div className="relative pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4   sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 md:text-6xl text-center md:text-left">
                  <span className="block xl:inline">Agence web</span>
                  <br className="hidden lg:block" />
                  <span className="block text-purple-700 xl:inline">
                    Création d'applications web & mobile
                  </span>
                </h1>
                <div className=" relative lg:hidden lg:absolute z-10 lg:inset-y-0 lg:right-0 lg:w-1/2">
                  <StaticImage
                    src="../images/otos-brain.png"
                    quality={65}
                    height={160}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    placeholder="tracedSVG"
                    alt="Otos Lab développeur de site web"
                    className="animate-pulse object-cover"
                  />
                  <div className="bg-blue-400 animate-ping absolute rounded-full w-20 h-20 right-32 top-20"></div>
                  <div className="absolute md:right-20 right-0 bottom-0">
                    <StaticImage
                      src="../images/responsive.svg"
                      quality={65}
                      height={80}
                      formats={['AUTO', 'WEBP', 'AVIF']}
                      placeholder="tracedSVG"
                      alt="Otos Lab développeur de site internet responsive"
                    />
                  </div>

                  <div
                    className="bg-yellow-400 absolute animate-pulse transition duration-75 right-40 top-28 md:right-26 w-5 h-5 "
                    style={{ clipPath: 'polygon(100% 0, 0 0, 0 100%)' }}
                  ></div>
                </div>

                <div className="mt-5 sm:mt-12 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <div className="w-full  flex items-center justify-center md:px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-50 bg-purple-700 hover:bg-yellow-400 md:text-lg  cursor-pointer">
                      <Link to="/services">Nos services</Link>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3"></div>
                </div>
              </div>
            </main>
          </div>
        </div>

        <div className="hidden lg:absolute z-10 lg:block lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div
            className="lg:w-full bg-gradient-to-r from-gray-100 via-blue-300 to-purple-400 lg:h-full lg:relative "
            style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          >
            <div className="bg-blue-400 absolute rounded-full w-32 h-32 right-56 top-96"></div>
            <div className="bg-indigo-400 animate-pulse absolute rounded-full w-32 h-32  left-32 top-64 "></div>
            <div className="bg-yellow-400 animate-bounce absolute rounded-full w-24 h-24   right-16 top-72 "></div>
            <div className="absolute animate-pulse left-72 top-20">
              <StaticImage
                src="../images/otos-brain.png"
                quality={65}
                height={192}
                formats={['AUTO', 'WEBP', 'AVIF']}
                placeholder="tracedSVG"
                alt="Otos lab - From scratch to success"
              />
            </div>
            <div className="absolute left-32 top-64">
              <StaticImage
                src="../images/e-commerce.svg"
                quality={65}
                height={80}
                formats={['AUTO', 'WEBP', 'AVIF']}
                placeholder="tracedSVG"
                alt="Otos Lab développeur de site web"
              />
            </div>
            <div className="absolute right-20 top-80">
              <StaticImage
                src="../images/data_upgrading.svg"
                quality={65}
                height={64}
                formats={['AUTO', 'WEBP', 'AVIF']}
                placeholder="tracedSVG"
                alt="Otos Lab, gestion de données, data science et machine learning"
              />
            </div>
            <div className="absolute right-32 top-96">
              <StaticImage
                src="../images/responsive.svg"
                quality={65}
                height={128}
                formats={['AUTO', 'WEBP', 'AVIF']}
                placeholder="tracedSVG"
                alt="Otos Lab développeur de site internet responsive"
              />
            </div>

            <div
              className="bg-purple-900 absolute animate-pulse left-72 bottom-80 w-5 h-5 "
              style={{ clipPath: 'polygon(100% 0, 0 34%, 73% 100%)' }}
            ></div>
            <div
              className="bg-purple-900 absolute animate-pulse transition duration-75 left-64 bottom-72 w-5 h-5 "
              style={{ clipPath: 'polygon(100% 0, 0 34%, 73% 100%)' }}
            ></div>
            <div
              className="bg-blue-400 absolute animate-pulse transition duration-75 right-72 bottom-64 w-5 h-5 "
              style={{ clipPath: 'polygon(100% 35%, 0 35%, 50% 100%)' }}
            ></div>
            <div
              className="bg-blue-400 absolute animate-pulse transition duration-75 right-72 bottom-56 w-5 h-5 "
              style={{ clipPath: 'polygon(100% 35%, 0 35%, 50% 100%)' }}
            ></div>
            <div
              className="bg-yellow-400 absolute animate-pulse transition duration-75 right-36 top-64 w-5 h-5 "
              style={{ clipPath: 'polygon(100% 0, 0 0, 0 100%)' }}
            ></div>
            <div
              className="bg-yellow-400 absolute animate-pulse transition duration-75 right-44 top-56 w-5 h-5 "
              style={{ clipPath: 'polygon(100% 0, 0 0, 0 100%)' }}
            ></div>
            <div className="absolute transition duration-75 -left-32  w-1/2 top-42">
              <div
                className="bg-green-400  h-72 "
                style={{ clipPath: 'polygon(50% 0%, 100% 60%, 50% 100%, 0% 50%)' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
