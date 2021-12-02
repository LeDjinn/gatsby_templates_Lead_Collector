import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../../components/Seo';
import Layout from '../../components/Layout';
import HeroServices from '../../components/HeroService';
import AnimationRevealPage from '../../components/AnimationRevealPage';

export default function Crm() {
  return (
    <Layout>
      <Seo
        title="Machine Learning l'outil indispensable"
        description="Transformez vos données acquises par vos expériences en prévision précise pour vous conforter dans vos choix futurs"
      />
      <AnimationRevealPage>
        <HeroServices />
        <section className="md:p-10 m-10 h-full flex flex-wrap  md:flex-row  sm:flex-col">
          <div className="md:flex md:items-center flex-row text-center text-xl font-bold">
            <div className="h-52 w-52 relative cursor-pointer mb-8 ml-5">
              <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
              <div className="absolute inset-0 transform hover:translate-x-10 transition duration-300">
                <div className="h-full w-full bg-white rounded-lg shadow-2xl text-center text-xl font-bold">
                  <StaticImage
                    src="../../images/violetType2.webp"
                    quality={95}
                    placeholder="blurred"
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="La puissance de calcul des machines modernes à votre disposition"
                    className="object-cover object-center h-52 w-52 rounded-lg shadow-2xl"
                  />
                  Machine Learning
                </div>
              </div>
            </div>
            <StaticImage
              src="../../images/undraw_Data_re_80ws.svg"
              width={400}
              placeholder="tracedSVG"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Otos Lab - Machine Learning votre consultant pour les choix à prendre"
              className="object-cover object-center rounded-lg shadow-2xl md:ml-10"
            />
          </div>
          <div className="mt-10 sm:flex-col text-base text-xl md:px-8">
            <h1 className="font-bold text-purple-800 text-center md:text-left">
              Machine Learning - Agence web Otos Lab
            </h1>
            <br />
            <h2 className="text-purple-700 font-semibold">Qu'est ce que le Machine Learning ?</h2>
            <br />
            Le Machine Learning est un outil qui permet d'effectuer différents algorithmes
            prédictifs en se basant sur des données. Les mathématiciens connaissent cet outil depuis
            des décennies et à présent les capacités de calcul des machines modernes génèrent un
            outil qui permet des prises de décisions plus efficaces.
            <br />
            <br /> Le Machine Learning libère ses capacités lorsque des insights (tendances) doivent
            être décelées à partir d'une multitude de données diverses et variées, appelées le Big
            Data.
            <br />
            <br /> Pour étudier de telles quantités de données, le Machine Learning se montre bien
            plus efficace en matière de rapidité et de précision que les autres processus d'analyses
            conventionnels. Par exemple en finance, l'arbitrage fait référence aux stratégies de
            trading automatisées qui sont à court terme et impliquent un grand nombre de titres.
            Dans ces stratégies, l'utilisateur se concentre sur la mise en œuvre de l'algorithme de
            négociation pour un ensemble de titres sur la base de quantités telles que les
            corrélations historiques et les variables économiques générales. Des méthodes de machine
            learning sont appliquées pour obtenir une stratégie d'arbitrage d'indices. Lorsqu'il
            s'agit d’analyse de données transactionnelles, de données issues de plateformes CRM ou
            bien des réseaux sociaux, là encore le Machine Learning se révèle être un atout majeur.
            <br />
            <br />
            Le Machine Learning est l'outil parfait pour l'analyse Big Data et les opportunités
            qu'il représente. Cette technologie va en effet permettre de mettre en exergue les
            données de valeur parmi d’immenses sources d’informations complexes, et ce, sans aide
            humaine. Totalement piloté par les données, le Machine Learning s'associe donc
            harmonieusement bien à la complexité du Big Data, dont il est inhérent. Là où les
            anciens outils analytiques ont un volume maximal de données pouvant être étudiées, le
            Machine Learning démontre au contraire sa capacité à supporter des charges importantes
            et en hausse constante, lui permettant d’évoluer et d’affiner des insights avec une
            minutie toujours optimisée. Vous l'aurez compris, plus les données sont nombreuses, plus
            les ordinateurs dotés de Machine Learning évoluent et peuvent déceler des patterns
            dissimulés dans ces données de manière plus optimisée que ne le ferait l’intelligence
            humaine. <br />
            <br />
            <h2 className="text-purple-700 font-semibold">
              L'utilisation des données au service de la création de valeur
            </h2>
            <br /> L’usage numérique des données porte une épatante promesse de création de valeur
            pour les entreprises. Elle instaure un prééminent levier de perfectionnement de la
            performance opérationnelle et permet de générer de nouvelles sources de revenus.
            <br />
            <br />
            Nous prévoyons que les futurs leaders seront les entreprises qui auront su anticiper la
            tendance et placer au cœur de leurs métiers l’exploitation des données via
            l'Intelligence Artificielle et le Machine Learning. Grâce à son expertise Otos Lab vous
            aidera à saisir et à implémenter cette opportunité.
          </div>
        </section>
      </AnimationRevealPage>
    </Layout>
  );
}
