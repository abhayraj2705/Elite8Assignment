
import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/80 border-t border-purple-500/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              ELITE8
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting exceptional digital experiences with passion, creativity, and cutting-edge technology. 
              Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'Work', 'About', 'Contact'].map((link) => (
                <div key={link}>
                  <button className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                    {link}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Web Development</p>
              <p>UI/UX Design</p>
              <p>Performance Optimization</p>
            </div>
          </div>
        </div>

   
        <div className="border-t border-purple-500/20 pt-8">
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            

            
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Built with React</span>
              <span>•</span>
              <span>Styled with Tailwind</span>
              <span>•</span>
              <span>Deployed on Vercel</span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;