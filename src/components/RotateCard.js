import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function Card() {
  const [isRotated, setIsRotated] = useState(false);

  const onRotate = () => setIsRotated(rotated => !rotated);
  return (
    <div className={`card ${isRotated ? 'rotated' : ''}`} onClick={onRotate}>
      <div className="front">
        <div className="mt-16 py-4 px-4 bg-whit w-72 h-80 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0 flex justify-center align-center">
          <div className="w-sm">
            <StaticImage
              src="../images/undraw_building_websites_i78t.svg"
              width={200}
              placeholder="tracedSVG"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="A Gatsby astronaut"
              className="object-cover object-center mt-10"
            />
            <div className="mt-4 text-purple-600 text-center">
              <h1 className="text-xl text-black font-bold">Site Web</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="back">
        <div className="mt-16 py-4 px-4 bg-whit w-72 h-80 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0 flex justify-center align-center">
          <div className="w-sm">
            <StaticImage
              src="../images/undraw_Mobile_application_mr4r.svg"
              width={100}
              placeholder="tracedSVG"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="A Gatsby astronaut"
              className="object-cover object-center mt-10"
            />
            <StaticImage
              src="../images/undraw_Mobile_application_mr4r.svg"
              width={100}
              placeholder="tracedSVG"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="A Gatsby astronaut"
              className="object-cover object-center mt-10"
            />
            <div className="mt-4 text-purple-600 text-center">
              <StaticImage
                src="../images/undraw_Mobile_application_mr4r.svg"
                width={100}
                placeholder="tracedSVG"
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="A Gatsby astronaut"
                className="object-cover object-center mt-10"
              />
              <StaticImage
              src="../images/undraw_Mobile_application_mr4r.svg"
              width={100}
              placeholder="tracedSVG"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="A Gatsby astronaut"
              className="object-cover object-center mt-10"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
