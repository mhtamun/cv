interface SkillItem {
    name: string;
    percentage: number;
  }
  
  interface SkillCategory {
    title: string;
    icon: string;
    mainSkills: SkillItem[];
    otherSkills?: {
      title: string;
      skills: string[];
    }[];
  }
  
  interface SkillsData {
    categories: SkillCategory[];
  }
  
  interface SkillsProps {
    data: SkillsData;
  }
  
  const Skills = ({ data }: SkillsProps) => {
    return (
      <section id="skills" className="py-20 px-4 bg-gradient-to-b from-cyan-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Technical Skills</span>
          </h2>
  
          {/* Skills Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.categories.map((category, index) => (
              <div key={index} className="skill-category animate-on-scroll">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mr-4">
                    <i className={`fas ${category.icon} text-cyan-600 text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                </div>
  
                {/* Main Skills */}
                <div className="space-y-4">
                  {category.mainSkills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-cyan-600 font-medium">{skill.percentage}%</span>
                      </div>
                      <div className="skill-progress-container">
                        <div className="skill-progress-bar" data-width={skill.percentage}></div>
                      </div>
                    </div>
                  ))}
  
                  {/* Other Skills */}
                  {category.otherSkills && category.otherSkills.map((otherSkill, idx) => (
                    <div key={idx} className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">{otherSkill.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {otherSkill.skills.map((skill, skillIdx) => (
                          <span key={skillIdx} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;