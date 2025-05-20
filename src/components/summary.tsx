interface SummaryData {
  text: string;
  contactInfo: {
    location: string;
    email: string;
    linkedin: string;
    github: string;
  };
}

interface SummaryProps {
  data: SummaryData;
}

const Summary = ({ data }: SummaryProps) => {
  return (
    <section id="summary" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="card p-8 max-w-4xl mx-auto animate-on-scroll">
          <p className="text-gray-700 leading-relaxed text-lg">{data.text}</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <div className="flex items-center bg-cyan-50 px-4 py-2 rounded-full">
              <i className="fas fa-map-marker-alt text-cyan-600 mr-2"></i>
              <span>{data.contactInfo.location}</span>
            </div>
            <div className="flex items-center bg-cyan-50 px-4 py-2 rounded-full">
              <i className="fas fa-envelope text-cyan-600 mr-2"></i>
              <a href={`mailto:${data.contactInfo.email}`} className="hover:text-cyan-700">
                {data.contactInfo.email}
              </a>
            </div>
            {/* <div className="flex items-center bg-cyan-50 px-4 py-2 rounded-full">
                <i className="fab fa-linkedin text-cyan-600 mr-2"></i>
                <a href={`https://linkedin.com/in/${data.contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-700">
                  linkedin.com/in/{data.contactInfo.linkedin}
                </a>
              </div> */}
            <div className="flex items-center bg-cyan-50 px-4 py-2 rounded-full">
              <i className="fab fa-github text-cyan-600 mr-2"></i>
              <a
                href={`https://github.com/${data.contactInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-700"
              >
                github.com/{data.contactInfo.github}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
