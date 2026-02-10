import React from 'react';
import { UserCheck, Calendar, FileText, BarChart } from 'lucide-react';

const PortalPreview = () => {
    return (
        <section style={{ padding: '5rem 2rem', background: '#f3f4f6' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>
                    Ψηφιακό Σύστημα Διαχείρισης
                </h2>
                <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
                    Πλήρης έλεγχος της προόδου του μαθητή μέσα από την ηλεκτρονική μας πλατφόρμα.
                    Ενημέρωση γονέων σε πραγματικό χρόνο.
                </p>

                <div className="glass-panel" style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    padding: '0',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    border: '1px solid rgba(255,255,255,0.5)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}>
                    {/* Mock UI Header */}
                    <div style={{ background: '#1f2937', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #374151' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                        </div>
                        <div style={{ color: '#9ca3af', fontSize: '0.875rem', fontFamily: 'monospace' }}>portal.frontistirio.gr</div>
                    </div>

                    {/* Mock UI Body */}
                    <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2rem', textAlign: 'left' }}>
                        {/* Sidebar */}
                        <div style={{ borderRight: '1px solid #e5e7eb', paddingRight: '1rem' }}>
                            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: '#4f46e5' }}>
                                <BarChart size={20} /> Πρόοδος
                            </div>
                            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#4b5563' }}>
                                <Calendar size={20} /> Πρόγραμμα
                            </div>
                            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#4b5563' }}>
                                <UserCheck size={20} /> Απουσίες
                            </div>
                            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#4b5563' }}>
                                <FileText size={20} /> Βαθμολογίες
                            </div>
                        </div>

                        {/* Content Area */}
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827' }}>Καρτέλα Μαθητή: Γιώργος Π.</h3>
                                <span style={{ padding: '0.25rem 0.75rem', background: '#d1fae5', color: '#065f46', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600 }}>Γ' Λυκείου</span>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                                <div style={{ padding: '1.5rem', background: '#eff6ff', borderRadius: '8px' }}>
                                    <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>Μέσος Όρος (Μαθηματικά)</div>
                                    <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1d4ed8' }}>18.5</div>
                                </div>
                                <div style={{ padding: '1.5rem', background: '#f5f3ff', borderRadius: '8px' }}>
                                    <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>Παρουσίες Μήνα</div>
                                    <div style={{ fontSize: '2rem', fontWeight: 800, color: '#5b21b6' }}>100%</div>
                                </div>
                                <div style={{ padding: '1.5rem', background: '#fffbeb', borderRadius: '8px' }}>
                                    <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>Επόμενο Διαγώνισμα</div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#b45309' }}>15 Φεβ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortalPreview;
