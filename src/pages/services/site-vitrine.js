import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../../components/Seo';
import Layout from '../../components/Layout';
import HeroServices from '../../components/HeroService';
import AnimationRevealPage from '../../components/AnimationRevealPage';

export default function Website() {
  return (
    <Layout>
      <Seo
        title="Créez votre site vitrine"
        description="Une solution ergonomique pour présenter votre activité dans la sphère internet et gagner en visibilité"
      />
      <AnimationRevealPage>
        <HeroServices />
        <section className="md:p-10 m-10 h-full flex   flex-wrap sm:flex-col">
          <div className="md:flex md:space-x-20 text-center text-xl font-bold">
            <div className="h-52 w-52 relative cursor-pointer mb-12 ml-5">
              <div className="absolute inset-0 transform  hover:-rotate-90 transition duration-300">
                <div className="h-full w-full bg-white rounded-lg shadow-2xl text-center text-xl font-bold">
                  <StaticImage
                    src="../../images/pexels-snapwire-412842.webp"
                    width={256}
                    height={256}
                    quality={95}
                    placeholder="blurred"
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Mettez en avant votre activité grâce à un site vitrine Otos Lab"
                    className="object-cover object-center rounded-lg shadow-2xl"
                  />
                  Site vitrine
                </div>
              </div>
            </div>
            <StaticImage
              src="../../images/undraw_blogging_vpvv.svg"
              width={400}
              placeholder="tracedSVG"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Création de site vitrine responsive élégant et ludique"
              className="object-cover object-center rounded-lg shadow-2xl md:ml-10"
            />
          </div>

          <div className="mt-10 sm:flex-col text-xl h-full md:px-8">
            <h1 className="font-semibold text-purple-800 text-center md:text-left">
              Création de site vitrine - Agence web Otos Lab{' '}
            </h1>
            <br />
            <h2 className="font-semibold text-purple-700">Qu’est-ce qu’un site vitrine ?</h2>
            <br />{' '}
            <p className="text-lg">
              Que vous soyez une entreprise, un artisan, une collectivité, le{' '}
              <span className="font-bold text-purple-700">site vitrine</span> consiste à mettre en
              avant les produits et services de votre activité afin de contribuer à développer votre
              présence en ligne et acquérir de nouveaux contacts et clients. Toute structure se doit
              aujourd'hui d'exposer son information professionnelle pour développer son image de
              marque et se rendre accessible au public visé par son activité. Ainsi le site vitrine
              augmente votre accessibilité au plus grand nombre et en cela se représente comme une
              "vitrine" de votre activité et non pas comme un site e-commerce permettant lui la
              commercialisation de celle-ci. Il décrit votre histoire, peut décliner vos produits,
              vos offres ainsi que vos réalisations car toute activité mérite sa vitrine et sa
              représentativité sur le Web. Otos Lab est là pour vous permettre d'exister sur
              internet et d'acquérir une plus grande reconnaissance de votre activité qu'elle soit
              commerciale, associative, artisanale, artistique... Notre objectif consiste à vous
              apporter la visibilité que vous recherchez et permettre à toutes et tous de vous
              découvrir en quelques clics.
            </p>
            <br />{' '}
            <h2 className="font-semibold text-purple-700"> Pourquoi créer un site vitrine ?</h2>{' '}
            <br />
            <p className="text-lg">
              {' '}
              Recruter de nouveaux clients sur internet est essentiel au devenir de votre structure.
              Ainsi le site vitrine vous permet de communiquer sur vos produits et services, de
              permettre la réalisation de devis, la prise de contacts auprès de prospects présents
              sur internet pour leurs propres besoins. En France 91% de la population utilise le web
              dans ses recherches et cela représente sur notre territoire à lui seul une clientèle
              potentielle de{' '}
              <a
                href="https://www.blogdumoderateur.com/chiffres-internet-reseaux-sociaux-france-2021/"
                className="italic text-purple-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                59,47 Millions d'internautes
              </a>
              . Il est donc primordial pour vous d'y être présent afin d'atteindre votre clientèle
              cible. Ce canal d'acquisition est un incontournable et vous permettra au-delà d'une
              représentation sur une zone géographique à laquelle vous pouviez être cantonné de
              rayonner à l'échelle Nationale. Aussi le travail sur le contenu et sur le
              réferencement est d'une grande exigence pour l'optimisation du trafic (visites) et
              propulser sur le podium des recherches Google votre activité en poussant les
              internautes à entrer sur votre page web plutôt que sur n'importe quelle autre. Notre
              agence Otos Lab garantie un accompagnement complet et vous permet d'exposer en
              quelques clics votre structure au plus grand des succès.
            </p>
            <br />
            <h2 className="font-semibold text-purple-700">Combien coûte un site vitrine ? </h2>
            <br />
            <p className="text-lg">
              Le prix de votre site vitrine dépend de plusieurs paramètres : le nombre de pages, les
              fonctionnalités demandées, la technologie utilisée et toutes prestations
              supplémentaires que vous voudriez y voir ajoutées. Nous proposons différentes
              technologies allant du WordPress au site conçu sur mesure. L'avantage d'un site conçu
              sur mesure réside dans la capacité d'adaptation que celui-ci apporte en permettant de
              mieux évoluer dans le temps. Aussi la possibilité de se muter en une autre
              application, d'avoir un design unique qui vous représente est un avantage considérable
              dans la course aux nouveaux prospects. La fourchette de prix commence à partir de 1500
              € et peut varier selon les paramètres que vous demandez, n'hésitez pas à nous
              contacter pour établir un devis gratuit et détailler ensemble l'offre la plus
              cohérente à la promotion de votre activité.
            </p>
          </div>
        </section>
      </AnimationRevealPage>
    </Layout>
  );
}
