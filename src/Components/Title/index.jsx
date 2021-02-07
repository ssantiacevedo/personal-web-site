import React from 'react';
import { string } from 'prop-types';
import './index.scss';

const Title = ({ children }) => <span className="title">{children}</span>;

Title.propTypes = {
  children: string.isRequired,
};

export default Title;
