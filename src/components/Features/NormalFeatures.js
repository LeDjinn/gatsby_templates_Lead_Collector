import React from 'react';

const NormalFeatures = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="text-center mb-20 mt-8">
        <h1 class="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">
          Notre savoir faire
        </h1>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
          Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo
          juice poutine, ramps microdosing banh mi pug.
        </p>
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-blue-800 inline-flex"></div>
        </div>
      </div>
      <div class="container px-5 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            class="object-cover object-center h-full w-full"
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          />
        </div>
        <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-800 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
                indxgo juice poutine.
              </p>
              <a class="mt-3 text-blue-800 inline-flex items-center">
                En savoir plus
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-800 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
                indxgo juice poutine.
              </p>
              <a class="mt-3 text-blue-800 inline-flex items-center">
                En savoir plus
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-800 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
                indxgo juice poutine.
              </p>
              <a class="mt-3 text-blue-800 inline-flex items-center">
                En savoir plus
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NormalFeatures;