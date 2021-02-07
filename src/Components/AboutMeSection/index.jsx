/* eslint-disable react/no-multi-comp */
import React from 'react';
import resume from '../../assets/resume-santiago-acevedo.pdf';
import myPhoto from '../../assets/images/me.jpeg';
import Button from '../Button';
import Title from '../Title';
import './index.scss';

const AboutMeSection = () => (
  <div id="about-me" className="about-section">
    <Title>About Me</Title>
    <div className="about-section__info">
      <img src={myPhoto} alt="" />
      <div className="about-section__info__description">
        <span>
          I&apos;m a computer engineering student. I am in the final strech of
          my grade career. I am a very pasionate person who is always willing to
          learn new techologies and grow not only in the professional field, but
          also in the personal one. I did this site to show my work and all my
          skills. The idea is to upload all my interesting proyects for you to
          see the way I work. Feel free to contact me and give me any feedback
          you consider relevant.
        </span>
        <div className="about-section__info__description__resume">
          <span>You can find my resume down here!</span>
          <a href={resume} download>
            <Button className="btn--primary btn--medium-large">
              DOWNLOAD RESUME
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default AboutMeSection;
