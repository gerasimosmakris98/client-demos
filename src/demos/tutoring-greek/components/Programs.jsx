import React from 'react';
import { BookOpen, Calculator, GraduationCap, Globe, Cpu, Palette, Music, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const programs = [
    {
        title: 'Δημοτικό - Κέντρο Μελέτης',
        description: 'Καθημερινή προετοιμασία μαθημάτων, εμπέδωση της ύλης και δημιουργική απασχόληση.',
        icon: <BookOpen className="text-blue-500" size={32} />,
        color: 'bg-blue-50',
        borderColor: 'border-blue-100'
    },
    {
        title: 'Μέση Εκπαίδευση & Πανελλήνιες',
        description: 'Εξειδικευμένα τμήματα Γυμνασίου - Λυκείου. Στόχευση στην αριστεία και την επιτυχία στις εξετάσεις.',
        icon: <Calculator className="text-indigo-500" size={32} />,
        color: 'bg-indigo-50',
        borderColor: 'border-indigo-100'
    },
    {
        title: 'Πανεπιστημιακά Μαθήματα',
        description: 'Υποστήριξη φοιτητών σε θετικές και θεωρητικές σχολές. Εκπόνηση εργασιών και πτυχιακών.',
        icon: <GraduationCap className="text-purple-500" size={32} />,
        color: 'bg-purple-50',
        borderColor: 'border-purple-100'
    },
    {
        title: 'Ξένες Γλώσσες',
        description: 'Αγγλικά, Γαλλικά, Γερμανικά, Ισπανικά. Προετοιμασία για όλα τα αναγνωρισμένα πτυχία.',
        icon: <Globe className="text-green-500" size={32} />,
        color: 'bg-green-50',
        borderColor: 'border-green-100'
    },
    {
        title: 'Ρομποτική & Πληροφορική',
        description: 'STEM εκπαίδευση, LEGO Education, Python, Web Development για παιδιά και εφήβους.',
        icon: <Cpu className="text-orange-500" size={32} />,
        color: 'bg-orange-50',
        borderColor: 'border-orange-100'
    },
    {
        title: 'Καλλιτεχνικά & Μουσική',
        description: 'Εργαστήρια ζωγραφικής, σχεδίου και μουσικής προπαιδείας. Ανάπτυξη δημιουργικών δεξιοτήτων.',
        icon: <Palette className="text-pink-500" size={32} />,
        color: 'bg-pink-50',
        borderColor: 'border-pink-100'
    }
];

const Programs = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Εκπαιδευτικά Προγράμματα</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Καλύπτουμε κάθε εκπαιδευτική ανάγκη, από τα πρώτα σχολικά βήματα μέχρι την επαγγελματική εξειδίκευση.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className={`p-8 rounded-2xl border ${program.borderColor} ${program.color} hover:shadow-lg transition-all cursor-pointer group`}
                        >
                            <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                {program.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {program.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
