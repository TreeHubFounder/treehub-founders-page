
import React from 'react';
import { TreeHubLogo } from './TreeHubLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 py-8 text-center text-slate-500">
        <div className="flex justify-center mb-6">
            <TreeHubLogo />
        </div>
        <p>Built by tree care professionals, for tree care professionals.</p>
        <p className="mt-4 text-sm">&copy; {currentYear} TreeHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
