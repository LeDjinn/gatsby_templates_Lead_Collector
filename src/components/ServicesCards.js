import React from 'react';
import { Link } from 'gatsby';
import ServicesHero from './HeroService';
import Layout from './Layout';
import Seo from './Seo';
import { StaticImage } from 'gatsby-plugin-image';

export default function ServicesCards() {
  return (
    <>
      <h2 className="text-center text-purple-600 font-extrabold text-4xl xs:text-5xl md:text-6xl mt-20 pl-8 pr-8">
        Du sur-mesure digital pour que vos idées prennent vie:
      </h2>
      <div className="md:flex md:justify-center md:space-x-8 md:px-14">
        <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div className="w-sm">
            <StaticImage
              src="../images/undraw_blogging_vpvv.svg"
              width={256}
              placeholder="tracedSVG"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Création de site vitrine responsive élégant et ludique"
            />
            <div className="mt-4 text-purple-700 text-center">
              <h2 className="text-xl font-bold">Site vitrine</h2>
              <p className="mt-4 text-gray-600 line-clamp-3">
                Un site vitrine est un site internet faisant la promotion d’un produit, d’un service
                ou d’une marque.
              </p>

              <Link to="/services/site-vitrine">
                <button className="mt-8 mb-2 py-2 px-14 rounded-full bg-purple-700 text-white tracking-widest hover:bg-yellow-400 transition duration-200">
                  PLUS
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 py-4 px-4 w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div className="w-sm">
            <StaticImage
              src="../images/undraw_Mobile_application_mr4r.svg"
              width={256}
              placeholder="tracedSVG"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Création d'application mobile moderne et adapter à vos besoins"
            />
            <div className="mt-10 text-purple-700 text-center">
              <h2 className="text-xl font-bold">Application web</h2>
              <p className="mt-4 text-gray-600 line-clamp-3">
                Développer une application mobile est un excellent atout pour une entreprise qui
                souhaite renforcer le rayonnement de sa marque et de se différencier de la
                concurrence.
              </p>
              <Link to="/services/application-web">
                <button
                  aria-label="Plus"
                  className="mt-8 mb-2 py-2 px-14 rounded-full bg-purple-700 text-white tracking-widest hover:bg-yellow-400 transition duration-200"
                >
                  PLUS
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div className="w-sm">
            <StaticImage
              src="../images/undraw_add_to_cart_vkjp.svg"
              width={256}
              placeholder="tracedSVG"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Otos Lab - E-commerce un vecteur de croissance"
            />
            <div className="mt-4 text-purple-700 text-center">
              <h2 className="text-xl font-bold">E-commerce</h2>
              <p className="mt-4 text-gray-600 line-clamp-3">
                Notre monde change notre mode de fonctionnement n'a de cesse d'évoluer. Les
                boutiques en lignes pourront charmer de nouveaux clients, qui pourront se balader
                sur votre site, se référer ou donner un avis, vous posez des questions.
              </p>
              <Link to="/services/e-commerce">
                <button
                  aria-label="Plus"
                  className="mt-8 mb-2 py-2 px-14 rounded-full bg-purple-700 text-white tracking-widest hover:bg-yellow-400 transition duration-200"
                >
                  PLUS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-center md:space-x-8 md:px-14 mb-10">
        <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div className="w-sm">
            <StaticImage
              src="../images/undraw_portfolio_website_lidw.svg"
              width={256}
              placeholder="tracedSVG"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Otos Lab - L'ensemble de vos oeuvres en un clique"
            />
            <div className="mt-10 text-purple-700 text-center">
              <h2 className="text-xl font-bold">Portfolio</h2>
              <p className="mt-4 text-gray-600 line-clamp-3">
                Créateurs de mode, photographe dessinateur, musicien etc… Vous voulez un espace où
                vos travaux sont réunis et mis en valeur ? Nous vous proposons de créer un portfolio
                qui a de la classe , qui vous ressemble, pour vous permettre de partager votre
                univers avec le public.
              </p>
              <Link to="/services/portfolio">
                <button
                  aria-label="Plus"
                  className="mt-8 mb-2 py-2 px-14 rounded-full bg-purple-700 text-white tracking-widest hover:bg-yellow-400 transition duration-'auto'"
                >
                  PLUS
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div className="w-sm">
            <StaticImage
              src="../images/undraw_fashion_blogging_w9ol.svg"
              width={256}
              placeholder="tracedSVG"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Blog Otos Lab partagez vos passions"
            />
            <div className="mt-10 text-purple-700 text-center">
              <h2 className="text-xl font-bold">Blog</h2>
              <p className="mt-4 text-gray-600 line-clamp-3">
                Vous êtes un média, un artiste, un passionné ou vous voulez réunir des gens qui
                partagent les mêmes intérêts que vous ? Le blog est la réponse adéquate pour vous.
              </p>
              <Link to="/services/blog">
                <button
                  aria-label="Plus"
                  className="mt-8 mb-2 py-2 px-14 rounded-full bg-purple-700 text-white tracking-widest hover:bg-yellow-400 transition duration-'auto'"
                >
                  PLUS
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div className="w-sm">
            <StaticImage
              src="../images/undraw_Data_re_80ws.svg"
              width={256}
              placeholder="tracedSVG"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Otos Lab - Machine Learning votre consultant pour les choix à prendre"
            />
            <div className="mt-4 text-purple-700 text-center">
              <h2 className="text-xl font-bold">Machine Learning</h2>
              <p className="mt-4 text-gray-600 line-clamp-3">
                La gestion de la relation client (GRC), ou gestion des relations avec la clientèle,
                en anglais customer relationship management (CRM), est l'ensemble des outils et
                techniques destinés à capter, traiter, analyser les envies et les attentes relatives
                aux clients et aux prospects, dans le but de les fidéliser et de les satisfaire en
                leur offrant ou proposant des services.
              </p>
              <Link to="/services/machine-learning">
                <button
                  aria-label="Plus"
                  className="mt-8 mb-2 py-2 px-14 rounded-full bg-purple-700 text-white tracking-widest hover:bg-yellow-400 transition duration-200"
                >
                  PLUS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
