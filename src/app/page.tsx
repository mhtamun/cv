"use client";

import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Summary from "@/components/summary";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Interests from "@/components/interests";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";
import PrintView from "@/components/print-view";

import { portfolioData } from "@/data/portfolio-data";

export default function Home() {
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

  return (
    <>
      <div className="parallax-container">
        <ScrollProgress />

        {/* Background Layer (Furthest) */}
        <div className="parallax-layer parallax-bg">
          {/* Background Blobs */}
          <div
            className="blob bg-cyan-300"
            style={{ width: "600px", height: "600px", top: "10%", left: "-200px" }}
          ></div>
          <div
            className="blob bg-teal-300"
            style={{ width: "500px", height: "500px", top: "40%", right: "-150px" }}
          ></div>
          <div
            className="blob bg-cyan-200"
            style={{ width: "400px", height: "400px", top: "70%", left: "10%" }}
          ></div>
          <div
            className="blob bg-teal-200"
            style={{ width: "450px", height: "450px", top: "90%", right: "20%" }}
          ></div>
        </div>

        {/* Middle Layer */}
        <div className="parallax-layer parallax-mid">
          {/* Decorative Elements - Particles will be added by JS */}
          <div className="absolute top-[15%] left-[10%] w-20 h-20 rounded-full bg-cyan-100 opacity-40 animate-float"></div>
          <div className="absolute top-[25%] right-[15%] w-16 h-16 rounded-full bg-teal-100 opacity-40 animate-float delay-500"></div>
          <div className="absolute top-[60%] left-[20%] w-24 h-24 rounded-full bg-cyan-100 opacity-40 animate-float delay-700"></div>
          <div className="absolute top-[75%] right-[25%] w-20 h-20 rounded-full bg-teal-100 opacity-40 animate-float delay-300"></div>
        </div>

        {/* Content Layer (Closest) */}
        <div className="parallax-layer parallax-front">
          <Navbar navItems={portfolioData.navItems} />
          <Hero data={portfolioData.hero} />
          <Summary data={portfolioData.summary} />
          <Experience data={portfolioData.experience} />
          <Projects data={portfolioData.projects} />
          <Skills data={portfolioData.skills} />
          <Education data={portfolioData.education} />
          <Interests data={portfolioData.interests} />
          <Footer data={portfolioData.footer} />
        </div>
      </div>

      {/* Print View - Hidden by default, shown only when printing */}
      <div className="hidden print:block">
        <PrintView />
      </div>
    </>
  );
}
