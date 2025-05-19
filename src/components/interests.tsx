interface InterestItem {
    name: string;
    icon: string;
  }
  
  interface InterestsData {
    items: InterestItem[];
  }
  
  interface InterestsProps {
    data: InterestsData;
  }
  
  const Interests = ({ data }: InterestsProps) => {
    return (
      <section id="interests" className="py-20 px-4 bg-gradient-to-b from-white to-cyan-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Interests</span>
          </h2>
  
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
            {data.items.map((item, index) => (
              <div 
                key={index} 
                className="w-40 h-40 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 animate-on-scroll animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                  <i className={`fas ${item.icon} text-cyan-600 text-2xl`}></i>
                </div>
                <span className="text-gray-800 font-medium text-center">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Interests;