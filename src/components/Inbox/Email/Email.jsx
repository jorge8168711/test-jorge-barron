import React from 'react';
import AttachmentIcon from '../../icons/Attachment';
import PropTypes from 'prop-types';
import './Email.scss';
import { useDispatch } from 'react-redux';
import { markAsRead } from '../../../store/actions';

const InboxEmail = (props) => {
  const dispatch = useDispatch();
  const { data, onClick } = props;

  function markEmailAsRead() {
    onClick();
    if (!data.isReaded) {
      dispatch(markAsRead(data.id));
    }
  }

  return (
    <div className={`InboxEmail ${!data.isReaded && 'is-selected'}`} onClick={markEmailAsRead}>
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
  onClick: PropTypes.func,
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
  data: {},
  onClick: () => null
};

export default InboxEmail;
