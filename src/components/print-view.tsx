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
    <div
      className="print-container"
      style={{
        padding: "16px",
        maxWidth: "185mm",
        margin: "0 auto",
        background: "white",
        fontSize: "10.5pt",
        fontFamily: "Arial, Calibri, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "12px",
          borderBottom: "1px solid #d1d5db",
          paddingBottom: "8px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "18pt",
              fontWeight: 700,
              marginBottom: "2px",
              fontFamily: "inherit",
            }}
          >
            {portfolioData.hero.name}
          </h1>
          <p
            style={{
              fontSize: "12pt",
              color: "#4b5563",
              marginBottom: "6px",
              fontFamily: "inherit",
            }}
          >
            {portfolioData.hero.title}
          </p>
        </div>
        <div style={{ textAlign: "right", fontSize: "9pt", color: "#4b5563", minWidth: "160px" }}>
          <div>{portfolioData.summary.contactInfo.location}</div>
          <div>{portfolioData.summary.contactInfo.email}</div>
          <div>linkedin.com/in/mhtamun</div>
          <div>github.com/mhtamun</div>
        </div>
      </div>

      {/* Summary */}
      <div style={{ marginBottom: "10px" }}>
        <h2
          style={{
            fontSize: "12pt",
            fontWeight: 700,
            borderBottom: "1px solid #d1d5db",
            marginBottom: "4px",
            paddingBottom: "2px",
            fontFamily: "inherit",
          }}
        >
          Summary
        </h2>
        <p style={{ color: "#374151", lineHeight: 1.4, fontSize: "10.5pt" }}>
          {portfolioData.summary.text}
        </p>
      </div>

      {/* Work Experience */}
      <div style={{ marginBottom: "10px" }}>
        <h2
          style={{
            fontSize: "12pt",
            fontWeight: 700,
            borderBottom: "1px solid #d1d5db",
            marginBottom: "6px",
            paddingBottom: "2px",
            fontFamily: "inherit",
          }}
        >
          Work Experience
        </h2>
        {portfolioData.experiences.items.map((exp, index) => (
          <div key={index} style={{ marginBottom: "8px", pageBreakInside: "avoid" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "2px",
              }}
            >
              <div>
                <h3 style={{ fontSize: "10.5pt", fontWeight: 700, margin: 0 }}>{exp.title}</h3>
                <div style={{ color: "#4b5563", fontWeight: 500, fontSize: "10pt" }}>
                  {exp.company}
                </div>
              </div>
              <div style={{ color: "#4b5563", fontWeight: 500, fontSize: "10pt" }}>
                {formatPeriod(exp.period)}
              </div>
            </div>
            {exp.description && Array.isArray(exp.description) && (
              <ul
                style={{
                  marginLeft: "1.1em",
                  marginTop: 0,
                  marginBottom: 0,
                  paddingLeft: 0,
                  listStyleType: "disc",
                }}
              >
                {exp.description.slice(0, 3).map((desc, idx) => (
                  <li
                    key={idx}
                    style={{
                      marginBottom: "0.15em",
                      color: "#374151",
                      fontSize: "10pt",
                      lineHeight: "1.4",
                    }}
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            )}
            {/* Show related projects for this experience */}
            {(() => {
              const relatedProjects = portfolioData.projects.items.filter(
                (project) => project.company === exp.company
              );
              if (relatedProjects.length > 0) {
                return (
                  <div style={{ marginTop: "0.2em", fontSize: "10pt", color: "#2563eb" }}>
                    <span style={{ fontWeight: 500 }}>Projects:</span>{" "}
                    {relatedProjects.map((p) => p.title).join(", ")}
                  </div>
                );
              }
              return null;
            })()}
          </div>
        ))}
      </div>

      {/* Skills */}
      <div style={{ marginBottom: "10px" }}>
        <h2
          style={{
            fontSize: "12pt",
            fontWeight: 700,
            borderBottom: "1px solid #d1d5db",
            marginBottom: "4px",
            paddingBottom: "2px",
            fontFamily: "inherit",
          }}
        >
          Skills
        </h2>
        <div style={{ fontSize: "9.5pt" }}>
          {portfolioData.skills.categories.map((category, index) => {
            const mainSkills = category.mainSkills.map((skill) => skill.name);
            return (
              <div key={index} style={{ marginBottom: "1px" }}>
                <span style={{ fontWeight: 600 }}>{category.title}:</span> {mainSkills.join(", ")}
              </div>
            );
          })}
          {/* All other skills combined at the end */}
          {(() => {
            const allOtherSkills = portfolioData.skills.categories
              .flatMap((category) => category.otherSkills?.map((skill) => skill.name) || [])
              .filter(Boolean);
            return allOtherSkills.length > 0 ? (
              <div style={{ marginTop: "2px" }}>
                <span style={{ fontWeight: 600 }}>Other Skills:</span> {allOtherSkills.join(", ")}
              </div>
            ) : null;
          })()}
        </div>
      </div>

      {/* Projects (Other Projects only) */}
      <div style={{ marginBottom: "10px" }}>
        <h2
          style={{
            fontSize: "12pt",
            fontWeight: 700,
            borderBottom: "1px solid #d1d5db",
            marginBottom: "4px",
            paddingBottom: "2px",
            fontFamily: "inherit",
          }}
        >
          Projects
        </h2>
        <div>
          {portfolioData.projects.items
            .filter((project) => project.company === "Other Projects")
            .map((project, index) => (
              <div key={index} style={{ marginBottom: "4px", pageBreakInside: "avoid" }}>
                <span style={{ fontWeight: 700, fontSize: "10pt" }}>{project.title}</span>
                <span style={{ color: "#374151", fontSize: "9.5pt" }}>
                  {project.description ? `: ${project.description}` : ""}
                </span>
                {project.tags && project.tags.length > 0 && (
                  <span style={{ color: "#2563eb", fontSize: "9pt" }}>
                    {" "}
                    [{project.tags.join(", ")}]
                  </span>
                )}
              </div>
            ))}
        </div>
      </div>

      {/* Education */}
      <div style={{ marginBottom: "10px" }}>
        <h2
          style={{
            fontSize: "12pt",
            fontWeight: 700,
            borderBottom: "1px solid #d1d5db",
            marginBottom: "6px",
            paddingBottom: "2px",
            fontFamily: "inherit",
          }}
        >
          Education
        </h2>
        {portfolioData.education.items.slice(0, 2).map((edu, index) => (
          <div key={index} style={{ marginBottom: "6px", pageBreakInside: "avoid" }}>
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}
            >
              <div>
                <h3 style={{ fontSize: "10pt", fontWeight: 700, margin: 0 }}>{edu.degree}</h3>
                <div style={{ color: "#4b5563", fontSize: "10pt" }}>{edu.institution}</div>
              </div>
              <div style={{ color: "#4b5563", fontSize: "10pt" }}>{formatPeriod(edu.period)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
