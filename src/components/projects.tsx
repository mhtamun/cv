"use client";

import Link from "next/link";

interface ProjectItem {
  title: string;
  description: string;
  category: string;
  icon: string;
  tags: string[];
  timeline: {
    start: string;
    end: string;
  };
  company: string;
  url?: string;
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
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Featured Projects</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
          {data.items.map((project, index) => {
            const CardContent = (
              <div className="project-card animate-on-scroll bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 ">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center mr-4">
                      <i className={`fas ${project.icon} text-white text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                      <p className="text-sm text-gray-600">{project.company}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500">
                      {project.timeline.start} - {project.timeline.end}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-cyan-50 text-cyan-700 px-2 py-1 rounded-full border border-cyan-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );

            return project.url ? (
              <Link
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
                tabIndex={0}
                aria-label={`Visit project: ${project.title}`}
              >
                {CardContent}
              </Link>
            ) : (
              <div key={index}>{CardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
