import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
    return (
        <section className="py-24 bg-neutral-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-lime-400 font-mono font-bold tracking-widest uppercase text-sm">Memberships</span>
                    <h2 className="text-4xl md:text-5xl font-black mt-2 italic">JOIN THE CLUB</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[
                        {
                            name: "BASIC",
                            price: "49",
                            features: ["Access to Gym Floor", "Locker Room Access", "1 Intro Session"]
                        },
                        {
                            name: "PRO",
                            price: "79",
                            popular: true,
                            features: ["All Basic Features", "Unlimted Group Classes", "Sauna Access", "Bring a Friend (1x/mo)"]
                        },
                        {
                            name: "ELITE",
                            price: "129",
                            features: ["All Pro Features", "4 Personal Training Sessions", "Nutrition Plan", "Priority Booking"]
                        }
                    ].map((plan, i) => (
                        <div key={i} className={`relative p-8 rounded-3xl border flex flex-col ${plan.popular ? 'bg-lime-500/10 border-lime-500' : 'bg-neutral-800 border-white/5'}`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime-500 text-black px-4 py-1 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg shadow-lime-500/20">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-xl font-black italic mb-2">{plan.name}</h3>
                            <div className="mb-8">
                                <span className="text-4xl font-black">€{plan.price}</span>
                                <span className="text-gray-400">/mo</span>
                            </div>
                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feat, j) => (
                                    <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check size={16} className={`mt-0.5 ${plan.popular ? 'text-lime-500' : 'text-gray-500'}`} />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-4 rounded-xl font-black uppercase tracking-wider transition-all ${plan.popular
                                    ? 'bg-lime-500 text-black hover:bg-lime-400 shadow-lg shadow-lime-500/20'
                                    : 'bg-white/10 hover:bg-white/20 text-white'
                                }`}>
                                Select Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
