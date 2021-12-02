import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '../components/Seo';

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <section>
      <div class="min-w-screen min-h-screen bg-purple-700 flex items-center p-5 lg:p-20 overflow-hidden relative">
        <div class="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
          <div class="w-full ">
            <StaticImage
              src="../images/undraw_page_not_found_su7k.svg"
              quality={95}
              placeholder="tracedSVG"
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="A Gatsby astronaut"
              className="mt-36 object-cover object-center h-auto w-full md:w-1/2 mb-20"
            />

            <div class="mb-20 md:mb-0">
              <p class="text-sm md:text-base text-purple-700 p-2 mb-4">
                La page que vous recherchez n'existe pas...
              </p>
              <button aria-label="Retour à la page d'accueil"  class="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-yellow-500 hover:text-yellow-600">
                <Link
                  to="/"
                  class="bg-transparent hover:bg-yellow-400 text-purple-700 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-400 hover:border-transparent"
                >
                  Retour à la page d'accueil
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div class="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
        <div class="w-96 h-full bg-yellow-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
      </div>
    </section>
  </>
);

export default NotFoundPage;
