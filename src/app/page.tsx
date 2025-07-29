// Main Portfolio Page (SEO handled in layout.tsx)
// This page showcases the CV/Portfolio of Maruf Hossain

import ClientAnimations from "@/components/client-animations";
import Education from "@/components/education";
import Experience from "@/components/experiences";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Interests from "@/components/interests";
import Navbar from "@/components/navbar";
import PrintView from "@/components/print-view";
import Projects from "@/components/projects";
import ScrollProgress from "@/components/scroll-progress";
import Skills from "@/components/skills";
import Summary from "@/components/summary";

import { portfolioData } from "@/data/portfolio-data";

export default function Home() {
  return (
    <>
      {/* Client-side animations component */}
      <ClientAnimations />

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
          {/* Decorative Elements - Particles will be added by ClientAnimations */}
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
