import React from 'react';

const SchoolFaqs = () => {
  return (
    <section className="mt-10 bg-coolGray-100 text-coolGray-800">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
              <span className="relative inline-block">
                <span className="relative text-blue-700">FAQ</span>
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              rem aperiam, eaque ipsa quae.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-blue-700 inline-flex"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-coolGray-300">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              J'arrive en cours d'année puis-je inscrire mon enfant? 
            </summary>
            <div className="px-4 pb-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni,
                quas animi enim veritatis deleniti ex. Impedit.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Sécurité pendant les activités extrascolaires
            </summary>
            <div className="px-4 pb-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos
                explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa
                accusantium vel maiores corrupti! Libero voluptate a doloribus?
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Mon enfant est allergique à certains produits.
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur
                dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis
                architecto.
              </p>
              <p>
                Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi
                cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};
export default SchoolFaqs;
