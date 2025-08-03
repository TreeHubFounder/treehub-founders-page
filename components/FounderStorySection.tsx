import React from 'react';
import { founderContent } from '../constants';

const FounderStorySection = () => {
    const { letter, name, role, image } = founderContent;

    return (
        <section className="py-24 bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">From a Fellow Pro, Not a Tech Bro</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <div className="lg:col-span-1 flex justify-center">
                        <div className="text-center">
                            <img src={image} alt={name} className="rounded-full w-48 h-48 lg:w-64 lg:h-64 object-cover mx-auto shadow-2xl shadow-tree-green/20" />
                            <h3 className="text-2xl font-bold text-white mt-6">{name}</h3>
                            <p className="text-tree-green font-semibold">{role}</p>
                        </div>
                    </div>
                    <div className="lg:col-span-2 space-y-6 text-lg text-slate-300">
                        {letter.map((paragraph, index) => (
                            <p key={index} className="leading-relaxed first:text-xl first:font-medium first:text-white">
                                {paragraph.copy}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderStorySection;
