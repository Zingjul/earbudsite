import React, { useEffect, useRef } from 'react';

/**
 * ScrollObserver handles the visibility classes for browsers that 
 * do not support the native CSS animation-timeline API.
 */
export default function ScrollObserver() {
  useEffect(() => {
    // Skip if browser supports native scroll animations
    if (window.CSS && CSS.supports('animation-timeline', 'view()')) {
      return;
    }

    const sections = document.querySelectorAll('.snapping-content');
    
    const observerOptions = {
      root: null,
      threshold: 0.2, // 20% visibility to trigger focus
      rootMargin: '-10% 0px -10% 0px' // Add some margin to the focus zone
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const rect = entry.boundingClientRect;
        const viewportHeight = window.innerHeight;
        
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          entry.target.classList.remove('out-view-top');
        } else {
          entry.target.classList.remove('in-view');
          
          // Determine if it exited via the top or bottom
          if (rect.top < 0) {
            entry.target.classList.add('out-view-top');
          } else {
            entry.target.classList.remove('out-view-top');
          }
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return null; // This component doesn't render anything
}
