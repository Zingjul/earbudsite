import React from 'react';
import { Hexagon, Triangle, Circle, Square } from 'lucide-react';

export default function TrustedBy() {
  return (
    <section className="section trusted-by" style={{ minHeight: '60vh' }}>
      <div className="snapping-content">
        <h4 className="text-body" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Trusted by forward thinking teams
        </h4>
        <div className="logos-container">
          {/* Placeholder Logos until real ones are provided */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Hexagon /> <span style={{ fontWeight: 800 }}>Nexus</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Triangle /> <span style={{ fontWeight: 800 }}>Aura Analytics</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Circle /> <span style={{ fontWeight: 800 }}>Omni Systems</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Square /> <span style={{ fontWeight: 800 }}>Vanguard</span>
          </div>
        </div>
      </div>
    </section>
  );
}
