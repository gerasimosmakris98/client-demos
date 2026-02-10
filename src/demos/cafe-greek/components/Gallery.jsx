import React from 'react';

const images = [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2694&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2671&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop"
];

const CafeGallery = () => {
    return (
        <section style={{ padding: '0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {images.map((img, index) => (
                <div key={index} style={{ height: '400px', overflow: 'hidden' }}>
                    <img
                        src={img}
                        alt="Cafe vibe"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                </div>
            ))}
        </section>
    );
};

export default CafeGallery;
