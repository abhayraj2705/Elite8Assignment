import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import WorkPage from './components/WorkPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Preload images and optimize performance
    const preloadImages = () => {
      // Add any image preloading logic here
    };
    preloadImages();
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home': return <Homepage setCurrentPage={setCurrentPage} />;
      case 'work': return <WorkPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <Homepage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      {renderCurrentPage()}
      <Footer />
    </div>
  );
}

export default App;