import React from 'react';

export function Product({ children }) {
    return <div className="product-card">{children}</div>;
}

export function ProductTitle({ children }) {
    return <div className="product-title">{children}</div>;
}

export function Productimage({ src, alt }) {
    return (
        <div className="product-image">
            <img src={src} alt={alt} />
        </div>
    );
}

export function Price({ children }) {
    return <div className="product-price">{children}</div>;
}
