import React from 'react';
import './Body.scss';
import Button from '../../Button/Button';
import AttachmentIcon from '../../icons/Attachment';

const ViewerBody = () => {
  return (
    <div className='ViewerBody'>
      <p className='my-0 ViewerBody-content'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis voluptate, corrupti iste
        aliquam dolor blanditiis harum deserunt, ducimus unde labore molestiae. Quos itaque
        consequatur asperiores quo accusantium maxime inventore perferendis! Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Debitis voluptate, corrupti iste aliquam dolor blanditiis
        harum deserunt, ducimus unde labore molestiae. Quos itaque consequatur asperiores quo
        accusantium maxime inventore perferendis!
      </p>

      <div className='ViewerBody-controls flex items-center'>
        <Button className='Button'>
          <AttachmentIcon className='ViewerBody-attachment' />
        </Button>

        <Button className='ml-auto ViewerBody-button' color='primary'>
          Replay
        </Button>
      </div>
    </div>
  );
};

export default ViewerBody;
