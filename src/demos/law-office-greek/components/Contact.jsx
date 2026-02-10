import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-24 bg-[#0B1120] text-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm">Contact Us</span>
                    <h2 className="text-4xl md:text-5xl font-black mt-2 mb-8">Secure Your Legal Future.</h2>
                    <p className="text-slate-400 text-lg mb-12">
                        Reach out today for a confidential consultation. Our team is ready to listen and fight for your interests.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-indigo-500 mt-1" size={24} />
                            <div>
                                <h4 className="font-bold text-lg">Headquarters</h4>
                                <p className="text-slate-400">Leoforos Vasilissis Sofias 102<br />Athens, 115 28</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="text-indigo-500 mt-1" size={24} />
                            <div>
                                <h4 className="font-bold text-lg">Phone</h4>
                                <p className="text-slate-400">+30 210 555 0199</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Mail className="text-indigo-500 mt-1" size={24} />
                            <div>
                                <h4 className="font-bold text-lg">Email</h4>
                                <p className="text-slate-400">info@lawoffice-greek.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 md:p-10 shadow-2xl skew-y-1 transform origin-top-left">
                    <form className="space-y-6">
                        <h3 className="text-slate-900 font-bold text-2xl mb-6">Request Consultation</h3>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
                                <input type="text" className="w-full bg-slate-50 border border-slate-200 p-3 text-slate-900 focus:outline-none focus:border-indigo-900" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
                                <input type="text" className="w-full bg-slate-50 border border-slate-200 p-3 text-slate-900 focus:outline-none focus:border-indigo-900" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase">Email</label>
                            <input type="email" className="w-full bg-slate-50 border border-slate-200 p-3 text-slate-900 focus:outline-none focus:border-indigo-900" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase">Message</label>
                            <textarea rows="4" className="w-full bg-slate-50 border border-slate-200 p-3 text-slate-900 focus:outline-none focus:border-indigo-900"></textarea>
                        </div>
                        <button type="button" className="w-full bg-indigo-900 text-white font-bold py-4 uppercase tracking-widest hover:bg-indigo-800 transition-colors">
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
