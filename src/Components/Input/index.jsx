/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import cn from 'classnames';
import { string, bool, func } from 'prop-types';
import './index.scss';

const Input = ({
  text,
  className,
  placeholder,
  type,
  label,
  onChange,
  disabled,
  errorMessage,
  error,
  ...props
}) => (
  <div className="input-container">
    {label && <span className="input-container__label">{label}</span>}
    <input
      type={type}
      placeholder={placeholder}
      className={cn('input', className, { disabled })}
      value={text}
      onChange={onChange}
      {...props}
    />

    {error && errorMessage && (
      <span className="input-container__error">{errorMessage}</span>
    )}
  </div>
);
Input.propTypes = {
  placeholder: string,
  errorMessage: string,
  error: bool,
  className: string,
  onChange: func.isRequired,
  text: string,
  type: string,
  label: string,
  disabled: bool,
};

export default Input;
