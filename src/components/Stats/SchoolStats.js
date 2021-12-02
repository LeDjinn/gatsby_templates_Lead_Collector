import React from 'react';

const SchoolStats = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
            <span class="relative inline-block">
              Les <span class="relative text-blue-700">Chiffres</span>
            </span>
          </h2>
          <p class="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            rem aperiam, eaque ipsa quae.
          </p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-blue-700 inline-flex"></div>
          </div>
        </div>
      </div>
      <div class="school-stat grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div class="flex flex-col items-center justify-center text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-blue-700">200</h6>
          <p class="text-sm font-medium tracking-widest text-gray-50 uppercase lg:text-base">
            Éléves
          </p>
        </div>
        <div class="flex flex-col items-center justify-center text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-blue-700">10</h6>
          <p class="text-sm font-medium tracking-widest text-gray-50 uppercase lg:text-base">
            Professeurs
          </p>
        </div>
        <div class="flex flex-col items-center justify-center text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-blue-700">15</h6>
          <p class="text-sm font-medium tracking-widest text-gray-50 uppercase lg:text-base">
            Classes
          </p>
        </div>
        <div class="flex flex-col items-center justify-center text-center">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-blue-700">1</h6>
          <p class="text-sm font-medium tracking-widest text-gray-50 uppercase lg:text-base">
            Association
          </p>
        </div>
      </div>
    </div>
  );
};
export default SchoolStats;
