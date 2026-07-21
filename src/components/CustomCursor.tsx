"use client";
import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setVisible(true);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || !visible) return;

    let mx = -100;
    let my = -100;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.translate = `${mx - 16}px ${my - 16}px`;
    };

    const onLeave = () => {
      cursor.style.opacity = "0";
    };

    const onEnter = () => {
      cursor.style.opacity = "1";
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 32,
        height: 32,
        zIndex: 99999,
        pointerEvents: "none",
        transition: "opacity 0.3s ease",
        translate: "-100px -100px",
      }}
    >
      <svg width="32" height="32" viewBox="0 0 2000 2000" fill="none">
        <path fill="#eb601b" d="M959.95,730.55l728.77-283.58-99.29,138.56c-60.35,84.22-143.89,149.06-240.45,186.63l-567.6,220.86,43.3-122.8c22.58-64.04,71.98-115.05,135.26-139.67Z"/>
        <path fill="#eb601b" d="M621.04,813.43h0s-88.45,34.42-88.45,34.42c-99.22,38.61-211.89,1.57-268.86-88.37h0s215.16-83.72,215.16-83.72c86.76-33.76,173.11,49.88,142.15,137.67Z"/>
        <path fill="#eb601b" d="M1814.26,639.73l-99.29,138.55c-60.35,84.21-143.89,149.05-240.44,186.62l-144.15,56.09-176.56,68.7-471.18,183.32-252.81,98.37c-104.28,40.58-208.09-59.96-170.88-165.49l82.8-234.8,259.25-100.87-98.75,280.01,259.25-100.87,647.75-252.04,405-157.58Z"/>
        <polygon fill="#eb601b" points="1153.82 1089.69 682.63 1273.03 682.64 1273.01 1153.82 1089.69"/>
        <path fill="#eb601b" d="M1208.56,1116.98l-99.29,138.56c-60.35,84.21-143.89,149.06-240.45,186.63l-284.93,110.87,78.88-223.68,545.79-212.38Z"/>
      </svg>
    </div>
  );
}
