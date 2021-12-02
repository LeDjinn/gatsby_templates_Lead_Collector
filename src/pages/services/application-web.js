import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../../components/Seo';
import Layout from '../../components/Layout';
import HeroServices from '../../components/HeroService';
import AnimationRevealPage from '../../components/AnimationRevealPage';

export default function Blog() {
  return (
    <Layout>
      <Seo
        title={`Création d'applicatlion mobile`}
        description="Créez vos applications mobiles et donnez à vos activités une nouvelle dimension"
      />
      <AnimationRevealPage>
        <HeroServices />
        <section className="md:p-10 m-10 h-full flex  md:flex-row  flex-wrap sm:flex-col">
          <div className="md:flex md:items-center flex-row text-center text-xl font-bold">
            <div className="h-52 w-52 relative cursor-pointer mb-8 ml-5">
              <div className="absolute inset-0 bg-white rounded-lg shadow-2xl"></div>
              <div className="absolute inset-0 transform hover:rotate-90 hover:scale-75  transition duration-300">
                <div className="h-full w-full bg-white rounded-lg shadow-2xl text-center text-xl font-bold">
                  <StaticImage
                    src="../../images/appWWeb2.webp"
                    placeholder="blurred"
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Application mobile hybride avec React Native - Otos Lab"
                    className="object-cover object-center h-52 w-52 rounded bg-white"
                  />
                  Application Web
                </div>
              </div>
            </div>

            <StaticImage
              src="../../images/undraw_Mobile_application_mr4r.svg"
              width={400}
              placeholder="tracedSVG"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Création d'application mobile moderne et adapter à vos besoins"
              className="object-cover object-center  rounded-lg shadow-2xl md:ml-10"
            />
          </div>
          <div className="mt-10 sm:flex-col text-base text-xl md:px-8">
            <h1 className="font-bold text-purple-800 text-center md:text-left">
              Création d'application web - Agence web Otos Lab
            </h1>
            <br />
            L'application mobile est un atout majeur pour une entreprise qui souhaite valoriser son
            image de marque et se démarquer de la concurrence. Les entreprises leaders dans leur
            domaine ont pour la plupart un site dit responsive, c'est-à-dire qui s'adapte à toute
            taille d'écran : mobile, tablette, ordinateur. Ainsi, la nécessité d'avoir une
            application mobile connait une forte croissance et votre marque connaîtra une
            transformation numérique en faisant partie de l'activité quotidienne de vos clients.
            <br />
            <br />
            La taille de votre société n'a plus d'importance quand il s'agit du digital, on ne parle
            plus d'avantage, mais bien d'une nécessité. La nouvelle tendance qui vous permet de
            booster vos ventes, garder le lien et fidéliser vos clients est indéniablement une
            application mobile. Avec elle vous pourrez proposer vos services et prestations
            directement via le smartphone de vos clients. Ces derniers auront accès à vos dernières
            offres instantanément, bénéficieront d’offres personnalisées, de promotions et pourront
            acquérir immédiatement les produits/services que vous proposez : une arme indétrônable
            de cette guerre commerciale reste le temps. D’autres possibilités sont offertes par les
            applications mobiles pour répondre à des besoins métiers afin d’optimiser vos flux
            d’informations, la saisie de données en situation d’itinérance, de faciliter les
            communications entre vos collaborateurs. Franchissez le pas pour donner une autre
            dimension à votre projet : nous sommes là pour vous accompagner !
            <br />
            <br />
            <h2 className="font-bold text-purple-700">Pourquoi créer une application mobile ?</h2>
            <br />
            Une application mobile présente d’innombrables et incontestables avantages. Elle permet
            d’intégrer les nombreuses fonctionnalités de vos smartphones. Vous aurez la capacité
            d'utiliser ces fonctionnalités selon vos attentes pour le développement de votre
            application mobile. Les fonctionnalités telles que l’appareil photo, la géolocalisation,
            les notifications push et tout autre outil peuvent s’avérer utiles pour optimiser votre
            offre de service ou en créer de nouvelles.
            <br />
            <br />
            Située en Île-de-France notre agence web conçoit des solutions évolutives dans le temps
            et adaptables à vos besoins. Les applications mobiles que nous développons peuvent être
            déployées sur les systèmes d’exploitation Android et iOS et répondent aux critères des
            différents modèles de téléphones mobiles et tablettes.
            <br />
            <br />
            <h2 className="font-bold text-purple-700">
              Quelles sont les enjeux auxquels il faut répondre lors du développement d’une
              application mobile ?
            </h2>{' '}
            <br />
            La création d’une application mobile nécessite une prévision claire de votre objectif. À
            titre d'exemple voilà quelques détails utiles.
            <br />
            <br />
            <span className="font-semibold">Les choix technologiques</span> <br /> Chaque type
            d’application à ses particularités propres que vous devez connaitre pour vous guider
            dans vos choix : voulez-vous une application native, c’est-à-dire développée pour se
            conformer entièrement aux exigences et aux directives d’un système d’exploitation
            particulier ? Dans ce cas de figure les applications sont construites séparément pour
            chaque plateforme d’exploitation. Ou préfériez-vous une application hybride codée dans
            un langage commun et déployable sur les deux systèmes d'exploitation Android et iOS.
            <br />
            <br />
            <span className="font-semibold">Les étapes préalables</span>
            <br /> Pour que l'application réponde aux objectifs, voici les démarches de sa création
            à prendre en compte. Il convient au préalable de réaliser une réflexion pour définir les
            objectifs : est-ce une application à usage interne (propre au fonctionnement interne de
            l'entreprise à destination des salariés) ou à usage externe (pour la conquête et la
            fidélisation de la clientèle) Quelle problématique résout-elle ? Peut-elle optimiser
            votre image de marque ?
            <br />
            <br />
            <span className="font-semibold">Le succès d’une application mobile</span> réussie passe
            par son ergonomie : elle doit être divertissante, avec un graphique simple, élégant et
            ludique, avec des règles de navigation spécifiques à chaque tablette ou smartphone.
            <br />
            <br />
            <span className="font-semibold">Le système d’exploitation</span> : Chaque marque de
            tablette et de smartphone tourne sous un OS spécifique, Android pour Google, iOS pour
            Apple.
            <br />
            <br />
            <h2 className="font-bold text-purple-700">
              À quels objectifs répond la création d'application mobile ?
            </h2>
            <br />
            La création d’une application mobile répond à une quête d’innovation. Pour ce faire,
            nous vous proposons de vous accompagner et de vous guidez en vous expliquant les bases.
            Nous vous aiderons dans un premier temps à faire émerger les objectifs qui peuvent être
            à l’origine de cette démarche d’innovation. Une application mobile peut aussi être
            considérée comme une solution qui s’inscrit dans une continuité et ainsi venir compléter
            un site web ou encore un logiciel. Elle constitue également le meilleur outil de
            communication pour répondre à vos besoins d'expansion.
            <br />
            <br />
            <h2 className="font-bold text-purple-700">
              À quelles attentes peuvent répondre votre futur application mobile ?
            </h2>
            <br />
            Chaque projet a des particularités qui lui sont propres. Les attentes sont uniques.
            Votre application mobile sera donc conçue exclusivement pour vous, répondant à vos
            besoins et vos attentes. Notre priorité est de bien analyser vos contraintes et vos
            attentes, dans le but de trouver et d’apporter la solution la plus appropriée. Nous vous
            suivrons pas à pas tout au long de votre projet de développement d’application mobile.
            De la phase de conception du projet jusqu’à sa mise en production, Otos Lab assure un
            suivi de proximité à travers un emploi du temps fixé. Sur chaque phase importante de
            votre projet, vous pouvez compter sur les échanges entre nos équipes et les vôtres. Prêt
            pour commencer votre projet ? N’hésitez pas à nous contacter pour une demande de devis
            gratuit !
          </div>
        </section>
      </AnimationRevealPage>
    </Layout>
  );
}
