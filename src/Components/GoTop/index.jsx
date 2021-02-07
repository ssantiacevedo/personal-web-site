import React from 'react';
import topArrow from '../../assets/icons/topArrow.svg';
import './index.scss';

const GoTop = () => {
  const handleScroll = () => {
    const topBar = document.getElementById('top-bar');
    topBar &&
      topBar.scrollIntoView({
        behavior: 'smooth',
      });
  };

  return (
    <div onClick={handleScroll} className="go-top">
      <img src={topArrow} alt="" />
    </div>
  );
};

export default GoTop;
