import { portfolioData } from "@/data/portfolio-data";

export default function PrintView() {
  return (
    <div className="print-container p-8 max-w-[210mm] mx-auto bg-white">
      {/* Header */}
      <div className="text-center mb-8 border-b-2 border-gray-200 pb-6">
        <h1 className="text-4xl font-bold mb-2">{portfolioData.hero.name}</h1>
        <p className="text-2xl text-gray-600 mb-4">{portfolioData.hero.title}</p>
        <div className="flex justify-center space-x-6 text-gray-600">
          <p className="flex items-center">
            <i className="fas fa-map-marker-alt mr-2"></i>
            {portfolioData.summary.contactInfo.location}
          </p>
          <p className="flex items-center">
            <i className="fas fa-envelope mr-2"></i>
            {portfolioData.summary.contactInfo.email}
          </p>
          {/* <p className="flex items-center">
            <i className="fab fa-linkedin mr-2"></i>
            {portfolioData.summary.contactInfo.linkedin}
          </p> */}
          <p className="flex items-center">
            <i className="fab fa-github mr-2"></i>
            {portfolioData.summary.contactInfo.github}
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-3">Professional Summary</h2>
        <p className="text-gray-700 leading-relaxed">{portfolioData.summary.text}</p>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-4">
          Professional Experience
        </h2>
        {portfolioData.experience.items.map((exp, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-gray-600 font-medium">{exp.company}</p>
              </div>
              <p className="text-gray-600 font-medium">{exp.period}</p>
            </div>
            {exp.description && (
              <p className="text-gray-700 leading-relaxed mb-2">{exp.description}</p>
            )}
            {exp.responsibilities && (
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {resp}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-4">Education</h2>
        {portfolioData.education.items.slice(0, 2).map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold flex items-center">
                  <i className={`fas ${edu.icon} mr-2 text-gray-600`}></i>
                  {edu.degree}
                </h3>
                <p className="text-gray-600">{edu.institution}</p>
              </div>
              <p className="text-gray-600">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-4">Technical Skills</h2>
        <ul className="grid grid-cols-1 gap-2 text-sm">
          {portfolioData.skills.categories.map((category, index) => (
            <li key={index} className="mb-1">
              <span className="font-semibold">{category.title}:</span>{" "}
              {category.mainSkills.map((skill) => skill.name).join(", ")}
              {", "}
              {category.otherSkills.map((otherSkill) => otherSkill.skills.join(", "))}
            </li>
          ))}
        </ul>
      </div>

      {/* Projects */}
      {/* <div className="mb-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-4">Projects</h2>
        <div className="grid grid-cols-2 gap-6">
          {portfolioData.projects.items.map((project, index) => (
            <div key={index} className="mb-4 p-4 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-bold mb-2 flex items-center">
                <i className={`fas ${project.icon} mr-2 text-gray-600`}></i>
                {project.title}
              </h3>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Interests */}
      <div>
        <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-4">Interests</h2>
        <div className="flex flex-wrap gap-4">
          {portfolioData.interests.items.map((interest, index) => (
            <div key={index} className="flex items-center px-4 py-2 bg-gray-100 rounded-full">
              <i className={`fas ${interest.icon} mr-2 text-gray-600`}></i>
              <span className="text-gray-700">{interest.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* References */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-4">References</h2>
        <div className="space-y-4 text-gray-700 text-sm">
          <div>
            <span className="font-semibold">Moinul Islam</span>
            <br />
            Co-founder & CEO, Green Feather Technologies
            <br />
            P: +880 1711-325673
            <br />
            E: moinul.islam@greenfeather.tech
          </div>
          <div>
            <span className="font-semibold">Mushraful Haque (Anik)</span>
            <br />
            DoT, Dynamic Solution Innovators Ltd.
            <br />
            P: +880 1622-688231
            <br />
            E: mushraful.hoque@dsinnovators.com
          </div>
        </div>
      </div>
    </div>
  );
}
