import React from 'react';
import AttachmentIcon from '../../icons/Attachment';
import PropTypes from 'prop-types';
import './Email.scss';

const InboxEmail = (props) => {
  const { selected } = props;

  return (
    <div className={`InboxEmail ${selected && 'is-selected'}`}>
      <div className='flex'>
        <div className='InboxEmail-left'>
          <p className='InboxEmail-subject'>Subject</p>
          <p className='InboxEmail-body'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero distinctio quae ratione
            porro asperiores ex? Sed inventore dolorem velit error aut expedita, culpa eum
            reprehenderit voluptatum quisquam, eaque esse ea.
          </p>
        </div>

        <div className='InboxEmail-right'>
          <p className='InboxEmail-date'>09:15 AM</p>
          <AttachmentIcon className='InboxEmail-attachment' />
        </div>
      </div>
    </div>
  );
};

InboxEmail.propTypes = {
  selected: PropTypes.bool
};

InboxEmail.defaultProps = {
  selected: false
};

export default InboxEmail;
