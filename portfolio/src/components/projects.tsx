"use client";

import { useState } from "react";

interface ProjectItem {
  title: string;
  description: string;
  category: string;
  icon: string;
  tags: string[];
  isHidden?: boolean;
}

interface ProjectsData {
  items: ProjectItem[];
  categories: {
    id: string;
    name: string;
  }[];
}

interface ProjectsProps {
  data: ProjectsData;
}

const Projects = ({ data }: ProjectsProps) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showHidden, setShowHidden] = useState(false);

  const visibleProjects = data.items.filter(item => !item.isHidden);
  const hiddenProjects = data.items.filter(item => item.isHidden);

  const filteredProjects = activeFilter === "all" 
    ? visibleProjects 
    : visibleProjects.filter(project => project.category === activeFilter);

  const filteredHiddenProjects = activeFilter === "all" 
    ? hiddenProjects 
    : hiddenProjects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Featured Projects</span>
        </h2>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">          
          {data.categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-cyan-600 text-white"
                  : "bg-white text-cyan-700 border border-cyan-200 hover:bg-cyan-50"
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
          {/* Visible Projects */}
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="project-card animate-on-scroll h-64 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl overflow-hidden"
              data-category={project.category}
            >
              <div className="h-full flex items-center justify-center text-white text-5xl">
                <i className={`fas ${project.icon}`}></i>
              </div>
              <div className="project-content bg-white text-gray-800">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Hidden Projects */}
          {hiddenProjects.length > 0 && (
            <div id="hidden-projects" className={`hidden-content md:col-span-2 lg:col-span-3 ${showHidden ? 'show' : ''}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredHiddenProjects.map((project, index) => (
                  <div
                    key={index}
                    className="project-card animate-on-scroll h-64 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl overflow-hidden"
                    data-category={project.category}
                  >
                    <div className="h-full flex items-center justify-center text-white text-5xl">
                      <i className={`fas ${project.icon}`}></i>
                    </div>
                    <div className="project-content bg-white text-gray-800">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* View More Projects Button */}
          {hiddenProjects.length > 0 && (
            <div className="md:col-span-2 lg:col-span-3 mt-8 text-center">
              <button
                onClick={() => setShowHidden(!showHidden)}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center mx-auto"
              >
                <i className={`fas ${showHidden ? 'fa-minus-circle' : 'fa-project-diagram'} mr-2`}></i>
                <span>{showHidden ? 'Show Less' : 'View All Projects'}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;