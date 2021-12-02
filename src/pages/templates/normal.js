import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '../../components/Seo';

import AnimationRevealPage from '../../components/AnimationRevealPage';
import NormalNavbar from '../../components/Navbars/NormalNavbar';
import NormalHero from '../../components/Heros/NormalHero';
import NormalFeatures from '../../components/Features/NormalFeatures';
import NormalPricing from '../../components/Pricings/NormalPricing';
import NormalSteps from '../../components/Steps/NormalSteps';
import NormalTeam from '../../components/Teams/NormalTeams';
import NormalBlog from '../../components/Blogs/NormalBlog';
import NormalFaqs from '../../components/Faqs/NormalFaqs';
import NormalFooter from '../../components/Footers/NormalFooter';

const NormalTemplate = () => (
  <>
    <Seo title="All-in" />
    <AnimationRevealPage>
      <NormalNavbar />
      <NormalHero />
      <NormalFeatures />
      <NormalPricing />
      <NormalSteps />
      <NormalTeam />
      <NormalBlog />
      <NormalFaqs />
      <NormalFooter />
    </AnimationRevealPage>
  </>
);

export default NormalTemplate;
