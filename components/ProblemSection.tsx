
import React from 'react';
import { problemContent } from '../constants';

const ProblemSection = () => {
    return (
        <section className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">The industry is broken. We're fixing it.</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">You're not imagining it. The tools you're forced to use weren't built for the trade.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {problemContent.points.map((point, index) => (
                        <div key={index} className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl shadow-slate-950/50 transform transition-all duration-500 hover:scale-105 hover:bg-slate-800/50">
                           <img src={point.image} alt={point.headline} className="w-full h-64 object-cover opacity-70"/>
                           <div className="p-8">
                                <h3 className="text-2xl font-bold text-white">{point.headline}</h3>
                                <p className="text-slate-400 mt-3">{point.copy}</p>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
