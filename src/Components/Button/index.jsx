/* eslint-disable react/button-has-type */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import cn from 'classnames';
import { string, func, bool, any } from 'prop-types';
import './index.scss';

const Button = ({
  children,
  onClick,
  className,
  type = 'button',
  disabled = false,
}) => (
  <button
    className={cn('btn', className, { disabled })}
    onClick={onClick}
    disabled={disabled}
    type={type}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: any.isRequired,
  onClick: func,
  className: string,
  type: string,
  disabled: bool,
};

export default Button;
