import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../../components/Seo';
import Layout from '../../components/Layout';
import HeroServices from '../../components/HeroService';
import AnimationRevealPage from '../../components/AnimationRevealPage';

export default function Portfolio() {
  return (
    <Layout>
      <Seo
        title="Création de porfolio, le miroir de vos créations"
        description="un excellent moyen de présenter votre art à travers le canal digital"
      />
      <AnimationRevealPage>
        <HeroServices />
        <section className="md:p-10 m-10 h-full flex  flex-wrap  sm:flex-col">
          <div className="md:flex md:items-center flex-row text-center text-xl font-bold">
            <div className="h-52 w-52 relative cursor-pointer mb-8 ml-5">
              <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
              <div className="absolute inset-0 transform origin-left hover:-translate-y-10 transition duration-300">
                <div className="h-full w-full bg-white rounded-lg shadow-2xl text-center text-xl font-bold">
                  <StaticImage
                    src="../../images/portfolio.webp"
                    quality={95}
                    placeholder="blurred"
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Partagez vos créations artistiques"
                    className="object-cover object-center h-52 w-52 rounded-lg shadow-2xl"
                  />
                  Portfolio
                </div>
              </div>
            </div>
            <StaticImage
              src="../../images/undraw_portfolio_website_lidw.svg"
              width={400}
              placeholder="tracedSVG"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Otos Lab - L'ensemble de vos oeuvres en un clique"
              className="object-cover object-center  rounded-lg shadow-2xl md:ml-10"
            />
          </div>
          <p className="mt-10 sm:flex-col text-bol text-xl md:px-8">
            <h1 className="font-bold text-purple-700 text-center md:text-left">
              Création de site Portfolio - Agence web Otos Lab
            </h1>
            <br />
            Créateur de mode, photographe, dessinateur, musicien... Vous voulez un espace où vos
            travaux sont réunis et mis en valeur ? Nous vous proposons de créer un portfolio qui a
            de la classe, qui vous ressemble, pour vous permettre de partager votre univers avec le
            public. Vous pourrez disposer de votre site internet pour exposer vos travaux
            graphiques, artistiques ou tout autre (statiques, machine learning, ingénierie etc.)
            Présentez-vous au monde de la meilleure des façons, celle qui vous correspond.
          </p>
        </section>
      </AnimationRevealPage>
    </Layout>
  );
}
