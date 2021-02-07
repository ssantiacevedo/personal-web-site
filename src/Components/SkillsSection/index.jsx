import React from 'react';
import Skill from '../Skill';
import Title from '../Title';
import react from '../../assets/images/skills/react.svg';
import javascript from '../../assets/images/skills/js.svg';
import css from '../../assets/images/skills/css.svg';
import django from '../../assets/images/skills/django.svg';
import html from '../../assets/images/skills/html.svg';
import rails from '../../assets/images/skills/rails.svg';
import scrum from '../../assets/images/skills/scrum.svg';
import git from '../../assets/images/skills/git.svg';
import english from '../../assets/images/skills/english.svg';

import './index.scss';

const SkillsSection = () => (
  <div id="skills" className="skills">
    <Title>Skills</Title>
    <div className="skills__list">
      <Skill name="React" image={react} percentage={0.8} />
      <Skill name="JavaScript" image={javascript} percentage={0.8} />
      <Skill name="CSS" image={css} percentage={0.75} />
      <Skill name="Django" image={django} percentage={0.4} />
      <Skill name="HTML" image={html} percentage={0.75} />
      <Skill name="Git" image={git} percentage={0.95} />
      <Skill name="SCRUM" image={scrum} percentage={0.85} />
      <Skill name="English" image={english} percentage={0.85} />
      <Skill name="Ruby on Rails" image={rails} percentage={0.25} />
    </div>
  </div>
);

export default SkillsSection;
