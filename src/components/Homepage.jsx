import React from 'react';
import { ChevronRight, ArrowRight, Code, Palette, Zap } from 'lucide-react';

const Homepage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
 
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                CREATIVE
              </span>
              <br />
              <span className="text-white">DEVELOPER</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Crafting digital experiences that push boundaries and inspire innovation
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setCurrentPage('work')}
              className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              View My Work
              <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="group border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-purple-400 hover:text-black"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="rotate-90 text-purple-400" size={32} />
        </div>
      </section>

  {/* features secctions */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            What I Bring to the Table
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Code className="w-8 h-8" />, title: "Clean Code", desc: "Writing maintainable, scalable code that stands the test of time" },
              { icon: <Palette className="w-8 h-8" />, title: "Creative Design", desc: "Pushing visual boundaries with innovative and engaging interfaces" },
              { icon: <Zap className="w-8 h-8" />, title: "Performance", desc: "Optimized experiences that load fast and run smoothly" }
            ].map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;