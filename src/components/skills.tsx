interface SkillsData {
  categories: {
    title: string;
    mainSkills: { name: string }[];
    otherSkills: { name: string }[];
  }[];
}

interface SkillsProps {
  data: SkillsData;
}

const Skills = ({ data }: SkillsProps) => {
  const { categories } = data;
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-cyan-50 to-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Technical Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const mainSkills = category.mainSkills?.map((s) => s.name) || [];
            const otherSkills = category.otherSkills?.map((s) => s.name) || [];
            return (
              <div key={index} className="mb-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.title}</h3>
                <p className="text-gray-700 text-sm">{mainSkills.join(", ")}</p>
                {otherSkills.length > 0 && (
                  <p className="text-gray-600 text-xs mt-1">
                    Other Skills: {otherSkills.join(", ")}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
