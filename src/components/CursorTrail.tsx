import React, { useEffect, useState, useRef } from 'react';
import './CursorTrail.css';

interface TrailDot {
  x: number;
  y: number;
  id: number;
  timestamp: number;
}

const CursorTrail: React.FC = () => {
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const cleanupIntervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      setTrail(prevTrail => {
        const newTrail = [
          { x: e.clientX, y: e.clientY, id: now + Math.random(), timestamp: now },
          ...prevTrail.slice(0, 19) // Keep 20 dots in trail
        ];
        return newTrail;
      });
    };

    // Cleanup old dots every 50ms
    const cleanupOldDots = () => {
      const now = Date.now();
      setTrail(prevTrail => {
        return prevTrail.filter(dot => {
          const age = now - dot.timestamp;
          return age < 1000; // Remove dots older than 1 second
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    cleanupIntervalRef.current = setInterval(cleanupOldDots, 50);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (cleanupIntervalRef.current) {
        clearInterval(cleanupIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="cursor-trail">
      {trail.map((dot, index) => {
        const age = Date.now() - dot.timestamp;
        const ageRatio = Math.min(age / 1000, 1); // 0 to 1 over 1 second
        
        return (
          <div
            key={dot.id}
            className="trail-dot"
            style={{
              left: dot.x - 4,
              top: dot.y - 4,
              opacity: Math.max(0, (1 - ageRatio) * (1 - (index * 0.05))),
              transform: `scale(${Math.max(0.1, (1 - ageRatio) * (1 - (index * 0.04)))})`,
            }}
          />
        );
      })}
    </div>
  );
};

export default CursorTrail; 