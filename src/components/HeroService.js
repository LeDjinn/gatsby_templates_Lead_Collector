import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export default function HeroServices() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 mt-24 md:mt-20">
      <div className="relative overflow-hidden z-0">
        <div className="max-w-7xl mx-auto">
          <div className="relative pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-40">
              <div className="sm:text-center lg:text-left z-0">
                <div className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block text-gray-50 xl:inline text-center mt-2 lg:text-left">
                    Nos Services
                  </span>
                  <br className="hidden lg:block" />
                </div>
                <div className="relative md:hidden md:absolute md:inset-y-0 lg:hidden lg:absolute z-10 lg:inset-y-0 lg:right-0 lg:w-1/2">
                  <StaticImage
                    src="../images/web_constructions.svg"
                    quality={65}
                    height={160}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    placeholder="tracedSVG"
                    alt="Otos lab agence web Île-de-France"
                    className="animate-pulse object-cover"
                  />
                  <div className="md:absolute  bg-blue-400 animate-ping absolute rounded-full w-20 h-20 md:right-24 md:top-20 right-0 top-8"></div>
                  <div className="absolute right-0  top-20">
                    <StaticImage
                      src="../images/Mobile_first.svg"
                      quality={65}
                      height={120}
                      formats={['AUTO', 'WEBP', 'AVIF']}
                      placeholder="tracedSVG"
                      alt="Otos Lab développeur d'application mobile"
                    />
                  </div>

                  <div
                    className="bg-yellow-400 absolute animate-pulse transition duration-75 right-10 top-14 w-5 h-5 "
                    style={{ clipPath: 'polygon(100% 0, 0 0, 0 100%)' }}
                  ></div>
                </div>

                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow mt-10">
                    <Link
                      to="/nous-contacter"
                      className="w-full  flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-500 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10 cursor-pointer"
                    >
                      Prendre rendez vous
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3"></div>
                </div>
              </div>
            </main>
          </div>
        </div>

        <div className="hidden lg:absolute z-10 lg:block lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="bg-indigo-400  absolute animate-bounce rounded-full w-10 h-10  left-32 top-64 "></div>
          <div className="bg-yellow-400  absolute rounded-full w-24 h-24 left-36 bottom-44 "></div>
          <div className="absolute left-72 top-8">
            <StaticImage
              src="../images/web_constructions.svg"
              quality={65}
              height={96}
              formats={['AUTO', 'WEBP', 'AVIF']}
              placeholder="tracedSVG"
              alt="Otos lab développeur de site wordpress"
            />
          </div>
          <div className="absolute left-80 top-56">
            <StaticImage
              src="../images/wordpress.svg"
              quality={65}
              height={96}
              formats={['AUTO', 'WEBP', 'AVIF']}
              placeholder="tracedSVG"
              alt="Otos lab développeur de site wordpress"
            />
          </div>
          <div className="absolute left-20 bottom-44">
            {' '}
            <StaticImage
              src="../images/Mobile_first.svg"
              quality={65}
              height={128}
              formats={['AUTO', 'WEBP', 'AVIF']}
              placeholder="tracedSVG"
              alt="Otos Lab développeur d'application mobile"
            />
          </div>

          <div
            className="bg-purple-900 absolute animate-pulse transition duration-75 left-64 bottom-72 w-5 h-5 "
            style={{ clipPath: 'polygon(100% 0, 0 34%, 73% 100%)' }}
          ></div>
          <div
            className="bg-blue-400 absolute animate-bounce transition duration-75 right-72 bottom-64 w-5 h-5 "
            style={{ clipPath: 'polygon(100% 35%, 0 35%, 50% 100%)' }}
          ></div>
          <div
            className="bg-blue-400 absolute animate-bounce transition duration-75 right-72 bottom-56 w-5 h-5 "
            style={{ clipPath: 'polygon(100% 35%, 0 35%, 50% 100%)' }}
          ></div>
          <div
            className="bg-gradient-to-r opacity-80 from-gray-400 to-blue-500 absolute animate-pulse duration-700 -left-48 bottom-44 w-1/6 h-16 "
            style={{
              clipPath: 'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)',
            }}
          ></div>
          <div
            className="bg-gradient-to-r opacity-80 from-purple-400 via-pink-500 to-red-500 absolute animate-pulse  -left-16 bottom-44  w-1/6 h-16 "
            style={{
              clipPath: 'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
