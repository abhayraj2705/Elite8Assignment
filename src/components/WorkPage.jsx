
import React from 'react';
import { ArrowRight } from 'lucide-react';

const WorkPage = () => {
  const projects = [
    {
      title: "Uniconnect",
      category: "Full Stack",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      tech: ["React", "Node.js", "MongoDB"],
      description: "Modern Solution for the Events Registration in college"
    },
    {
      title: "GetmeAchai",
      category: "MERN STACK ",
      image: "bg-gradient-to-br from-pink-500 to-orange-500",
      tech: ["Next.js", "Framer Motion", "Tailwind"],
      description: "A solution for the financial support for developers"
    },
    {
      title: "PassOPmanager",
      category: "Frontend",
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      tech: ["React Native", "Redux", "Firebase"],
      description: "One platforms to save the passwords of the websites"
    },
   
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Work
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase creativity, technical skill, and attention to detail
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="text-purple-400 hover:text-purple-300 transition-colors flex items-center group">
                  View Project 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Like What You See?</h3>
            <p className="text-gray-300 mb-6">
              These are just a few examples of my work. I'd love to discuss how I can help bring your next project to life.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;