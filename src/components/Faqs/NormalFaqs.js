import React from 'react';

const NormalFaqs = () => {
  return (
    <section className="bg-coolGray-100 text-coolGray-800">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <div class="text-center mb-12">
          <h1 class="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">FAQ</h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
            indxgo juice poutine, ramps microdosing banh mi pug.
          </p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-blue-800 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-coolGray-300">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Optio maiores eligendi molestiae totam dolores similique?
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
              Modi dolorem veritatis culpa quos consequuntur beatae itaque excepturi perspiciatis?
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
              Magni reprehenderit possimus debitis?
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
export default NormalFaqs;
