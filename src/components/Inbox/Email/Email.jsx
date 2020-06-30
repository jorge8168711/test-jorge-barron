import React from 'react';
import AttachmentIcon from '../../icons/Attachment';
import PropTypes from 'prop-types';
import './Email.scss';

const InboxEmail = (props) => {
  const { selected, data, onClick } = props;

  return (
    <div
      className={`InboxEmail ${selected && 'is-selected'}`}
      onClick={(event) => onClick(event, data.id)}>
      <div className='flex'>
        <div className='InboxEmail-left'>
          <p className='InboxEmail-subject'>{data.subject}</p>
          <p className='InboxEmail-body'>{data.body}</p>
        </div>

        <div className='InboxEmail-right'>
          <p className='InboxEmail-date'>{data.date}</p>

          {data.attachements && <AttachmentIcon className='InboxEmail-attachment' />}
        </div>
      </div>
    </div>
  );
};

InboxEmail.propTypes = {
  selected: PropTypes.bool,
  data: PropTypes.shape({
    attachements: PropTypes.arrayOf(
      PropTypes.shape({
        file: PropTypes.string,
        name: PropTypes.string
      })
    ),
    avatar: PropTypes.string,
    body: PropTypes.string,
    date: PropTypes.string,
    from: PropTypes.string,
    id: PropTypes.string,
    isReaded: PropTypes.bool,
    subject: PropTypes.string,
    tag: PropTypes.string,
    to: PropTypes.string
  })
};

InboxEmail.defaultProps = {
  selected: false,
  data: {}
};

export default InboxEmail;
