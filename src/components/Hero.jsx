import React from 'react';

export default function Hero() {
  // Using the Spline Viewer web component (the "Vanilla JS" way)
  // This is the most robust way to embed Spline when "Vanilla JS" export is selected.

  // Using the ID from your comment: nexbotrobotcharacterconcept-EIZ5yggTAbF65zws
  const sceneUrl = "https://prod.spline.design/EIZ5yggTAbF65zws/scene.splinecode";

  return (
    <section
      style={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#000'
      }}
    >
      {/* 3D Scene Layer */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      >
        <spline-viewer
          url={sceneUrl}
          loading-anim-type="none" // Smoother transition
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient Overlay - improves text readability over 3D */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            linear-gradient(to bottom,
              rgba(0,0,0,0.6) 0%,
              rgba(0,0,0,0.2) 30%,
              rgba(0,0,0,0) 50%,
              rgba(0,0,0,0.2) 70%,
              rgba(0,0,0,0.9) 100%
            )
          `,
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      {/* Hero Content - positioned OVER the 3D scene */}
      <div
        className="fade-in-up"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '2rem',
          maxWidth: '900px',
          pointerEvents: 'none'
        }}
      >
        <h1
          className="text-hero"
          style={{
            fontSize: 'clamp(3.5rem, 12vw, 9rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            color: '#F5F5F7',
            margin: 0,
            textShadow: '0 10px 40px rgba(0,0,0,0.5)'
          }}
        >
          ROBO SOUNDS
        </h1>

        <p
          style={{
            marginTop: '1rem',
            fontSize: 'clamp(1rem, 2.5vw, 1.75rem)',
            color: '#A1A1A6',
            fontWeight: 400,
            letterSpacing: '0.02em',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}
        >
          The future of high-fidelity audio.
        </p>
      </div>
    </section>
  );
}
