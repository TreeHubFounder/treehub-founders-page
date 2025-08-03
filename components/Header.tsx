
import React from 'react';
import { heroContent } from '../constants';
import { TreeHubLogo } from './TreeHubLogo';
import Button from './ui/Button';

const Header = () => {
    const handleScrollToOffer = () => {
        const offerSection = document.getElementById('offer-section');
        if (offerSection) {
            offerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <TreeHubLogo />
        <Button onClick={handleScrollToOffer}>
          {heroContent.primaryCTA}
        </Button>
      </div>
    </header>
  );
};

export default Header;
