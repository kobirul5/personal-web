"use client";
import React, { useMemo, useRef, useEffect } from 'react';
import './ShatterImage.css';

interface ShatterImageProps {
  imageUrl: string;
  rows?: number;
  cols?: number;
}

export default function ShatterImage({
  imageUrl,
  rows = 20,
  cols = 20
}: ShatterImageProps) {

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let currentMouseX = -1000;
    let currentMouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;
    let isMouseInside = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
      isMouseInside = true;
    };

    const handleMouseLeave = () => {
      isMouseInside = false;
      targetMouseX = -1000;
      targetMouseY = -1000;
    };

    const updateBoxes = () => {
      if (!containerRef.current) return;

      currentMouseX += (targetMouseX - currentMouseX) * 0.2;
      currentMouseY += (targetMouseY - currentMouseY) * 0.2;

      const boxes = containerRef.current.querySelectorAll('.shatter-box');
      const radius = 90; // Tighter radius to match screenshot
      const containerW = containerRef.current.offsetWidth;
      const containerH = containerRef.current.offsetHeight;

      boxes.forEach((box: Element) => {
        const htmlBox = box as HTMLElement;
        const col = parseFloat(htmlBox.style.getPropertyValue('--col'));
        const row = parseFloat(htmlBox.style.getPropertyValue('--row'));
        const boxW = containerW / cols;
        const boxH = containerH / rows;

        const boxX = (col * boxW) + (boxW / 2);
        const boxY = (row * boxH) + (boxH / 2);

        const dx = boxX - currentMouseX;
        const dy = boxY - currentMouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let intensity = 0;

        if (dist < radius && dist > 0 && isMouseInside) {
          // Sharp curve to make a defined hole
          intensity = 1 - Math.pow(dist / radius, 1.2);
          if (intensity > 1) intensity = 1;
        }

        const currentIntensity = htmlBox.getAttribute('data-intensity');
        const newIntensity = intensity.toFixed(3);

        if (currentIntensity !== newIntensity) {
          htmlBox.style.setProperty('--intensity', newIntensity);
          htmlBox.setAttribute('data-intensity', newIntensity);
        }
      });

      animationFrameId = requestAnimationFrame(updateBoxes);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      animationFrameId = requestAnimationFrame(updateBoxes);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [cols, rows]);

  const boxes = useMemo(() => {
    const tempBoxes = [];
    const pseudoRandom = (seed: number) => {
      const x = Math.sin(seed * 9999) * 10000;
      return x - Math.floor(x);
    };

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const index = i * cols + j + 1;
        tempBoxes.push({
          id: `${i}-${j}`,
          row: i,
          col: j,
          // Deterministic values for a slight jagged pixel effect at the edges without breaking hydration
          randomX: pseudoRandom(index) * 2 - 1,
          randomY: pseudoRandom(index * 13) * 2 - 1,
        });
      }
    }
    return tempBoxes;
  }, [rows, cols]);

  return (
    <div
      ref={containerRef}
      className="shatter-wrapper"
      style={{
        '--rows': rows,
        '--cols': cols,
      } as React.CSSProperties}
    >
      {boxes.map((box) => (
        <div
          key={box.id}
          className="shatter-box"
          data-intensity="0"
          style={{
            backgroundImage: `url(${imageUrl})`,
            '--col': box.col,
            '--row': box.row,
            '--randomX': box.randomX,
            '--randomY': box.randomY,
            '--intensity': '0'
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
