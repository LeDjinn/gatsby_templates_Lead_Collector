import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="fixed bottom-8 md:bottom-10 right-2">
          <StaticImage
            src="../images/undraw_to_the_moon_v1mv.svg"
            // width={200}
            // height={'auto'}
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="A Gatsby astronaut"
            className="object-contain md:object-scale-down md:w-16 md:h-16 w-12 h-12 bg-purple-600 border-gray-50 border-2 rounded-full hover:border-purple-600 mt-10"
            onClick={scrollToTop}
          />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
