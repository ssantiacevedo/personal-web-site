import React from 'react';
import { string, number } from 'prop-types';
import ProgressBar from '../ProgressBar';
import './index.scss';

const Skill = ({ name, image, percentage }) => (
  <div className="skill">
    <div className="skill__image">
      <img src={image} alt="" />
    </div>
    <div className="skill__info">
      <span className="skill__info__title">{name}</span>
      <ProgressBar percent={percentage} width="10" />
    </div>
  </div>
);

Skill.propTypes = {
  name: string.isRequired,
  image: string.isRequired,
  percentage: number.isRequired,
};

export default Skill;
