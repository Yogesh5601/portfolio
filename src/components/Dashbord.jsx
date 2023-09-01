import React from 'react'
import HeroSection from './HeroSection/HeroSection';
import Skills from './skills/Skills';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import Footer from './footer.jsx/Footer';
const Dashbord = () => {
  return (
    <>
      <HeroSection />
      <div className="wrapperapp">
        <Skills />
        <Portfolio />
      </div>
      <div className="wrapperapp">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Dashbord