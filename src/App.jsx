import React from 'react';
import Hero from './components/Hero';
import Statement from './components/Statement';
import FeatureSplit from './components/FeatureSplit';
import TrustedBy from './components/TrustedBy';
import './index.css';

function App() {
  return (
    <main>
      <Hero />
      <Statement />

      <section className="section" style={{ padding: '8rem 2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem', width: '100%' }}>
          <FeatureSplit
            title="Master of Silence."
            description="Active Noise Cancellation continuously adapts to the geometry of your ear and the fit of the ear tips to block out the world."
            imageUrl="/luxury_black_earbuds.png"
            reversed={false}
          />

          <FeatureSplit
            title="The Sound of Science."
            description="Custom-built high‑excursion, low-distortion driver delivers powerful bass. A super-efficient high-dynamic-range amplifier produces pure, incredibly clear sound."
            imageUrl="/inview.png"
            reversed={true}
          />

          <FeatureSplit
            title="For your ears only."
            description="Personalized audio profiles dynamically map sound to your unique hearing signature. Immerse yourself in a sonic landscape tailored exclusively for you."
            imageUrl="/pairview.png"
            reversed={false}
          />
        </div>
      </section>

      <TrustedBy />
    </main>
  );
}

export default App;
