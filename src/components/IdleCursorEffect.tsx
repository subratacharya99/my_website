import React, { useEffect, useState, useRef } from 'react';
import './IdleCursorEffect.css';

interface IdleEffect {
  x: number;
  y: number;
  id: number;
  timestamp: number;
}

const IdleCursorEffect: React.FC = () => {
  const [effects, setEffects] = useState<IdleEffect[]>([]);
  const cursorPositionRef = useRef({ x: 0, y: 0 });
  const idleTimeoutRef = useRef<NodeJS.Timeout>();
  const effectIntervalRef = useRef<NodeJS.Timeout>();
  const cleanupIntervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorPositionRef.current = { x: e.clientX, y: e.clientY };
      
      // Clear existing timers
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
      if (effectIntervalRef.current) {
        clearInterval(effectIntervalRef.current);
      }
      
      // Start new idle timeout (3 seconds - longer delay)
      idleTimeoutRef.current = setTimeout(() => {
        startIdleEffects();
      }, 3000);
    };

    const startIdleEffects = () => {
      // Generate effects every 1500ms (less frequent)
      effectIntervalRef.current = setInterval(() => {
        const now = Date.now();
        const pos = cursorPositionRef.current;
        
        setEffects(prev => [
          ...prev,
          {
            x: pos.x,
            y: pos.y,
            id: now + Math.random(),
            timestamp: now
          }
        ]);
      }, 1500);
    };

    // Cleanup old effects every 100ms
    const cleanupOldEffects = () => {
      const now = Date.now();
      setEffects(prev => prev.filter(effect => {
        const age = now - effect.timestamp;
        return age < 3000; // Effects last longer but are more subtle
      }));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    cleanupIntervalRef.current = setInterval(cleanupOldEffects, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
      if (effectIntervalRef.current) {
        clearInterval(effectIntervalRef.current);
      }
      if (cleanupIntervalRef.current) {
        clearInterval(cleanupIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="idle-cursor-effects">
      {effects.map(effect => {
        const age = Date.now() - effect.timestamp;
        const progress = Math.min(age / 3000, 1); // Slower progression
        
        return (
          <div key={effect.id} className="idle-effects-container">
            {/* Multiple concentric circles */}
            {[...Array(3)].map((_, index) => {
              const delay = index * 0.3; // Staggered start times
              const adjustedProgress = Math.max(0, progress - delay);
              const normalizedProgress = Math.min(adjustedProgress / (1 - delay), 1);
              
              return (
                <div
                  key={`ring-${index}`}
                  className={`idle-ring idle-ring--${index}`}
                  style={{
                    left: effect.x,
                    top: effect.y,
                    transform: `translate(-50%, -50%) scale(${normalizedProgress * (1.5 + index * 0.5)})`,
                    opacity: (1 - normalizedProgress) * (0.3 - index * 0.05),
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default IdleCursorEffect; 