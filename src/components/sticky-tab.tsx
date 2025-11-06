"use client";

import { useEffect, useState } from "react";

const StickyTab = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Find the hero and footer sections by ID
      const heroSection = document.getElementById("hero");
      const footerSection = document.getElementById("footer");
      
      if (heroSection && footerSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const footerRect = footerSection.getBoundingClientRect();
        const heroBottom = heroRect.bottom;
        const footerTop = footerRect.top;
        const viewportHeight = window.innerHeight;
        
        // Check if hero is scrolled past
        const heroScrolledPast = heroBottom < 0;
        
        // Check if footer is in view (footer top is within viewport)
        const footerInView = footerTop < viewportHeight;
        
        if (heroScrolledPast && !footerInView) {
          setIsVisible(true);
          setOpacity(1);
        } else if (footerInView && heroScrolledPast) {
          // Gradually fade out as footer comes into view
          const footerProgress = Math.max(0, Math.min(1, (viewportHeight - footerTop) / viewportHeight));
          setOpacity(1 - footerProgress);
          setIsVisible(true); // Keep visible but with reduced opacity
        } else {
          setIsVisible(false);
          setOpacity(0);
        }
      } else if (heroSection) {
        // Fallback if footer not found
        const heroRect = heroSection.getBoundingClientRect();
        const heroBottom = heroRect.bottom;
        
        if (heroBottom < 0) {
          setIsVisible(true);
          setOpacity(1);
        } else {
          setIsVisible(false);
          setOpacity(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className="fixed left-12 top-1/2 z-40 transition-opacity duration-500 ease-in-out" 
      style={{ 
        transform: 'translateY(-50%)',
        opacity: opacity
      }}
    >
      <a
        href="#"
        className="flex items-center text-[var(--color-light-blue)] transition-all hover:text-[var(--color-dark)]"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
        aria-label="We 💙 Car Insurance"
      >
        <span className="text-sm font-medium">
          We<span style={{ transform: 'rotate(90deg)', display: 'inline-block', margin: '0.2em 0' }}>💙</span>  Car Insurance
        </span>
      </a>
    </div>
  );
};

export { StickyTab };

