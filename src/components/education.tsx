interface EducationItem {
    degree: string;
    institution: string;
    period: string;
    icon: string;
  }
  
  interface EducationData {
    items: EducationItem[];
  }
  
  interface EducationProps {
    data: EducationData;
  }
  
  const Education = ({ data }: EducationProps) => {
    return (
      <section id="education" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Education</span>
          </h2>
  
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.items.map((item, index) => (
              <div key={index} className="card p-6 animate-on-scroll">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mr-4 animate-float">
                    <i className={`fas ${item.icon} text-cyan-600 text-2xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.degree}</h3>
                    <p className="text-cyan-600">{item.institution}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 mb-4">
                  <i className="far fa-calendar-alt mr-2 text-cyan-500"></i>
                  <span>{item.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Education;