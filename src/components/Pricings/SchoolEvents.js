import React from 'react';

const SchoolEvents = () => {
  return (
    <>
     <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
            <span class="relative inline-block">
              Nos <span class="relative text-blue-700">Événements</span>
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
      <div className="md:flex md:justify-center md:space-x-8 md:px-14">
        <div className="mt-16 py-4 px-4 w-96 bg-pink-600 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div className="flex flex-col items-center w-sm">
            <div
              class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1542587227-8802646daa56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzODM2OTc4NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)',
              }}
            ></div>

            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
              <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                Rentrée scolaire
              </h3>

              <div class="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span class="font-bold text-gray-800 dark:text-gray-200">
                  22 rue de l'école Française, 3100 Kairoun, Tunisie
                </span>
                <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 py-4 px-4 w-96 bg-pink-600 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div className="flex flex-col items-center w-sm">
            <div
              class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1515187029135-18ee286d815b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit)',
              }}
            ></div>

            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
              <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                Réunion parents-élèves
              </h3>

              <div class="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span class="font-bold text-gray-800 dark:text-gray-200">
                  22 rue de l'école Française, 3100 Kairoun, Tunisie
                </span>
                <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 py-4 px-4 w-96 bg-pink-600 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div className="flex flex-col items-center w-sm">
            <div
              class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1611153394979-3a717e750c5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit)',
              }}
            ></div>

            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
              <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                Associations sportives
              </h3>

              <div class="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span class="font-bold text-gray-800 dark:text-gray-200">
                  22 rue de l'école Française, 3100 Kairoun, Tunisie
                </span>
                <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-center md:space-x-8 md:px-14">
        <div className="mt-16 py-4 px-4 w-96 bg-pink-600 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div className="flex flex-col items-center w-sm">
            <div
              class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE3MDU2NDQ3&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit)',
              }}
            ></div>

            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
              <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                Voyage organisé
              </h3>

              <div class="flex flex-col items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span class="font-bold text-gray-800 dark:text-gray-200 text-center">
                  22 rue de l'école Française, 3100 Kairoun, Tunisie
                </span>
                <button class="mt-2 px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 py-4 px-4 w-96 bg-pink-600 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div className="flex flex-col items-center w-sm">
            <div
              class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1588072432904-843af37f03ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzODM2OTM0MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)',
              }}
            ></div>

            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
              <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                Atelier dessin
              </h3>

              <div class="flex flex-col items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span class="font-bold text-gray-800 dark:text-gray-200 text-center">
                  22 rue de l'école Française, 3100 Kairoun, Tunisie
                </span>
                <button class="mt-2 px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 py-4 px-4 w-96 bg-pink-600 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div className="flex flex-col items-center w-sm">
            <div
              class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1546410531-bb4caa6b424d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit)',
              }}
            ></div>

            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
              <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                Cours d'été
              </h3>

              <div class="flex flex-col items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span class="font-bold text-gray-800 dark:text-gray-200 text-center">
                  22 rue de l'école Française, 3100 Kairoun, Tunisie
                </span>
                <button class="mt-2 px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SchoolEvents;
