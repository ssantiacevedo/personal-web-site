import React from 'react';
import TopBar from '../../Components/TopBar';
import AboutMeSection from '../../Components/AboutMeSection';

import './index.scss';

const Home = () => (
  <div className="app-container">
    <TopBar />
    <AboutMeSection />
  </div>
);

export default Home;
