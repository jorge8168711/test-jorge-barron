import React from 'react';
import PropTypes from 'prop-types';

const CloseIcon = ({ fill, width, height, className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 12 12'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M10.95 1.05a1 1 0 010 1.414L7.414 6l3.536 3.536a1 1 0 11-1.414 1.414L6 7.414 2.464 10.95A1 1 0 111.05 9.536L4.586 6 1.05 2.464A1 1 0 112.464 1.05L6 4.586 9.536 1.05a1 1 0 011.414 0z'
        fill={fill}
        fillRule='evenodd'
      />
    </svg>
  );
};

CloseIcon.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string
};

CloseIcon.defaultProps = {
  fill: 'currentcolor',
  height: '1em',
  width: '1em',
  className: ''
};

export default CloseIcon;
