"use client"

import React, { useState, useEffect, useRef } from 'react';

const socialPlatforms = [
  {
    name: 'LinkedIn',
    description: 'Professional Network',
    link: '#',
    iconPath: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    gradientStart: '#2563eb',
    gradientEnd: '#60a5fa',
    glowColor: 'rgba(59,130,246,0.45)',
  },
  {
    name: 'GitHub',
    description: 'Code Repository',
    link: '#',
    iconPath: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    gradientStart: '#374151',
    gradientEnd: '#6b7280',
    glowColor: 'rgba(107,114,128,0.45)',
  },
  {
    name: 'Twitter',
    description: 'Social Updates',
    link: '#',
    iconPath: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    gradientStart: '#1e293b',
    gradientEnd: '#475569',
    glowColor: 'rgba(71,85,105,0.45)',
  },
  {
    name: 'Instagram',
    description: 'Visual Stories',
    link: '#',
    iconPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z',
    gradientStart: '#9333ea',
    gradientEnd: '#ec4899',
    glowColor: 'rgba(219,39,119,0.45)',
    gradientMid: '#f97316',
  },
  {
    name: 'Discord',
    description: 'Community Chat',
    link: '#',
    iconPath: 'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z',
    gradientStart: '#4f46e5',
    gradientEnd: '#9333ea',
    glowColor: 'rgba(99,102,241,0.45)',
  },
  {
    name: 'YouTube',
    description: 'Video Content',
    link: '#',
    iconPath: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    gradientStart: '#dc2626',
    gradientEnd: '#f87171',
    glowColor: 'rgba(239,68,68,0.45)',
  },
];

interface SocialCardProps {
  platform: typeof socialPlatforms[0];
  index: number;
  isLoaded: boolean;
}

