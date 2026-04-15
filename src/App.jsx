import React from 'react';
import Hero from './components/Hero';
import Statement from './components/Statement';
import FeatureSplit from './components/FeatureSplit';
import TrustedBy from './components/TrustedBy';
import ScrollObserver from './components/ScrollObserver';
import { StaggerTestimonials } from './components/ui/stagger-testimonials';
import { ProfessionalConnect } from './components/ui/get-in-touch';
import './index.css';

function App() {
  return (
    <main>
      <ScrollObserver />
      <Hero />
      <Statement />
      <section className="section">
        <FeatureSplit
          title="Master of Silence."
          description="Active Noise Cancellation continuously adapts to the geometry of your ear and the fit of the ear tips to block out the world."
          imageUrl="/luxury_black_earbuds.png"
          reversed={false}
        />
      </section>

      <section className="section">
        <FeatureSplit
          title="The Sound of Science."
          description="Custom-built high‑excursion, low-distortion driver delivers powerful bass. A super-efficient high-dynamic-range amplifier produces pure, incredibly clear sound."
          imageUrl="/inview.png"
          reversed={true}
        />
      </section>

      <section className="section">
        <FeatureSplit
          title="For your ears only."
          description="Personalized audio profiles dynamically map sound to your unique hearing signature. Immerse yourself in a sonic landscape tailored exclusively for you."
          imageUrl="/pairview.png"
          reversed={false}
        />
      </section>

      <TrustedBy />

      <section className="section bg-[#050505]">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-headline text-center mb-12 snapping-content">Hear it from them.</h2>
          <div className="snapping-content">
            <StaggerTestimonials />
          </div>
        </div>
      </section>

      <section className="section">
        <ProfessionalConnect />
      </section>
    </main>
  );
}

export default App;
