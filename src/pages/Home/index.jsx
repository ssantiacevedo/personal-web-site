import React from 'react';
import TopBar from '../../Components/TopBar';
import AboutMeSection from '../../Components/AboutMeSection';
import SkillsSection from '../../Components/SkillsSection';

import './index.scss';
import GoTop from '../../Components/GoTop';

const Home = () => (
  <div className="app-container">
    <GoTop />
    <TopBar />
    <AboutMeSection />
    <SkillsSection />
  </div>
);

export default Home;
