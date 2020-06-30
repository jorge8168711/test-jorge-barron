import React from 'react';
import Button from '../../Button/Button';
import './Header.scss';

const ViewerHeader = () => {
  return (
    <div className='ViewerHeader'>
      <div className='ViewerHeader-wrapper flex'>
        <Button className='mr-2' color='warn'>
          Delete
        </Button>

        <Button color='default'>Spam</Button>

        <Button className='ml-auto' color='primary'>
          Mark as unread
        </Button>
      </div>
    </div>
  );
};

export default ViewerHeader;
