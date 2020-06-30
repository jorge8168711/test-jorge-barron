import React from 'react';
import Button from '../../Button/Button';
import './Tags.scss';

const ViewerTags = () => {
  return (
    <div className='ViewerTags flex items-center'>
      <p className='mr-2 my-0'>Tags</p>
      <Button color='default' className='mr-2' size='sm'>
        Inbox
      </Button>
      <Button color='default' size='sm'>
        bussines
      </Button>
    </div>
  );
};

export default ViewerTags;
