import React from 'react';
import { solutionContent } from '../constants';

const SolutionSection = () => {
    return (
        <section className="py-24 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">The Right Tools For The Job</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">TreeHub directly solves the biggest frustrations in the tree care industry.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {solutionContent.points.map((point) => (
                        <div key={point.headline} className="bg-slate-800/50 rounded-xl overflow-hidden shadow-2xl shadow-slate-950/50 transform transition-all duration-500 hover:scale-105 hover:bg-slate-800/80 group">
                           <div className="overflow-hidden">
                             <img src={point.image} alt={point.headline} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"/>
                           </div>
                           <div className="p-8">
                                <h3 className="text-2xl font-bold text-tree-green">{point.headline}</h3>
                                <p className="text-slate-300 mt-3">{point.copy}</p>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
