import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import SimpleNavBar from '../../components/Navbars/SimpleNavbar';

import Seo from '../../components/Seo';
import SimpleHero from '../../components/Heros/SimpleHero';
import SimpleFeatures from '../../components/Features/SimpleFeatures';
import SimplePricing from '../../components/Pricings/SimplePricing';
import SimpleSteps from '../../components/Steps/SimpleSteps';
import SimpleTeams from '../../components/Teams/SimpleTeams';
import SimpleBlog from '../../components/Blogs/SimpleBlog';
import AnimationRevealPage from '../../components/AnimationRevealPage';
import SimpleFaqs from '../../components/Faqs/SimpleFaqs';
import SimpleFooter from '../../components/Footers/SimpleFooter';

const SimpleTemplate = () => (
  <>
    <Seo title="All-in" />
    <AnimationRevealPage>
      <SimpleNavBar />
      <SimpleHero />
      <SimpleFeatures />
      <SimplePricing />
      <SimpleSteps />
      <SimpleTeams />
      <SimpleBlog />
      <SimpleFaqs />
      <SimpleFooter />
    </AnimationRevealPage>
  </>
);
export default SimpleTemplate;
