import { portfolioData } from "@/data/portfolio-data";

export default function PrintView() {
  function formatPeriod(period: string) {
    // Try to extract months and years, fallback to original if not possible
    // Handles formats like 'March 2024 – Present', 'June 2012 – May 2016', etc.
    if (!period) return "";
    const regex = /([A-Za-z]+)?\s?(\d{4})\s?[–-]\s?([A-Za-z]+)?\s?(\d{4}|Present)/;
    const match = period.match(regex);
    if (match) {
      const startMonth = match[1] ? match[1].slice(0, 3) : "";
      const startYear = match[2];
      const endMonth = match[3] ? match[3].slice(0, 3) : "";
      const endYear = match[4];
      return `${startMonth ? startMonth + " " : ""}${startYear} – ${
        endMonth ? endMonth + " " : ""
      }${endYear}`;
    }
    return period;
  }

  return (
    <div className="print-container p-6 max-w-[210mm] mx-auto bg-white text-sm font-sans">
      {/* Header */}
      <div className="mb-6 border-b border-gray-300 pb-4 text-left">
        <h1 className="text-2xl font-bold mb-1 font-sans">{portfolioData.hero.name}</h1>
        <p className="text-lg text-gray-600 mb-3 font-sans">{portfolioData.hero.title}</p>
        <div className="mb-2 text-xs text-gray-600">
          <div className="mb-1">
            <span>{portfolioData.summary.contactInfo.location}</span>
          </div>
          <div className="mb-1">
            <span>{portfolioData.summary.contactInfo.email}</span>
          </div>
          <div className="mb-1">
            <span>linkedin.com/in/mhtamun</span>
          </div>
          <div className="mb-1">
            <span>github.com/mhtamun</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-5">
        <h2 className="text-lg font-bold border-b border-gray-300 mb-2 pb-1 font-sans">Summary</h2>
        <p className="text-gray-700 leading-relaxed text-sm">{portfolioData.summary.text}</p>
      </div>

      {/* Experience */}
      <div className="mb-5">
        <h2 className="text-lg font-bold border-b border-gray-300 mb-3 pb-1 font-sans">
          Work Experience
        </h2>
        {portfolioData.experience.items.map((exp, index) => (
          <div key={index} className="mb-4 avoid-break">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="text-base font-bold">{exp.title}</h3>
                <p className="text-gray-600 font-medium text-sm">{exp.company}</p>
              </div>
              <p className="text-gray-600 font-medium text-sm">{formatPeriod(exp.period)}</p>
            </div>
            {exp.description && (
              <p className="text-gray-700 leading-relaxed text-sm">{exp.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mb-5">
        <h2 className="text-lg font-bold border-b border-gray-300 mb-3 pb-1 font-sans">
          Education
        </h2>
        {portfolioData.education.items.slice(0, 2).map((edu, index) => (
          <div key={index} className="mb-3 avoid-break">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-bold flex items-center">{edu.degree}</h3>
                <p className="text-gray-600 text-sm">{edu.institution}</p>
              </div>
              <p className="text-gray-600 text-sm">{formatPeriod(edu.period)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mb-5">
        <h2 className="text-lg font-bold border-b border-gray-300 mb-2 pb-1 font-sans">Skills</h2>
        <div className="text-xs">
          {portfolioData.skills.categories.map((category, index) => {
            const mainSkills = category.mainSkills.map((skill) => skill.name);
            return (
              <div key={index} className="mb-1">
                <span className="font-semibold">{category.title}:</span> {mainSkills.join(", ")}
              </div>
            );
          })}
          {/* All other skills combined at the end */}
          {(() => {
            const allOtherSkills = portfolioData.skills.categories
              .flatMap((category) => category.otherSkills?.map((skill) => skill.name) || [])
              .filter(Boolean);
            return allOtherSkills.length > 0 ? (
              <div className="mt-2">
                <span className="font-semibold">Other Skills:</span> {allOtherSkills.join(", ")}
              </div>
            ) : null;
          })()}
        </div>
      </div>

      {/* Projects */}
      <div className="mb-5">
        <h2 className="text-lg font-bold border-b border-gray-300 mb-2 pb-1">Projects</h2>
        <div className="grid grid-cols-1 gap-2">
          {portfolioData.projects.items.map((project, index) => (
            <div key={index} className="mb-1 avoid-break">
              <h3 className="text-sm font-bold mb-1 flex items-center">{project.title}</h3>
              <p className="text-gray-700 text-xs mb-1 leading-snug">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-1 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interests */}
      {/*
      <div className="mb-5">
        <h2 className="text-lg font-bold border-b border-gray-300 mb-2 pb-1">Interests</h2>
        <div className="flex flex-wrap gap-2">
          {portfolioData.interests.items.map((interest, index) => (
            <div key={index} className="flex items-center px-2 py-1 bg-gray-100 rounded text-xs">
              <span className="text-gray-700">{interest.name}</span>
            </div>
          ))}
        </div>
      </div>
      */}

      {/* References */}
      {/*
      <div className="mt-5">
        <h2 className="text-lg font-bold border-b border-gray-300 mb-2 pb-1">References</h2>
        <div className="space-y-3 text-gray-700 text-xs">
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
      */}
    </div>
  );
}
