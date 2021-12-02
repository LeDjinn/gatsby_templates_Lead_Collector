import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';





const IndexPage = () => (
  <>
    <section className="">
      <h2 className="mt-8 flex items-center justify-center text-purple-600 font-extrabold text-4xl xs:text-5xl md:text-6xl">
        Notre savoir faire :
      </h2>
      <div className="md:flex md:justify-center md:space-x-12 md:px-14">
        <div className="mt-16 py-4 px-4 bg-whit w-72 h-80 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0 flex justify-center align-center">
          <div className="w-sm">
            <StaticImage
              src="../images/undraw_building_websites_i78t.svg"
              width={200}
              placeholder="tracedSVG"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Site web moderne et responsive Otos Lab"
              className="object-cover object-center mt-10"
            />
            <div className="mt-5 text-purple-600 text-center">
              <span className="text-xl text-black font-bold">Site Web</span>
            </div>
          </div>
        </div>

        <div className="mt-16 py-4 px-4 bg-whit w-72 h-80 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0 flex justify-center align-center">
          <div className="w-sm">
            <StaticImage
              src="../images/undraw_Mobile_application_mr4r.svg"
              width={200}
              placeholder="tracedSVG"
              quality={75}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Otos Lab développeur d'application mobile"
              className="object-cover object-center mt-10"
            />
            <div className="mt-10 text-purple-600 text-center">
              <span className="text-xl text-black font-bold mt-5">Application Mobile</span>
            </div>
          </div>
        </div>

        <div className="mt-16 py-4 px-4 bg-whit w-72 h-80 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0 flex justify-center align-center">
          <div className="w-sm">
            <StaticImage
              src="../images/undraw_data_report_bi6l.svg"
              width={200}
              placeholder="tracedSVG"
              quality={75}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Grâce à Otos Lab passer à la vitesse supérieur avec le Machine Learning "
              className="object-cover object-center mt-10"
            />
            <div className="mt-4 text-purple-600 text-center">
              <span className="text-xl text-black font-bold">Machine Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default IndexPage;
