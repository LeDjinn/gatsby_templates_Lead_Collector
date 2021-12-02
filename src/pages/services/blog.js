import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../../components/Seo';
import Layout from '../../components/Layout';
import HeroServices from '../../components/HeroService';

export default function Blog() {
  return (
    <Layout>
      <Seo
        title="Création de Blog totalement orienté SEO"
        description="Un site web où vous pouvez poster vos articles avec une interface adaptée à vos besoins."
      />
      <HeroServices />
      <section className="md:p-10 m-10 h-full flex  md:flex-row  flex-wrap sm:flex-col">
        <div className="md:flex md:items-center flex-row text-center text-xl font-bold">
          <div className="h-52 w-52 relative cursor-pointer mb-8 ml-5">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div className="absolute inset-0 transform  hover:-rotate-45 transition duration-300">
              <div className="h-full w-full bg-white rounded-lg shadow-2xl text-center text-xl font-bold">
                <StaticImage
                  src="../../images/blog.webp"
                  placeholder="blurred"
                  quality={95}
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="Publiez des articles optimisés SEO"
                  className="object-cover object-center h-52 w-52 rounded-lg shadow-2xl"
                />
                Blog
              </div>
            </div>
          </div>
          <StaticImage
            src="../../images/undraw_fashion_blogging_w9ol.svg"
            width={400}
            placeholder="tracedSVG"
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="Blog Otos Lab partagez vos passions"
            className="object-cover object-center  rounded-lg shadow-2xl md:ml-10"
          />
        </div>
        <p className="mt-10 sm:flex-col text-bol text-xl md:px-8">
          <h1 className="font-bold text-purple-800 text-center md:text-left">Création de blog - Agence web Otos Lab</h1>
          <br />
          Vous êtes un média, un artiste, un passionné ou vous voulez réunir des gens qui partagent
          les mêmes intérêts que vous ? Le blog est la réponse adéquate pour vous. Vous pouvez créer
          du contenu, partager votre expertise ou vos travaux pour créer une communauté qui partage
          les mêmes centres d'intérêts. Vous pouvez suivre les interactions de votre communauté en
          direct et interagir avec elle. C’est un outil parfait pour développer et faire connaître
          vos idées. Contrairement aux réseaux sociaux vous êtes le maître à bord.
        </p>
      </section>
    </Layout>
  );
}
