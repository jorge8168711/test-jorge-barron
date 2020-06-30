import React from 'react';
import PropTypes from 'prop-types';

const AttachmentIcon = ({ fill, width, height, className }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      height={height}
      viewBox='0 0 24 24'
      width={width}>
      <path
        fill={fill}
        d='M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z'
      />
    </svg>
  );
};

AttachmentIcon.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string
};

AttachmentIcon.defaultProps = {
  fill: 'currentcolor',
  height: '1em',
  width: '1em',
  className: ''
};

export default AttachmentIcon;
