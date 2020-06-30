import React from 'react';
import './Body.scss';
import Button from '../../Button/Button';
import AttachmentIcon from '../../icons/Attachment';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const ViewerBody = (props) => {
  const { body, attachements } = props;

  return (
    <div className='ViewerBody'>
      <p className='my-0 ViewerBody-content'>{body}</p>

      <div className='ViewerBody-controls flex items-center'>
        {attachements &&
          attachements.length > 0 &&
          attachements.map((item) => (
            <a
              href={item.file}
              rel='noopener noreferrer'
              className='ViewerBody-link Button flex items-center'
              key={shortid.generate()}
              target='blank'>
              <AttachmentIcon className='ViewerBody-attachment mr-1' />
              {item.name}
            </a>
          ))}

        <Button className='ml-auto ViewerBody-button' color='primary'>
          Replay
        </Button>
      </div>
    </div>
  );
};

ViewerBody.propTypes = {
  attachements: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string,
      name: PropTypes.string
    })
  ),
  body: PropTypes.string
};

ViewerBody.defaultProps = {
  attachements: [],
  body: ''
};

export default ViewerBody;
