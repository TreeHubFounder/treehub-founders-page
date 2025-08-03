
import React from 'react';
import { heroContent, imageAssets } from '../constants';
import Button from './ui/Button';

const HeroSection = () => {
    const handleScrollToOffer = () => {
        const offerSection = document.getElementById('offer-section');
        if (offerSection) {
            offerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative h-screen flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${imageAssets.hero})` }}
            ></div>

            <div className="relative z-10 text-center px-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4 animate-fade-in-down">
                   {heroContent.headline}
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-8 opacity-0 animate-fade-in-up">
                   {heroContent.subHeadline}
                </p>
                <Button onClick={handleScrollToOffer} size="lg" className="transform hover:scale-105 opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                    {heroContent.primaryCTA}
                </Button>
            </div>
        </section>
    );
};

export default HeroSection;
