"use client";

import { useEffect } from "react";

export default function ClientAnimations() {
  useEffect(() => {
    // Animate skill progress bars
    const animateProgressBars = () => {
      const progressBars = document.querySelectorAll(".skill-progress-bar");
      progressBars.forEach((bar) => {
        const width = bar.getAttribute("data-width");
        if (bar instanceof HTMLElement && width) {
          bar.style.width = width + "%";
        }
      });
    };

    // Animate elements on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");

            // If this is a skill section, animate the progress bars
            if (entry.target.classList.contains("skill-category")) {
              setTimeout(animateProgressBars, 300);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    // Create particles for background effect
    const createParticles = () => {
      const container = document.querySelector(".parallax-mid");
      if (!container) return;

      for (let i = 0; i < 30; i++) {
        const particle = document.createElement("div");
        particle.classList.add(
          "absolute",
          "rounded-full",
          "bg-cyan-100/20",
          "pointer-events-none",
          "animate-float"
        );

        // Random size between 5px and 15px
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;

        // Random animation duration between 10s and 30s
        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = `${duration}s`;

        // Random delay
        particle.style.animationDelay = `${Math.random() * 5}s`;

        // Add to the middle layer
        container.appendChild(particle);
      }
    };

    createParticles();

    return () => {
      observer.disconnect();
    };
  }, []);

  return null; // This component only handles side effects
}
