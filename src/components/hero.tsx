import Link from "next/link";

interface HeroData {
  name: string;
  title: string;
  description: string;
  ctaButtons: {
    primary: {
      text: string;
      href: string;
      icon: string;
    };
    secondary: {
      text: string;
      href: string;
      icon: string;
    };
  };
}

interface HeroProps {
  data: HeroData;
}

const Hero = ({ data }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            <span className="gradient-text">{data.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 animate-fade-in delay-200">
            {data.title}
          </h2>
          <p className="text-gray-600 mb-8 animate-fade-in delay-300">{data.description}</p>
          <div className="flex flex-wrap gap-4 animate-fade-in delay-400">
            <Link
              href={data.ctaButtons.primary.href}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center"
            >
              <i className={`fas ${data.ctaButtons.primary.icon} mr-2`}></i>{" "}
              {data.ctaButtons.primary.text}
            </Link>
            <Link
              href={data.ctaButtons.secondary.href}
              className="px-6 py-3 bg-white text-cyan-700 border border-cyan-200 rounded-full font-medium hover:shadow-lg hover:bg-cyan-50 transition-all duration-300 flex items-center"
            >
              <i className={`fas ${data.ctaButtons.secondary.icon} mr-2`}></i>{" "}
              {data.ctaButtons.secondary.text}
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full opacity-20 animate-pulse-slow"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full opacity-30 animate-pulse-slow delay-300"></div>
            <div className="absolute inset-8 bg-gradient-to-br from-cyan-300 to-teal-300 rounded-full opacity-40 animate-pulse-slow delay-600"></div>
            <div className="absolute inset-12 bg-gradient-to-br from-cyan-200 to-teal-200 rounded-full opacity-50 animate-pulse-slow delay-900"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={
                  process.env.NODE_ENV === "production"
                    ? "/mhtamun/assets/images/profile.png"
                    : "/assets/images/profile.png"
                }
                alt={data.name}
                className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-white shadow-xl object-cover animate-scale-up border-4 border-white"
                loading="eager"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
