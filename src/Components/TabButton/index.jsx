import React from 'react';
import { string } from 'prop-types';

import './index.scss';

const TabButton = ({ text, path }) => {
  const handleScroll = () => {
    const section = document.getElementById(path);
    section &&
      section.scrollIntoView({
        behavior: 'smooth',
      });
  };

  return (
    <button onClick={handleScroll} type="button" className="tab-button">
      {text}
    </button>
  );
};

TabButton.propTypes = {
  text: string.isRequired,
  path: string.isRequired,
};

export default TabButton;
