import React, { useRef, useEffect, useState } from "react";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // optional delay in ms
}

export default function FadeInOnScroll({ children, className = "", delay = 0 }: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`fade-in-on-scroll ${isVisible ? "fade-in-on-scroll--visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
} 