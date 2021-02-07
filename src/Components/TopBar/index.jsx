import React from 'react';
import TabButton from '../TabButton';
import './index.scss';

const TopBar = () => (
  <div id="top-bar" className="top-bar">
    <TabButton text="About Me" path="about-me" />
    <TabButton text="Skills" path="skills" />
    <TabButton text="Career" path="career" />
    <TabButton text="Contact" path="contact" />
  </div>
);

export default TopBar;
