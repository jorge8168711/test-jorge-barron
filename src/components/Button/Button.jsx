import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
  const { className, color, onClick, submit, children, size, ...other } = props;

  return (
    <button
      onClick={onClick}
      className={`${className} Button ${color && `Button--${color}`} ${size && `Button--${size}`}`}
      type={submit ? 'submit' : 'button'}
      {...other}>
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'warn', 'default', '']),
  onClick: PropTypes.func,
  submit: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  className: PropTypes.string,
  size: PropTypes.string
};

Button.defaultProps = {
  color: '',
  onClick: () => null,
  submit: false,
  children: null,
  className: '',
  size: ''
};

export default Button;
