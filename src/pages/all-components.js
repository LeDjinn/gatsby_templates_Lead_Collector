import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '../components/Seo';

import AnimationRevealPage from '../components/AnimationRevealPage';

import MediumFeatures from '../components/Features/MediumFeatures';
import MediumPricing from '../components/Pricings/MediumPricing';
import MediumSteps from '../components/Steps/MediumSteps';
import MediumTeams from '../components/Teams/MediumTeams';
import MediumBlog from '../components/Blogs/MediumBlog';
import MediumFaqs from '../components/Faqs/MediumFaqs';
import MediumFooter from '../components/Footers/MediumFooter';

import HybridMediumFooter from '../components/Footers/HybridMediumFooter';
import HighHero from '../components/Heros/HighHero';
import HighFeatures from '../components/Features/HighFeatures';
import HighBlog from '../components/Blogs/HighBlog';
import HighTeams from '../components/Teams/HighTeams';
import HighContent from '../components/Contents/HighContent';
import HighFooter from '../components/Footers/HighFooter';

const AllComponents = () => (
  <>
    <Seo title="All-in" />
    <AnimationRevealPage>
      <HighHero />
      <HighFeatures />
      <HighContent />
      <HighBlog />
      <HighTeams />
      <HighFooter />
     
    </AnimationRevealPage>
  </>
);

export default AllComponents;
