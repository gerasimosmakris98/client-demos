import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: 'Πώς λειτουργεί η εγγραφή στην πλατφόρμα;',
        answer: 'Η εγγραφή είναι απλή. Δημιουργείτε λογαριασμό ως Μαθητής, Γονέας ή Καθηγητής. Για τους καθηγητές απαιτείται επαλήθευση στοιχείων. Μόλις εγγραφείτε, έχετε άμεση πρόσβαση στο dashboard σας.'
    },
    {
        question: 'Μπορώ να κάνω ιδιαίτερα μαθήματα online;',
        answer: 'Ναι! Η πλατφόρμα υποστηρίζει πλήρως την τηλεκπαίδευση με ενσωματωμένο video room, διαδραστικό πίνακα (whiteboard) και δυνατότητα καταγραφής του μαθήματος για μελλοντική επανάληψη.'
    },
    {
        question: 'Υπάρχει δυνατότητα δοκιμαστικού μαθήματος;',
        answer: 'Φυσικά. Όλοι οι νέοι μαθητές δικαιούνται ένα δωρεάν 30λεπτο μάθημα γνωριμίας με τον καθηγητή της επιλογής τους για να συζητήσουν τους στόχους και το πλάνο μελέτης.'
    },
    {
        question: 'Πώς γίνεται η πληρωμή των διδάκτρων;',
        answer: 'Οι πληρωμές γίνονται με ασφάλεια μέσω κάρτας ή τραπεζικής μεταφοράς μέσα από το Student Dashboard. Παρέχουμε αυτόματη μηνιαία χρέωση για συνδρομητικά πακέτα.'
    },
    {
        question: 'Παρέχετε υλικό προετοιμασίας για Πανελλήνιες;',
        answer: 'Διαθέτουμε τη μεγαλύτερη βάση δεδομένων με θέματα παλαιότερων ετών, προσομοιώσεις διαγωνισμάτων και σημειώσεις καθηγητών, ταξινομημένα ανά μάθημα και κεφάλαιο.'
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Συχνές Ερωτήσεις</h2>
                    <p className="text-gray-600">
                        Λύστε τις απορίες σας σχετικά με τη λειτουργία του φροντιστηρίου και της πλατφόρμας.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                            >
                                <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
                                {openIndex === index ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-gray-400" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="bg-gray-50"
                                    >
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
