
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import FounderStorySection from './components/FounderStorySection';
import OfferSection from './components/OfferSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FounderStorySection />
        <OfferSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
