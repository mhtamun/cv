"use client";

import { useState } from "react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description?: string[];
  responsibilities?: string[];
  isHidden?: boolean;
}

interface ExperienceData {
  items: ExperienceItem[];
}

interface ExperienceProps {
  data: ExperienceData;
}

const Experience = ({ data }: ExperienceProps) => {
  const [showHidden, setShowHidden] = useState(false);

  const visibleItems = data.items.filter((item) => !item.isHidden);
  const hiddenItems = data.items.filter((item) => item.isHidden);

  return (
    <section id="experiences" className="py-20 px-4 bg-gradient-to-b from-white to-cyan-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Professional Experience</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          {/* Visible Experience Items */}
          {visibleItems.map((item, index) => (
            <div key={index} className="timeline-item animate-on-scroll">
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-cyan-600 font-medium">{item.company}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500 flex items-center">
                    <i className="far fa-calendar-alt mr-1 text-cyan-500"></i>
                    {item.period}
                  </span>
                </div>
                {item.description && (
                  <ul className="space-y-2 text-gray-600 mb-2">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start">
                        <i className="fas fa-check-circle text-cyan-500 mt-1 mr-2"></i>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.responsibilities && (
                  <ul className="space-y-2 text-gray-600">
                    {item.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <i className="fas fa-check-circle text-cyan-500 mt-1 mr-2"></i>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}

          {/* Hidden Experience Items */}
          {hiddenItems.length > 0 && (
            <div id="hidden-experience" className={`hidden-content ${showHidden ? "show" : ""}`}>
              {hiddenItems.map((item, index) => (
                <div key={index} className="timeline-item animate-on-scroll">
                  <div className="card p-6">
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-cyan-600 font-medium">{item.company}</span>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-500 flex items-center">
                        <i className="far fa-calendar-alt mr-1 text-cyan-500"></i>
                        {item.period}
                      </span>
                    </div>
                    {item.description && (
                      <ul className="space-y-2 text-gray-600 mb-2">
                        {item.description.map((desc, idx) => (
                          <li key={idx} className="flex items-start">
                            <i className="fas fa-check-circle text-cyan-500 mt-1 mr-2"></i>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.responsibilities && (
                      <ul className="space-y-2 text-gray-600">
                        {item.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <i className="fas fa-check-circle text-cyan-500 mt-1 mr-2"></i>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* View More Experience Button */}
          {hiddenItems.length > 0 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowHidden(!showHidden)}
                className="px-6 py-3 bg-white text-cyan-700 border border-cyan-200 rounded-full font-medium hover:shadow-lg hover:bg-cyan-50 transition-all duration-300 flex items-center mx-auto"
              >
                <i className={`fas ${showHidden ? "fa-minus-circle" : "fa-plus-circle"} mr-2`}></i>
                <span>{showHidden ? "Show Less" : "View More Experience"}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
