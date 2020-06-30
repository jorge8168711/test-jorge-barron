import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

const Select = (props) => {
  const { value, classes, children, onChange } = props;

  return (
    <div className={`relative ${classes}`}>
      <select value={value} className='Select' onChange={onChange}>
        {children}
      </select>

      <div className='Select-icon'></div>
    </div>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node
  ]),
  onChange: PropTypes.func
};

Select.defaultProps = {
  value: '',
  classes: '',
  children: null,
  onChange: () => null
};

export default Select;
