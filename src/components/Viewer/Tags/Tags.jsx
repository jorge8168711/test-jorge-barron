import React from 'react';
import Button from '../../Button/Button';
import './Tags.scss';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const ViewerTags = (props) => {
  const { tags } = props;

  return (
    <div className='ViewerTags flex items-center'>
      <p className='mr-2 my-0'>Tags</p>
      {tags.split(',').map((item) => (
        <Button color='default' className='mr-2' size='sm' key={shortid.generate()}>
          {item}
        </Button>
      ))}
    </div>
  );
};

ViewerTags.propTypes = {
  tags: PropTypes.string
};

ViewerTags.defaultProps = {
  tags: ''
};

export default ViewerTags;
