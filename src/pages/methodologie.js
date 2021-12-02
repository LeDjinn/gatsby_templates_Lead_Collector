import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import AnimationRevealPage from '../components/AnimationRevealPage';

export default function Methodologie() {
  const newStyle = {
    left: '50%',
    borderRadius: '1%',
  };
  return (
    <Layout>
      <Seo
        title="Notre méthodologie de conception de projet"
        description="Chez Otos Lab nous nous adaptons à vos besoins et mettons à profit notre expertise pour réussir votre projet"
      />
      <AnimationRevealPage>
        <section className="hidden md:block">
          <div className="bg-white text-black py-8">
            <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-22">
              <div className="ml-0 md:ml-12 sticky">
                <div className="container mx-auto w-full h-full">
                  <div className="relative wrap overflow-hidden p-10 h-full">
                    <div
                      className=" border-purple-600 absolute h-full border"
                      style={newStyle}
                    ></div>
                    <div
                      className=" border-purple-600 absolute h-full border"
                      style={newStyle}
                    ></div>
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div className="order-1 w-5/12">
                        <StaticImage
                          src="../images/undraw_Meeting_re_i53h.svg"
                          width={400}
                          placeholder="tracedSVG"
                          quality={95}
                          formats={['AUTO', 'WEBP', 'AVIF']}
                          alt="Otos Lab - gestion de projet étape 1 : Compréhension de votre projet"
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="order-1 w-5/12 px-1 py-4 text-right">
                        <p className="mb-3 text-2xl text-blue-400">1</p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                          Écouter et comprendre votre projet
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                          Écouter, comprendre et caractériser vos envies est une étape clé du
                          développement de votre projet pour définir une solution web pertinente et
                          adaptée à vos besoins. Suite à une première prise de contact/demande de
                          devis, nous fixons une date pour un premier call. Lors du "jour J", un ou
                          plusieurs experts participeront à cette première prise de contact pour
                          prendre note de tous les détails de votre projet et vous
                          conseiller/orienter dans vos choix
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                      <div className="order-1 w-5/12">
                        <StaticImage
                          src="../images/undraw_static_assets_rpm6.svg"
                          width={400}
                          placeholder="tracedSVG"
                          quality={95}
                          formats={['AUTO', 'WEBP', 'AVIF']}
                          alt="Otos Lab - gestion de projet étape 2 : Définir les technologies adéquates"
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="order-1  w-5/12 px-1 py-4 text-left">
                        <p className="mb-3 text-2xl text-blue-400">2</p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">Choix des outils</h4>
                        <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                          Suite à notre premier rendez-vous nous vous enverrons un dossier
                          récapitulatif complet de votre demande. Ce dossier contiendra entre
                          autres: Mise en avant des fonctionnalités nécessaires, Langage de
                          programmation (PHP , Javascript, Ruby ), Frameworks (Ruby-on-rails, React
                          JS), CMS (Content Management System) tel que WordPress, choix de
                          l'hébergement, délais de livraison, prix.
                          <br /> Il s'agira de répondre au mieux à vos attentes en utilisant les
                          outils les plus adaptés à votre demande.
                          <br /> Il ne reste plus qu'à accepter notre devis retourné et signé pour
                          que l'on commence à travailler !
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div className="order-1 w-5/12">
                        <StaticImage
                          src="../images/undraw_design_feedback_dexe.svg"
                          width={400}
                          placeholder="tracedSVG"
                          quality={95}
                          formats={['AUTO', 'WEBP', 'AVIF']}
                          alt="Otos Lab - gestion de projet étape 3 : Vos retours sur la version beta"
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="order-1 w-5/12 px-1 py-4 text-right">
                        <p className="mb-3 text-2xl text-blue-400">3</p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                          Vos premiers ressentis sur la version beta
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                          Cette phase est très importante: la présentation de la première version.
                          Votre ressenti et vos remarques seront là pour nous guider et affiner le
                          produit selon votre désir! Votre projet commence à prendre vie, il est
                          temps pour vous de choisir les chemins à prendre pour l’évolution de votre
                          application/site web.
                        </p>
                      </div>
                    </div>

                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                      <div className="order-1 w-5/12">
                        <StaticImage
                          src="../images/undraw_mobile_testing_reah.svg"
                          width={400}
                          placeholder="tracedSVG"
                          quality={95}
                          formats={['AUTO', 'WEBP', 'AVIF']}
                          alt="Otos Lab - gestion de projet étape 4 : Test des fonctionalités"
                          className="object-cover object-center "
                        />
                      </div>

                      <div className="order-1  w-5/12 px-1 py-4">
                        <p className="mb-3 text-2xl text-blue-400">4</p>
                        <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                          Test des fonctionalités
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                          Nos produits sont testés et contrôlés en situations réelles pour voir si
                          des bugs peuvent subvenir. La sécurité est une partie importante et non
                          négligeable du processus de développement. Ici le produit est prêt à 95%…
                          Derniers contrôles avant décollage !
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div className="order-1 w-5/12">
                        <StaticImage
                          src="../images/undraw_Success_factors_re_ce93.svg"
                          width={500}
                          placeholder="tracedSVG"
                          quality={95}
                          formats={['AUTO', 'WEBP', 'AVIF']}
                          alt="Otos Lab - gestion de projet étape 5 : Mise en production"
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="order-1 w-5/12 px-1 py-4 text-right">
                        <p className="mb-3 text-2xl text-blue-400">5</p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">Mise en production !</h4>
                        <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                          3...2...1... GO ! Votre projet est enfin entré en orbite du web ! Notre
                          station vous souhaite une belle conquête et plein de réussite.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <StaticImage
                      src="../images/undraw_maker_launch_crhe.svg"
                      width={400}
                      placeholder="tracedSVG"
                      quality={95}
                      formats={['AUTO', 'WEBP', 'AVIF']}
                      alt="Otos Lab : from 0 to success"
                      className="-mt-28"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* responsive */}
        <section className="md:hidden text-gray-600 body-font mt-12">
          <div className="container px-5 py-20 mx-auto flex flex-wrap">
            <div className="mb-2 md:w-2/5 w-full max-w-xl">
              <StaticImage
                src="../images/undraw_Meeting_re_i53h.svg"
                width={400}
                placeholder="tracedSVG"
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Otos Lab - gestion de projet étape 1 : Compréhension de votre projet"
                className="object-cover object-center"
              />
            </div>
            <div className="md:w-3/5 md:pl-6">
              <h2 className="mt-10 mb-5 font-sans text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
                <span className="text-blue-400">1.</span>Écouter et comprendre votre projet
              </h2>
              <p className="leading-relaxed text-base text-gray-800">
                Écouter, comprendre et caractériser vos envies est une étape clé du développement de
                votre projet pour définir une solution web pertinente et adaptée à vos besoins.
                Suite à une première prise de contact/demande de devis, nous fixons une date pour un
                premier call. Lors du "jour J", un ou plusieurs experts participeront à cette
                première prise de contact pour prendre note de tous les détails de votre projet et
                vous conseiller/orienter dans vos choix.
              </p>
            </div>
          </div>
        </section>
        <section className="md:hidden text-gray-600 body-font mt-12">
          <div className="container px-5 mx-auto flex flex-wrap border-t">
            <div className="mt-2 md:w-2/5 w-full max-w-xl">
              <StaticImage
                src="../images/undraw_static_assets_rpm6.svg"
                width={400}
                placeholder="tracedSVG"
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Otos Lab - gestion de projet étape 2 : Définir les technologies adéquates"
                className="object-cover object-center"
              />
            </div>
            <div className="md:w-3/5 md:pl-6">
              <h2 className="mt-10 mb-5 font-sans text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
                <span className="text-blue-400">2.</span>Choix des outils
              </h2>
              <p className="leading-relaxed text-base text-gray-800">
                Suite à notre premier rendez-vous, nous vous enverrons un dossier récapitulatif
                complet de votre demande. Ce dossier contiendra entre autres: Mise en avant des
                fonctionnalités nécessaires, Langage de programmation (PHP, Javascript, Ruby),
                Frameworks (Ruby-on-rails, React JS), CMS (Content Management System) tel que
                WordPress, choix de l'hébergement, délais de livraison, prix.
                <br /> Il s'agira de répondre au mieux à vos attentes en utilisant les outils les
                plus adaptés à votre demande.
                <br /> Il ne reste plus qu'à accepter notre devis retourné et signé pour que l'on
                commence à travailler !
              </p>
            </div>
          </div>
        </section>
        <section className="md:hidden text-gray-600 body-font mt-12">
          <div className="container px-5 mx-auto flex flex-wrap">
            <div className="mt-2 mb-2 md:w-2/5 w-full max-w-xl border-t">
              <StaticImage
                src="../images/undraw_design_feedback_dexe.svg"
                width={400}
                placeholder="tracedSVG"
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Otos Lab - gestion de projet étape 3 : Vos retours sur la version beta"
                className="mt-2"
              />
            </div>
            <div className="md:w-3/5 md:pl-6">
              <h2 className="mb-5 font-sans text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
                <span className="text-blue-400">3.</span>Vos premiers ressentis sur la version beta
              </h2>
              <p className="leading-relaxed text-base text-gray-800">
                Cette phase est très importante : la présentation de la première version. Votre
                ressenti et vos remarques seront là pour nous guider et affiner le produit selon
                votre désir ! Votre projet commence à prendre vie, il est temps pour vous de choisir
                les chemins à prendre pour l’évolution de votre application/site web.
              </p>
            </div>
          </div>
        </section>
        <section className="md:hidden text-gray-600 body-font mt-10 border-t">
          <div className="container px-5 mx-auto flex flex-wrap">
            <div className=" mt-2 md:w-2/5 w-full max-w-xl">
              <StaticImage
                src="../images/undraw_mobile_testing_reah.svg"
                width={400}
                placeholder="tracedSVG"
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Otos Lab - gestion de projet étape 4 : Test des fonctionalités"
                className="object-cover object-center"
              />
            </div>
            <div className="md:w-3/5 md:pl-6">
              <h2 className="mb-2 font-sans text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
                <span className="text-blue-400">4.</span>Test des fonctionalités
              </h2>
              <p className="leading-relaxed text-base text-gray-800">
                Nos produits sont testés et contrôlés en situations réelles pour voir si des bugs
                peuvent subvenir. La sécurité est une partie importante et non négligeable du
                processus de développement. Ici le produit est prêt à 95%… Derniers contrôles avant
                décollage !
              </p>
            </div>
          </div>
        </section>
        <section className="md:hidden text-gray-600 body-font mt-12 border-t">
          <div className="container px-5 mx-auto flex flex-wrap">
            <div className="mb-2 md:w-2/5 w-full max-w-xl mt-2">
              <StaticImage
                src="../images/undraw_Success_factors_re_ce93.svg"
                width={500}
                placeholder="tracedSVG"
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Otos Lab - gestion de projet étape 5 : Mise en production"
                className="object-cover object-center"
              />
            </div>
            <div className="md:w-3/5 md:pl-6 mb-8">
              <h2 className="mb-5 font-sans text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
                <span className="text-blue-400">5.</span>Mise en production !
              </h2>
              <p className="leading-relaxed text-base text-gray-800">
                3... 2... 1... GO ! Votre projet est enfin entré en orbite du web ! Notre station
                vous souhaite une belle conquête et plein de réussite.
              </p>
            </div>
          </div>
        </section>
      </AnimationRevealPage>
    </Layout>
  );
}