const SocialCard: React.FC<SocialCardProps> = ({ platform, index, isLoaded }) => {
  const [hovered, setHovered] = useState(false);

  const iconGradient = platform.gradientMid
    ? `linear-gradient(135deg, ${platform.gradientStart}, ${platform.gradientMid}, ${platform.gradientEnd})`
    : `linear-gradient(135deg, ${platform.gradientStart}, ${platform.gradientEnd})`;

  return (
    <a
      href={platform.link}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${index * 100}ms, transform 0.7s ease ${index * 100}ms`,
        textDecoration: 'none',
        display: 'block',
      }}
    >
      {/* Card */}
      <div
        style={{
          position: 'relative',
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '1rem',
          padding: '2rem',
          border: hovered ? '1px solid rgba(255,255,255,0.18)' : '1px solid rgba(255,255,255,0.07)',
          overflow: 'hidden',
          transform: hovered ? 'scale(1.04) translateY(-4px)' : 'scale(1) translateY(0)',
          transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), border 0.3s ease, box-shadow 0.4s ease',
          boxShadow: hovered ? `0 20px 60px ${platform.glowColor}, 0 0 0 1px rgba(255,255,255,0.05)` : '0 4px 20px rgba(0,0,0,0.4)',
          cursor: 'pointer',
        }}
      >
        {/* Hover gradient wash */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: iconGradient,
            opacity: hovered ? 0.08 : 0,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none',
          }}
        />

        {/* Shimmer sweep */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)',
            transform: hovered ? 'translateX(100%)' : 'translateX(-100%)',
            transition: hovered ? 'transform 0.8s ease' : 'none',
            pointerEvents: 'none',
          }}
        />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Icon bubble */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              background: iconGradient,
              marginBottom: '1.25rem',
              transform: hovered ? 'rotate(6deg) scale(1.1)' : 'rotate(0deg) scale(1)',
              transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
              boxShadow: hovered ? `0 8px 24px ${platform.glowColor}` : 'none',
            }}
          >
            <svg viewBox="0 0 24 24" fill="white" style={{ width: '26px', height: '26px' }}>
              <path d={platform.iconPath} />
            </svg>
          </div>

          <h3 style={{ color: '#f8fafc', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>
            {platform.name}
          </h3>
          <p style={{ color: hovered ? '#94a3b8' : '#64748b', fontSize: '0.875rem', transition: 'color 0.3s ease', marginBottom: '1.25rem' }}>
            {platform.description}
          </p>

          {/* Connect row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: hovered ? '#e2e8f0' : '#475569',
              fontSize: '0.85rem',
              fontWeight: 500,
              transition: 'color 0.3s ease',
            }}
          >
            <span>Connect</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              style={{
                width: '14px',
                height: '14px',
                transform: hovered ? 'translateX(4px)' : 'translateX(0)',
                transition: 'transform 0.3s ease',
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};

export const ProfessionalConnect = () => {
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(t);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 2rem',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #020817 0%, #0f172a 50%, #020817 100%)',
      }}
    >
      {/* Ambient orbs */}
      <div style={{
        position: 'absolute', top: '10%', left: '5%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
        animation: 'gitPulse 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(147,51,234,0.15) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
        animation: 'gitPulse 8s ease-in-out infinite 2s',
      }} />

      {/* Dot-grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
      }} />

      {/* Mouse follow light */}
      <div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '480px', height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(147,51,234,0.18) 0%, transparent 65%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          transform: `translate(${mousePos.x - 240}px, ${mousePos.y - 240}px)`,
          transition: 'transform 0.15s ease-out',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 1rem',
            borderRadius: '999px',
            border: '1px solid rgba(99,102,241,0.35)',
            background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(147,51,234,0.12))',
            marginBottom: '1.5rem',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #818cf8, #a78bfa)',
              boxShadow: '0 0 6px rgba(129,140,248,0.8)',
            }} />
            <span style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              background: 'linear-gradient(90deg, #818cf8, #c084fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              Connect &amp; Collaborate
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '1.25rem',
            background: 'linear-gradient(180deg, #f8fafc 40%, #94a3b8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Get In Touch
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#64748b',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Join our vibrant community across multiple platforms and stay connected with the latest updates
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          width: '100%',
        }}>
          {socialPlatforms.map((platform, i) => (
            <SocialCard key={platform.name} platform={platform} index={i} isLoaded={isLoaded} />
          ))}
        </div>

        {/* CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 1s ease 0.7s, transform 1s ease 0.7s',
        }}>
          <CtaButton />
        </div>
      </div>

      <style>{`
        @keyframes gitPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
      `}</style>
    </div>
  );
};

const CtaButton = () => {
  const [hov, setHov] = useState(false);
  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.6rem',
        padding: '0.85rem 2.2rem',
        borderRadius: '999px',
        border: 'none',
        cursor: 'pointer',
        background: 'linear-gradient(135deg, #4f46e5, #9333ea)',
        color: '#fff',
        fontWeight: 600,
        fontSize: '0.95rem',
        letterSpacing: '0.02em',
        overflow: 'hidden',
        transform: hov ? 'scale(1.06)' : 'scale(1)',
        boxShadow: hov
          ? '0 10px 40px rgba(147,51,234,0.45), 0 2px 8px rgba(0,0,0,0.3)'
          : '0 4px 20px rgba(99,102,241,0.3)',
        transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease',
        fontFamily: 'inherit',
      }}
    >
      {/* Shimmer */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.22) 50%, transparent 65%)',
        transform: hov ? 'translateX(100%)' : 'translateX(-100%)',
        transition: hov ? 'transform 0.6s ease' : 'none',
      }} />
      <span style={{ position: 'relative', zIndex: 1 }}>Explore All Platforms</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        style={{
          width: '16px', height: '16px', position: 'relative', zIndex: 1,
          transform: hov ? 'translateX(3px)' : 'translateX(0)',
          transition: 'transform 0.3s ease',
        }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </button>
  );
};
