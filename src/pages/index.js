import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Parallax3 from '../components/Parallax3';
import HeroHome from '../components/HeroHome';
import OurSkills from '../components/OurSkills';
import TypeWriter from '../components/TypedText';
import AnimationRevealPage from '../components/AnimationRevealPage';

const msgs = [
  'Vous voulez un site internet ?',
  'Vous voulez une application mobile ?',
  'Vous voulez digitaliser votre entreprise ?',
  'Vous voulez du dynamisme ?',
  'Vous voulez du professionnalisme ?',
  `Vous avez des questions ?`,
  `Vous avez besoin de conseils ?`,
  'Vous avez tapé à la bonne adresse !',
  'Votre projet nous intéresse !',
];

const IndexPage = () => (
  <Layout>
    <Seo
      title="Accueil - Développement web et mobile en France"
      keywords={
        ('Site web France',
        'Application mobile France',
        'Spécialiste de Machine Learning en France',
        'Otos Lab agence web',
        "Otos Lab créateur d'applications webs et mobiles")
      }
      description="Située en Île-de-France l'agence web Otos lab vous propose : Site web responsive, application mobile, machine learning, SEO."
    />
    <AnimationRevealPage>
      <HeroHome />
      <OurSkills />

      <section className="">
        <h2 className="flex items-center justify-center text-purple-600 font-extrabold text-4xl xs:text-5xl md:text-6xl mt-20">
          Ou encore :
        </h2>
        <div className="transition-all duration-500 bg-gradient-to-t to-purple via-black from-red-500 bg-size-200 bg-pos-0 hover:bg-pos-100 container flex items-center justify-center h-80 m-auto mb-12 bg-fixed bg-center bg-cover mt-20">
          <div className="flex-1 text-gray-50 text-left overflow-hidden invisible md:visible">
            Rebellious subjects, enemies to peace, Profaners of this neighbour-stained steel,-- Will
            they not hear? What, ho! you men, you beasts, That quench the fire of your pernicious
            rage With purple fountains issuing from your veins, On pain of torture, from those
            bloody hands Throw your mistemper'd weapons to the ground, And hear the sentence of your
            moved prince. Three civil brawls, bred of an airy word, By thee, old Capulet, and
            Montague, Have thrice disturb'd the quiet of our streets, And made Verona's ancient
            citizens Cast by their grave beseeming ornaments, To wield old partisans, in hands as
            old, Canker'd with peace, to part your canker'd hate: If ever you disturb our streets
            again, Your lives shall pay the forfeit of the peace. For this time, all the rest depart
            away: You Capulet; shall go along with me: And, Montague, come you this afternoon, To
            know our further pleasure in this case, To old Free-town, our common judgment-place.
            Once more, on pain of death, all men depart.
          </div>

          <div className="flex-1 text-gray-50 text-center">
            <h2 className="text-3xl ">Rédaction de contenu</h2>
            <h3 className="text-2xl">spécifique et attractif pour votre besoin</h3>
          </div>
          <div className="flex-1 text-gray-50 text-right invisible md:visible">
            It was many and many a year ago, In a kingdom by the sea, That a maiden there lived whom
            you may know By the name of Annabel Lee; And this maiden she lived with no other thought
            Than to love and be loved by me. I was a child and she was a child, In this kingdom by
            the sea, But we loved with a love that was more than love— I and my Annabel Lee— With a
            love that the wingèd seraphs of Heaven Coveted her and me. And this was the reason that,
            long ago, In this kingdom by the sea, A wind blew out of a cloud, chilling My beautiful
            Annabel Lee; So that her highborn kinsmen came And bore her away from me, To shut her up
            in a sepulchre In this kingdom by the sea. The angels, not half so happy in Heaven, Went
            envying her and me— Yes!—that was the reason (as all men know, In this kingdom by the
            sea) That the wind came out of the cloud by night, Chilling and killing my Annabel Lee.
            But our love it was stronger by far than the love Of those who were older than we— Of
            many far wiser than we— And neither the angels in Heaven above Nor the demons down under
            the sea Can ever dissever my soul from the soul Of the beautiful Annabel Lee; For the
            moon never beams, without bringing me dreams Of the beautiful Annabel Lee; And the stars
            never rise, but I feel the bright eyes Of the beautiful Annabel Lee; And so, all the
            night-tide, I lie down by the side Of my darling—my darling—my life and my bride, In her
            sepulchre there by the sea— In her tomb by the sounding sea.
          </div>
        </div>
      </section>

      <Parallax3 />

      <h2 className="flex items-center justify-center text-purple-600 font-extrabold text-4xl xs:text-5xl md:text-6xl mt-20 ">
        Et sans oublier une :
      </h2>

      <section className="container flex items-center justify-center h-80 m-auto mb-12 bg-fixed bg-center bg-cover custom-img mt-20">
        <div className="p-5 text-2xl text-gray-50 bg-purple-600 ">
          Une conception graphique unique
        </div>
      </section>

      <h2 className="text-center text-purple-600 font-extrabold text-4xl xs:text-5xl md:text-6xl mt-20 pl-8 pr-8">
        Du sur-mesure digital pour que vos idées prennent vie:
      </h2>

      <section className="md:flex md:justify-center md:space-x-8 md:px-14 md:mt-8">
        <Link to="/services/e-commerce">
          <div className="mt-32 mb-8 py-4 px-4 bg-whit w-52 h-52 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div className="h-full w-full bg-white rounded-lg shadow-2xl text-center text-xl font-bold">
                <StaticImage
                  src="../images/eshop.webp"
                  quality={95}
                  placeholder="blurred"
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="A Gatsby astronaut"
                  className="object-cover object-center h-52 w-52 rounded-lg shadow-2xl mb-8"
                />
                E-commerce
              </div>
            </div>
          </div>
        </Link>
        <Link to="/services/application-web">
          <div className="mt-32 py-4 px-4 bg-whit w-52 h-52 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div className="absolute inset-0 transform origin-left hover:-translate-y-10 transition duration-300">
              <div className="h-full w-full bg-white rounded-lg shadow-2xl text-center text-xl font-bold">
                <StaticImage
                  src="../images/appWWeb2.webp"
                  quality={95}
                  placeholder="blurred"
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="A Gatsby astronaut"
                  className="object-cover object-center h-52 w-52 rounded mb-8"
                />
                Application Web
              </div>
            </div>
          </div>
        </Link>
        <Link to="/services/site-vitrine">
          <div className="mt-32 py-4 px-4 bg-whit w-52 h-52 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div className="h-full w-full bg-white rounded-lg shadow-2xl text-center text-xl font-bold">
                <StaticImage
                  src="../images/pexels-snapwire-412842.webp"
                  quality={95}
                  placeholder="blurred"
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="A Gatsby astronaut"
                  className="object-cover object-center h-52 w-52 rounded-lg shadow-2xl mb-8"
                />
                Site Vitrine
              </div>
            </div>
          </div>
        </Link>
      </section>
      <section className="md:flex md:justify-center md:space-x-8 md:px-14 mb-10">
        <Link to="/services/blog">
          <div className="mt-32 py-4 px-4 bg-whit w-52 h-52 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div className="absolute inset-0 transform hover:-translate-x-10 transition duration-300">
              <div className="h-full w-full bg-white rounded-lg shadow-2xl text-center text-xl font-bold">
                <StaticImage
                  src="../images/blog.webp"
                  quality={95}
                  placeholder="blurred"
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="A Gatsby astronaut"
                  className="object-cover object-center h-52 w-52 rounded-lg shadow-2xl mb-8"
                />
                Blog
              </div>
            </div>
          </div>
        </Link>
        <Link to="/services/portfolio">
          <div className="mt-32 py-4 px-4 bg-whit w-52 h-52 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div className="absolute inset-0 transform origin-left hover:translate-y-10 transition duration-300">
              <div className="h-full w-full bg-white rounded-lg shadow-2xl text-center text-xl font-bold">
                <StaticImage
                  src="../images/portfolio.webp"
                  quality={95}
                  placeholder="blurred"
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="A Gatsby astronaut"
                  className="object-cover object-center h-52 w-52 rounded-lg shadow-2xl mb-8"
                />
                Portfolio
              </div>
            </div>
          </div>
        </Link>

        <Link to="/services/machine-learning">
          <div className="mt-32 py-4 px-4  w-52 h-52 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div className="absolute inset-0 transform hover:translate-x-10 transition duration-300">
              <div className="h-full w-full bg-white rounded-lg shadow-2xl text-center text-xl font-bold">
                <StaticImage
                  src="../images/violetType2.webp"
                  quality={95}
                  placeholder="blurred"
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="A Gatsby astronaut"
                  className="object-cover object-center h-52 w-52 rounded-lg shadow-2xl mb-4"
                />
                Machine Learning
              </div>
            </div>
          </div>
        </Link>
      </section>

      <section>
        <div className="max-w-7xl px-6 py-16 mx-auto mt-14">
          <div className="px-8 py-12 bg-gray-800 rounded-md md:px-20 md:flex md:items-center md:justify-between">
            <div>
              <h2>
                <TypeWriter messages={msgs} />
              </h2>
            </div>

            <Link
              to="/nous-contacter"
              className="block px-8 py-2 mt-8 text-lg font-medium text-center text-gray-50 transition-colors duration-300 transform bg-purple-700 rounded md:mt-0 hover:bg-yellow-400"
            >
              Contactez nous
            </Link>
          </div>
        </div>
      </section>
    </AnimationRevealPage>
  </Layout>
);

export default IndexPage;
