interface FooterData {
  name: string;
  title: string;
  social: {
    linkedin: string;
    github: string;
    email: string;
  };
}

interface FooterProps {
  data: FooterData;
}

const Footer = ({ data }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
            <p className="text-cyan-100">{data.title}</p>
          </div>

          <div className="flex space-x-4">
            <a
              href={`https://linkedin.com/in/${data.social.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href={`https://github.com/${data.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            >
              <i className="fab fa-github"></i>
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href={`mailto:${data.social.email}`}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            >
              <i className="fas fa-envelope"></i>
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>
            &copy; {currentYear} {data.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
