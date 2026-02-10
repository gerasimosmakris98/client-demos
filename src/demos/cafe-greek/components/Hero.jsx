import React from 'react';
import { Coffee, MapPin, Clock } from 'lucide-react';

const CafeHero = () => {
  return (
    <section style={{
      position: 'relative',
      height: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* Background Image Placeholder */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'url("https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop") center/cover no-repeat',
        filter: 'brightness(0.3)'
      }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '1rem', maxWidth: '800px' }}>
        <div className="animate-fade-in glass-panel" style={{
          padding: '3rem',
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(212, 163, 115, 0.3)'
        }}>
          <h1 style={{
            fontSize: '4.5rem',
            fontWeight: 800,
            marginBottom: '1rem',
            fontFamily: "'Playfair Display', serif",
            letterSpacing: '0.05em',
            textShadow: '0 4px 12px rgba(0,0,0,0.5)'
          }}>
            AROMA <span style={{ color: '#d4a373' }}>CAFE</span>
          </h1>
          <p style={{
            fontSize: '1.5rem',
            color: '#e5e5e5',
            marginBottom: '2.5rem',
            fontStyle: 'italic',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)'

          }}>
            Η τέχνη του καφέ στην καρδιά της πόλης.
          </p>

          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#d4a373' }}>
              <Clock size={20} />
              <span>Δευ - Κυρ: 08:00 - 23:00</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#d4a373' }}>
              <MapPin size={20} />
              <span>Αριστοτέλους 12, Κέντρο</span>
            </div>
          </div>

          <button style={{
            marginTop: '3rem',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            background: '#d4a373',
            color: 'black',
            border: 'none',
            borderRadius: '2px',
            cursor: 'pointer',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            boxShadow: '0 4px 15px rgba(212, 163, 115, 0.4)',
            transition: 'all 0.3s'
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 163, 115, 0.6)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 163, 115, 0.4)'; }}
          >
            Δειτε το μενου
          </button>
        </div>
      </div>
    </section>
  );
};

export default CafeHero;
