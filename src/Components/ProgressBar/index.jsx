import React, { useEffect, useState } from 'react';
import { number } from 'prop-types';
import './index.scss';

const ProgressBar = ({ width, percent }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(percent * width);
  }, [percent, width]);

  return (
    <div>
      <div className="progress-div" style={{ width: `${width}vw` }}>
        <div style={{ width: `${value}vw` }} className="progress" />
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  width: number.isRequired,
  percent: number.isRequired,
};

export default ProgressBar;
