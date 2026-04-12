import React from 'react';

export default function FeatureSplit({ title, description, reversed, imageUrl }) {
  return (
    <div className={`feature-split fade-in-up ${reversed ? 'reversed' : ''}`}>
      <div className="feature-text">
        <h3 className="text-headline" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)' }}>{title}</h3>
        <p className="text-body">{description}</p>
      </div>
      <div className="feature-visual" style={{ flex: 1, position: 'relative' }}>
        <div className="spline-wrapper" style={{ width: '100%', height: '100%', minHeight: '400px', margin: 0 }}>
          <span className="spline-placeholder-text"></span>
          {imageUrl && (
            <img src={imageUrl} alt={title} className="placeholder-img" style={{ objectFit: 'cover' }} />
          )}
        </div>
      </div>
    </div>
  );
}
