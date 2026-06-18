'use client'; 
import { useEffect } from "react";

export function spawnIconBurst(iconSrc: string) {
  const count = 12;

  for (let i = 0; i < count; i++) {
    const img = document.createElement("img");
    img.src = iconSrc;
    img.className = "burst-icon";

    // random size
    const size = Math.random() * 25 + 10;
    img.style.width = `${size}px`;

    // random start position (center of screen)
    img.style.left = `${Math.random() * window.innerWidth}px`;
    img.style.top = `${Math.random() * window.innerHeight}px`;

    // random movement direction
    img.style.setProperty("--rand-x", (Math.random() - 0.5).toString());
    img.style.setProperty("--rand-y", (Math.random() - 0.5).toString());

    // staggered delay (each icon disappears at different time)
    const delay = Math.random() * 0.5; // 0–0.5s
    img.style.animationDelay = `${delay}s`;

    document.body.appendChild(img);

    // remove after animation ends
    setTimeout(() => img.remove(), 5000 + delay * 1000);
  }
}

interface SpawnTrailOptions {
  throttleMs?:  number;  // minimum ms between spawns       (default: 50)
  minSize?:     number;  // smallest trail flower in px     (default: 16)
  maxSize?:     number;  // largest  trail flower in px     (default: 34)
  minDuration?: number;  // shortest animation duration (s) (default: 0.5)
  maxDuration?: number;  // longest  animation duration (s) (default: 0.9)
  className?:   string;  // CSS class on each flower div    (default: "cursor-flower")
  container?:   HTMLElement; // where flowers are appended  (default: document.body)
}

export function createTrailSpawner(options: SpawnTrailOptions = {}) {
  const {
    throttleMs  = 50,
    minSize     = 18,
    maxSize     = 40,
    minDuration = 0.5,
    maxDuration = 1,
    className   = "cursor-flower",
    container   = document.body,
  } = options;

  let lastSpawn = 0;

  return function spawnTrail(x: number, y: number): void {
    const now = performance.now();

    // Throttle gate: bail out if not enough time has passed since last spawn
    if (now - lastSpawn < throttleMs) return;
    lastSpawn = now;

    // Create the trail flower element
    const flower = document.createElement("div");
    flower.className = className;

    // Position it at the cursor coords.
    // CSS uses translate(-50%, -50%) to centre the element on this point.
    flower.style.left = `${x}px`;
    flower.style.top  = `${y}px`;

    // Randomise size so the trail feels organic, not mechanical
    const size = minSize + Math.random() * (maxSize - minSize);
    flower.style.width  = `${size}px`;
    flower.style.height = `${size}px`;

    // Randomise animation speed for the same organic variety
    const dur = minDuration + Math.random() * (maxDuration - minDuration);
    flower.style.animationDuration = `${dur}s`;

    container.appendChild(flower);

    flower.addEventListener("animationend", () => flower.remove(), { once: true });
  };
}

export default function Effects() {
       useEffect(() => {
  const spawnTrail = createTrailSpawner({
    throttleMs:  50,
    minSize:     18,
    maxSize:     40,
    className:   "cursor-flower bounce", // swap animation variant here
  });

  const handleMouseMove = (e: MouseEvent) => {
    spawnTrail(e.clientX, e.clientY);
  };

  document.addEventListener("mousemove", handleMouseMove);

  // cleanup — no flowers are leaked because animationend removes each one
  return () => document.removeEventListener("mousemove", handleMouseMove);
}, []);

  return null;
}