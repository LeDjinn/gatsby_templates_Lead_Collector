import React from 'react';
import MediumNavbar from '../Navbars/MediumNavbar';

const SchoolHero = () => {
  return (
    <div class="school w-full bg-center bg-cover h-screen">
      <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
        <div class="text-center">
          <h1 class="text-2xl font-semibold text-white uppercase lg:text-3xl">
            Une école française <span class="text-pink-700">à Kairouan</span>
          </h1>
          <button class="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-700 rounded-md lg:w-auto hover:bg-pink-800 focus:outline-none focus:bg-pink-800">
            Contactez nous
          </button>
        </div>
      </div>
    </div>
  );
};
export default SchoolHero;
