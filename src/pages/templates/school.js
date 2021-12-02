import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '../../components/Seo';

import AnimationRevealPage from '../../components/AnimationRevealPage';
import SchoolNavbar from '../../components/Navbars/SchoolNavbar';
import SchoolHero from '../../components/Heros/SchoolHero';
import SchoolFeatures from '../../components/Features/SchoolFeatures';
import SchoolStats from '../../components/Stats/SchoolStats';
import SchoolSteps from '../../components/Steps/SchoolSteps';
import SchoolTeams from '../../components/Teams/SchoolTeams';
import SchoolBlog from '../../components/Blogs/SchoolBlog';
import SchoolEvents from '../../components/Pricings/SchoolEvents';
import SchoolFaqs from '../../components/Faqs/SchoolFaqs';
import SchoolFooter from '../../components/Footers/SchoolFooter';

const SchoolTemplate = () => (
  <>
    <Seo title="All-in" />
    <AnimationRevealPage>
      <SchoolNavbar />
      <SchoolHero />
      <SchoolFeatures />
      <SchoolStats />
      <SchoolSteps />
      <SchoolBlog />
      <SchoolTeams />
      <SchoolEvents />
      <SchoolFaqs />
      <SchoolFooter />
    </AnimationRevealPage>
  </>
);

export default SchoolTemplate;
