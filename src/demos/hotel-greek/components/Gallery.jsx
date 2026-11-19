import React from 'react';

const images = [
    "/demo-art/hotel-1.svg",
    "/demo-art/hotel-2.svg",
    "/demo-art/hotel-3.svg"
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
