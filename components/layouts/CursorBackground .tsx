"use client";
import { useEffect, useState } from "react";

export default function CursorBackground() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none z-0 hidden md:block fixed inset-0 transition-all duration-300 md:z-50"
      style={{
        background: `radial-gradient(300px at ${coords.x}px ${coords.y}px, 
          color-mix(in oklab, var(--accent) 8%, transparent),
          color-mix(in oklab, var(--accent) 5%, transparent),
          transparent 80%)`,
      }}
    ></div>
  );
}