
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url, type = 'website' }) => {
    const siteTitle = 'Gerasimos Makris | Client Demos';
    const siteUrl = 'https://demos.g-makris.com';
    const defaultImage = 'https://g-makris.com/og-image.png';

    return (
        <Helmet>
            {/* Standard */}
            <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
            <meta name="description" content={description || 'Premium web development demos and templates by Gerasimos Makris.'} />
            <link rel="canonical" href={url ? `${siteUrl}${url}` : siteUrl} />

            {/* OG */}
            <meta property="og:title" content={title || siteTitle} />
            <meta property="og:description" content={description || 'Premium web development demos and templates.'} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url ? `${siteUrl}${url}` : siteUrl} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@gerasimos_m1998" />
            <meta name="twitter:title" content={title || siteTitle} />
            <meta name="twitter:description" content={description || 'Premium web development demos.'} />
            <meta name="twitter:image" content={image || defaultImage} />
        </Helmet>
    );
};

export default SEO;
