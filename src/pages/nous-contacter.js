import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ContactUs from '../components/ContactForm';
import AnimationRevealPage from '../components/AnimationRevealPage';

export default function Contact() {
  return (
    <Layout>
      <Seo
        title="Nous contacter"
        description="N'hésitez pas à nous contacter pour toutes questions ou demande"
      />
      <AnimationRevealPage>
        <div className="flex items-center justify-center">
          <StaticImage
            src="../images/undraw_contact_us_15o2.svg"
            quality={95}
            placeholder="tracedSVG"
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="Otas Lab - Nous contacter"
            className="mt-36 object-cover object-center h-auto w-full md:w-1/2 mb-2"
          />
        </div>

        <ContactUs />
      </AnimationRevealPage>
    </Layout>
  );
}
