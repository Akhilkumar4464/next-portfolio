"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.querySelectorAll("a, button, .menu-button").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.querySelectorAll("a, button, .menu-button").forEach((el) => {
        el.removeEventListener("mouseenter", () => setHovered(true));
        el.removeEventListener("mouseleave", () => setHovered(false));
      });
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <>
      <style>{`
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          pointer-events: none;
          background-color: rgba(139, 92, 246, 0.8); /* violet color */
          transform: translate(-50%, -50%);
          transition: width 0.2s ease, height 0.2s ease, background-color 0.2s ease;
          z-index: 9999;
          mix-blend-mode: difference;
        }
        .custom-cursor.hovered {
          width: 40px;
          height: 40px;
          background-color: rgba(139, 92, 246, 0.5);
        }
      `}</style>
      <div
        className={`custom-cursor${hovered ? " hovered" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
}
