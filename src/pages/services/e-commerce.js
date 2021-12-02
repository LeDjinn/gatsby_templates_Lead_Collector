import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../../components/Seo';
import Layout from '../../components/Layout';
import HeroServices from '../../components/HeroService';
import AnimationRevealPage from '../../components/AnimationRevealPage';

export default function Ecommerce() {
  return (
    <Layout>
      <Seo
        title="Création site E-commerce"
        description="Vendez vos services et produits en ligne et développez vos parts de marché"
      />
      <AnimationRevealPage>
        <HeroServices />
        <section className="md:p-10 m-10 h-full flex flex-wrap  md:flex-row  sm:flex-col">
          <div className="md:flex md:items-center flex-row text-center text-xl font-bold">
            <div className="h-52 w-52 relative cursor-pointer mb-8 ml-10">
              <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
              <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
                <div className="h-full w-full bg-white rounded-lg shadow-2xl text-center text-xl font-bold">
                  <StaticImage
                    src="../../images/eshop.webp"
                    quality={95}
                    placeholder="blurred"
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="E-commerce, votre atout pour développer votre chiffre d'affaires"
                    className="object-cover object-center h-52 w-52 rounded-lg shadow-2xl"
                  />
                  E-commerce
                </div>
              </div>
            </div>
            <StaticImage
              src="../../images/undraw_add_to_cart_vkjp.svg"
              width={400}
              placeholder="tracedSVG"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Otos Lab - E-commerce un vecteur de croissance"
              className="object-cover object-center  rounded-lg shadow-2xl ml-10"
            />
          </div>
          <div className="mt-14 sm:flex-col text-bol text-xl md:px-8">
            <h1 className="font-bold text-purple-800 text-cetner md:text-left">
              Création de site E-commerce - Agence web Otos Lab
            </h1>
            <br />
            Notre monde change et notre mode de fonctionnement n'a de cesse d'évoluer… Les boutiques
            en ligne servent à séduire de nouveaux clients qui se baladant sur votre site, vous
            posent des questions, se réfèrent ou bien donnent leur avis. Ce sont autant
            d'interactions qui pourront vous aider à développer votre activité, si elles sont bien
            mises en œuvre. Une boutique en ligne est bien plus qu’un stand de vente, c’est un
            espace d’échange avant tout. Créons ensemble votre espace de vente de la meilleure
            façon.
            <br />
            <br />
            La conception et les fonctionnalités de votre site Web E-commerce ont un impact direct
            sur la conversion des prospects en clients potentiels et ainsi affecter positivement ou
            négativement vos résultats. Un site de commerce électronique comporte plusieurs couches
            de fonctionnalités qui ne se trouvent pas sur les sites Web standard, notamment un
            serveur Web pour héberger une vitrine, le traitement des paiements, une base de données
            d'inventaire et un système d'expédition technique utilisé pour envoyer des produits.
            <br />
            <br />
            Otos-lab conçoit des sites de commerce électronique de qualité supérieure en respectant
            les attentes de vos clients, leurs besoins. Nous travaillons en partenariat avec vous
            pour développer un site Web de E-commerce performant vous permettant de générer des
            ventes rapidement, facilement et efficacement. Nous vous aidons à concevoir votre
            plateforme de vente, mais aussi des tunnels de conversions adaptés aux habitudes des
            consommateurs. Le site E-commerce est une façon essentielle d'accroître votre chiffre
            d'affaire. Il ouvre des portes aux consommateurs qui étaient hors de votre sphère
            géographique ou marketing. Les habitudes des consommateurs changent alors suivez vos
            clients et soyez présents là où ils vous attendent.
            <br />
            <br />
            <span className="font-bold text-purple-700">Les points importants</span>
            <br />
            <br />
            <h2 className="font-bold">Les paiements en ligne</h2>
            Chaque client qui souhaite obtenir un bien via votre application mais n'obtient pas
            d'option de paiement favorable quittera complètement l'application. Par conséquent, les
            utilisateurs devraient avoir plusieurs options de paiement. Le paiement est un facteur
            sur lequel la plupart des utilisateurs sont sceptiques car il implique des données
            personnelles et des coordonnées bancaires. Ils ne feront confiance qu'à la méthode
            qu'ils ont suivie partout ailleurs. C'est la raison numéro 1 qui fait des paiements les
            tendances les plus chaudes du e-commerce en 2020. Certaines options de paiement sont les
            paiements par "net banking", par carte de crédit et par carte de débit.
            <br />
            <br />
            <h2 className="font-bold">Les réseaux sociaux</h2>
            Les réseaux sociaux sont l'outil le plus puissant et le plus important du monde de la
            technologie. L'intégration des médias sociaux dans votre application aidera les
            utilisateurs à se connecter, à s'inscrire et à partager les détails des produits. C'est
            une autre grande fonctionnalité de commerce électronique mobile. Mais les avantages de
            l'intégration des médias sociaux ne se limitent pas à cela. Les utilisateurs peuvent
            partager divers codes de réductions ou campagnes promotionnelles sur leurs réseaux
            sociaux. Ils peuvent également publier toutes les réalisations déverrouillées sur
            l'application. Cela créera une notoriété pour votre marque et vous aidera à générer plus
            de ventes.
            <br />
            <br />
            <h2 className="font-bold">L'experience utilisateur</h2>
            Il y a énormément d'applications étonnantes sur le marché, c'est pourquoi aucun
            utilisateur n'y réfléchira à deux fois avant de quitter la vôtre si elle ne les
            satisfait pas. Vous ne pouvez qu'imaginer à quel point UI/UX est important pour votre
            application et le maintient des utilisateurs. Lorsque les clients potentiels utilisent
            votre application, ils doivent trouver l'expérience utilisateur unique et meilleure que
            le reste des applications disponibles pour un service équivalent. Fondamentalement,
            toute personne qui consacre son temps et son argent à votre application devrait trouver
            que celle-ci en vaut la peine.
            <br />
            <br />
            Les applications de E-commerce deviennent de plus en plus un choix de style de vie. Les
            gens trouvent qu'il est de plus en plus facile de réaliser leurs achats en ligne que de
            se déplacer physiquement dans des magasins en Centre commercial ou même en ville. De
            même que les clients s'y rendant sont, eux aussi, utilisateurs d'applications mobiles pour
            les avis et la comparaison des prix. Alors dire que les applications e-commerce sont
            partout, est une réalité, une vérité partagée par toutes et tous.
          </div>
        </section>
      </AnimationRevealPage>
    </Layout>
  );
}
