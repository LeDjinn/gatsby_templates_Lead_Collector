import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '../../components/Seo';

import AnimationRevealPage from '../../components/AnimationRevealPage';
import MediumNavbar from '../../components/Navbars/MediumNavbar';
import MediumHero from '../../components/Heros/MediumHero';
import MediumFeatures from '../../components/Features/MediumFeatures';
import MediumPricing from '../../components/Pricings/MediumPricing';
import MediumSteps from '../../components/Steps/MediumSteps';
import MediumTeams from '../../components/Teams/MediumTeams';
import MediumBlog from '../../components/Blogs/MediumBlog';
import MediumFaqs from '../../components/Faqs/MediumFaqs';
import MediumFooter from '../../components/Footers/MediumFooter';

const MediumTemplate = () => (
  <>
    <Seo title="All-in" />
    <AnimationRevealPage>
      <MediumNavbar />
      <MediumHero />
      <MediumFeatures />
      <MediumPricing />
      <MediumSteps />
      <MediumTeams />
      <MediumBlog />
      <MediumFaqs />
      <MediumFooter />
    </AnimationRevealPage>
  </>
);

export default MediumTemplate;
