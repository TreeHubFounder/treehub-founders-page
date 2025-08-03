
import React, { useState } from 'react';
import { offerContent } from '../constants';
import Button from './ui/Button';

const CheckIcon = () => (
    <svg className="h-6 w-6 text-tree-green flex-shrink-0 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const ProgressBar = ({ value, max }: { value: number; max: number }) => {
    const percentage = (value / max) * 100;
    return (
        <div className="w-full bg-slate-700 rounded-full h-4 my-2">
            <div
                className="bg-tree-green h-4 rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
};

const OfferSection = () => {
    const { mainHeadline, subHeadline, valueStack, riskReversal, finalCTA, microcopy } = offerContent;
    const totalSpots = 100;
    const initialClaimed = 53;
    const [claimedSpots] = useState(initialClaimed);
    const spotsLeft = totalSpots - claimedSpots;

    return (
        <section id="offer-section" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl shadow-tree-green/10 p-8 md:p-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{mainHeadline}</h2>
                    <p className="mt-4 text-lg text-slate-300">{subHeadline}</p>

                    <div className="my-10 text-left space-y-4">
                        {valueStack.map((item, index) => (
                            <div key={index} className="flex items-start">
                                <CheckIcon />
                                <span className="text-slate-200 text-lg">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-900/50 rounded-xl p-6 my-10 border border-slate-700">
                         <p className="text-sm font-bold text-tree-green tracking-wider uppercase">UPDATE: Only {spotsLeft} Founder Spots Remaining</p>
                        <ProgressBar value={claimedSpots} max={totalSpots} />
                        <div className="flex justify-between items-center text-sm font-medium text-white mt-2">
                            <span>{claimedSpots} Claimed</span>
                             <span>{totalSpots} Total Spots</span>
                        </div>
                    </div>
                    
                    <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6 mb-8 text-center">
                        <h4 className="font-bold text-white text-xl">Our Founder's Promise</h4>
                        <p className="text-slate-300 mt-2">{riskReversal}</p>
                    </div>

                    <Button size="lg" className="w-full text-xl transform hover:scale-105">
                        {finalCTA}
                    </Button>
                    <p className="mt-4 text-slate-400 text-sm">{microcopy}</p>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;
