import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
    const [billedAnnual, setBilledAnnual] = useState(false);

    const plans = [
        {
            name: 'Group Studies',
            price: billedAnnual ? '80' : '100',
            description: 'Ιδανικό για μαθητές που λειτουργούν καλύτερα σε μικρές ομάδες.',
            features: [
                'Ολιγομελή τμήματα (4-6 άτομα)',
                '2 ώρες διδασκαλίας / εβδομάδα',
                'Πρόσβαση στο υλικό πλατφόρμας',
                'Μηνιαία διαγωνίσματα',
                'Ενημέρωση γονέων online'
            ],
            recommended: false
        },
        {
            name: 'Premium Private',
            price: billedAnnual ? '180' : '220',
            description: 'Αποκλειστική προσοχή και εξατομικευμένο πρόγραμμα σπουδών.',
            features: [
                'Ιδιαίτερα μαθήματα (1-1)',
                'Ευέλικτο ωράριο',
                'Προσωπικός σύμβουλος σπουδών',
                'Απεριόριστη πρόσβαση σε tests',
                'Video-on-demand μαθήματα',
                '24/7 υποστήριξη'
            ],
            recommended: true
        },
        {
            name: 'Freelancer Pro',
            price: billedAnnual ? '29' : '39',
            description: 'Η λύση για ανεξάρτητους καθηγητές που θέλουν να οργανωθούν.',
            features: [
                'Διαχείριση έως 50 μαθητών',
                'Έκδοση αποδείξεων',
                'Online Gradebook',
                'Ημερολόγιο μαθημάτων',
                'Σελίδα προφίλ στο δίκτυο',
                '0% προμήθεια στα μαθήματα'
            ],
            recommended: false
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Ευέλικτα Πακέτα</h2>
                    <p className="text-gray-600 mb-8">
                        Επιλέξτε το πρόγραμμα που ταιριάζει στις ανάγκες σας.
                    </p>

                    <div className="inline-flex bg-white p-1 rounded-full border border-gray-200 shadow-sm relative">
                        <div className="absolute -top-10 right-0 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-bounce">
                            SAVE 20%
                        </div>
                        <button
                            onClick={() => setBilledAnnual(false)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${!billedAnnual ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
                        >
                            Μηνιαία
                        </button>
                        <button
                            onClick={() => setBilledAnnual(true)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${billedAnnual ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
                        >
                            Ετήσια
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div key={index} className={`relative bg-white rounded-2xl p-8 border ${plan.recommended ? 'border-blue-500 shadow-2xl scale-105 z-10' : 'border-gray-200 shadow-lg'} transition-all`}>
                            {plan.recommended && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <p className="text-sm text-gray-500 mb-6 min-h-[40px]">{plan.description}</p>

                            <div className="mb-8">
                                <span className="text-4xl font-bold text-gray-900">€{plan.price}</span>
                                <span className="text-gray-500">/ μήνα</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                                        <Check className="text-green-500 shrink-0 mt-0.5" size={16} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-bold transition-colors ${plan.recommended ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}>
                                Επιλογή Πακέτου
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
