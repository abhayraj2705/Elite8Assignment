
import React from 'react';
import { Users, Award, Coffee, Heart } from 'lucide-react';

const AboutPage = () => {
  const skills = [
    "React & Next.js", 
    "Node.js & Express", 
    "MongoDB & SQL", 
    "Tailwind CSS", 
    "UI/UX Design"
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/10 to-black text-white pt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                I'm a passionate full-stack developer with a keen eye for design and a love for creating 
                digital experiences that not only function flawlessly but also inspire and engage users.
              </p>
              <p>
                With expertise spanning modern web technologies, I bridge the gap between creative vision 
                and technical implementation, ensuring every project delivers both aesthetic appeal and 
                robust functionality.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest design trends, contributing to 
                open-source projects, or experimenting with emerging technologies like AI and blockchain.
              </p>
            </div>

           
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-colors duration-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-16 h-16 mx-auto mb-4 text-white/80" />
                  <p className="text-white/80 text-lg font-semibold">Creative Developer</p>
                  <p className="text-white/60 text-sm mt-2">Passionate about innovation</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4">
              <div className="text-2xl font-bold text-purple-400">1+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4">
              <div className="text-2xl font-bold text-pink-400">100%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8 text-purple-400">My Philosophy</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed">
              "Great design is not just about how it looks – it's about how it works, how it feels, 
              and how it solves real problems. I believe in creating digital experiences that are 
              not only visually stunning but also intuitive, accessible, and meaningful."
            </p>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-purple-400">My Journey</h2>
          <div className="space-y-8">
            {[
              { year: "2023", title: "Started Web Development", desc: "Began my journey with HTML, CSS, and JavaScript" },
              { year: "2023", title: "Mastered React", desc: "Dove deep into React ecosystem and modern frontend development" },
              { year: "2024", title: "Full Stack Developer", desc: "Expanded to backend technologies and database management" },
            ].map((milestone, index) => (
              <div key={index} className="flex items-center space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-6 rounded-lg border border-purple-500/20 group-hover:border-purple-400/40 transition-colors duration-300">
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;