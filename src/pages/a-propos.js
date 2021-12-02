import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import AnimationRevealPage from '../components/AnimationRevealPage';

export default function About() {
  return (
    <Layout>
      <Seo
        title="Agence digitale"
        description="Agence digitale situé en à Asnières-sur-Seine en Île de France, Otos Lab vous propose un ensemble de solutions digitales afin de développer votre projet."
      />
      <AnimationRevealPage>
        <section className="text-gray-600 body-font mt-8">
          <div className="container px-5 py-20 mx-auto flex flex-wrap">
            <div className="mb-2 md:w-3/5 ">
              <StaticImage
                src="../images/undraw_businessman_97x4.svg"
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                placeholder="tracedSVG"
                alt="L'agence digitale Otos Lab"
                className="object-contain object-cover w-full h-full rounded shadow-lg lg:rounded-none lg:shadow-none md:h-full lg:h-full"
              />
            </div>
            <div className="md:w-2/5 md:pl-2">
              <h1 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
                L'agence web Otos Lab
              </h1>
              <p className="text-base">
                Créée en 2018, l'entreprise individuelle Otos Lab développe son activité à
                Asnières-sur-Seine en Île-de-France sous la direction de Nizar M'rad et en
                collaboration avec des partenaires passionnés, de confiance permettant d'apporter
                les compétences nécessaires à l'aboutissement et la réussite de vos projets.
                <br />
                <br /> Aujourd'hui l'entreprise met à votre disposition son réseau et l'ampleur de
                son savoir faire pour fournir un travail de qualité qui s'adaptera à votre budget !
                Design, Data science, Machine Learning, SEO, application web et mobile, CMS,
                stratégie web marketing, stratégie d'entreprise, sont autant de compétences que
                l'entreprise peut mettre à votre disposition.
                <br />
                <br />
                Otos Lab a pour but d'aider les TPE et PME dans :
                <br />
                <br /> - l’acquisition de nouveaux clients ;
                <br />
                <br /> - le développement de leurs activités via leur image digitale ;
                <br />
                <br /> - l'accroissement de leur visibilité ;
                <br />
                <br />
                - l'augmentation de leur chiffre d’affaires ;
                <br />
                <br /> Notre crédo, vous l'aurez compris : la création de valeurs par le biais du
                digital.
              </p>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container px-5  mx-auto flex flex-wrap-reverse">
            <div className="md:w-3/5 md:pr-6">
              <h2 className="mt-5 mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
                Travailler en décentralisé
              </h2>
              <p className="leading-relaxed text-base">
                Otos.lab a pour vision et fonctionnement de travailler essentiellement de manière
                décentralisée. <br /> <br /> L'idée est simple, il nous suffit d'une connexion
                internet et d'un logiciel de type : "microsoft teams", "slack", "discord",
                "facebook", "team viewer", etc. pour prendre contact et échanger. Ainsi, nous nous
                adapons à votre moyen de communication privilégié. Notre but étant d'économiser
                votre temps et d'éventuels frais de déplacements tout en vous apportant la rapidité
                et la disponibilité pour l'aboutissement de votre projet.
                <br />
                <br />
                Évidemment si cela vous est nécessaire, c'est avec plaisir que nous vous
                rencontrerons !
              </p>
            </div>
            <div className="mb-2 md:w-2/5 w-full h-full max-w-xl">
              <StaticImage
                src="../images/undraw_content_team_3epn.svg"
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                placeholder="tracedSVG"
                alt="Avec l'agence Otos Lab ou que vous soyez dans le monde nous privilégions le travail en décentralisé"
                className="object-center object-cover w-full h-full rounded shadow-lg lg:rounded-none lg:shadow-none md:h-full lg:h-full"
              />
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-5 mx-auto flex flex-wrap">
            <div className="mb-2 md:w-2/5 w-full h-full max-w-xl">
              <StaticImage
                src="../images/undraw_All_the_data_re_hh4w.svg"
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                placeholder="tracedSVG"
                alt="Chez Otos Lab nous sommes accès sur la culture du résultat"
                className="object-center object-cover w-full h-full rounded shadow-lg lg:rounded-none lg:shadow-none md:h-full lg:h-full"
              />
            </div>
            <div className="md:w-3/5 md:pl-6">
              <h2 className="mt-5 mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
                Nos valeurs
              </h2>
              <p className="leading-relaxed text-base">
                Chez Otos Lab nous sommes portés sur la culture du résultat et nous travaillons en
                étroite collaboration avec nos clients et nos partenaires pour trouver les solutions
                les plus adaptées pour leurs stratégies digitales.
                <br />
                <br /> Nos valeurs issues de nos parcours professionnels et personnels nous mènent
                vers une volonté de digitaliser la société en permettant au plus grand nombre
                d'entreprises d'accroître leur accessibilité dans ce monde connecté. Chacun pouvant
                devenir les acteurs d'une société en quête de performances et d'innovations.
              </p>
            </div>
          </div>
        </section>
      </AnimationRevealPage>
    </Layout>
  );
}
