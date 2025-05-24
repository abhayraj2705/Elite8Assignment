
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
    
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { 
      icon: <Mail className="w-6 h-6" />, 
      label: "Email", 
      value: "abhayraj27052005@gmail.com",
      href: "abhayraj27052005@gmail.com"
    },
    { 
      icon: <Phone className="w-6 h-6" />, 
      label: "Phone", 
      value: "+91 7802914425",
      href: ""
    },
    { 
      icon: <MapPin className="w-6 h-6" />, 
      label: "Location", 
      value: "Pune",
      href: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    { 
      icon: <Github className="w-6 h-6" />, 
      label: "GitHub",
      href: "https://github.com/abhayraj2705",
      color: "hover:bg-gray-700"
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:bg-blue-600"
    },
    { 
      icon: <Mail className="w-6 h-6" />, 
      label: "Email",
      href: "https://www.linkedin.com/in/abhayraj-b-474890293/",
      color: "hover:bg-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your next project to life? I'd love to hear about your ideas and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Send me a message</h3>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors resize-none"
                required
              ></textarea>
              <button 
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </div>
          </div>

 
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Get in touch</h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a 
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="text-purple-400 group-hover:scale-110 transition-transform">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{contact.label}</div>
                      <div className="text-white group-hover:text-purple-400 transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>


            <div>
              <h4 className="text-xl font-bold mb-4 text-purple-400">Follow me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg hover:scale-110 transition-all duration-300 ${social.color}`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-6 rounded-lg border border-green-500/30">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="font-bold text-green-400">Available for Projects</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Currently accepting new freelance and full-time opportunities
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20">
              <h4 className="font-bold mb-2">Quick Response Time</h4>
              <p className="text-gray-300 text-sm">
                I typically respond to messages within 24 hours. For urgent inquiries, feel free to call directly.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ContactPage;