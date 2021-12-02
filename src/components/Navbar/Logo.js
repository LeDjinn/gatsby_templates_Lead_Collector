import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <StaticImage
          src="../../images/otos-lab-3.svg"
          width="170"
          quality={75}
          alt="Otos Lab logo"
          placeholder="tracedSVG"
        />
      </Link>
    </div>
  );
};

export default Logo;
