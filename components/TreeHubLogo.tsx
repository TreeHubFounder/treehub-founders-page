
import React from 'react';

export const TreeHubLogo = ({ className }: { className?: string }) => (
  <div className={`flex items-center ${className}`}>
     <svg className="w-9 h-9 mr-2 text-tree-green" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 44V36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M31 36H17C15.3431 36 14 34.6569 14 33V33C14 31.3431 15.3431 30 17 30H31C32.6569 30 34 31.3431 34 33V33C34 34.6569 32.6569 36 31 36Z" fill="#0d9488" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
        <path d="M28 30L24 22L20 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 22L32 22L24 4L16 22L24 22Z" fill="#2dd4bf" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
    </svg>
    <span className="text-3xl font-extrabold tracking-tight text-white">
      Tree<span className="text-tree-green">Hub</span>
    </span>
  </div>
);
