import React from 'react';
import Button from '../../Button/Button';
import './Header.scss';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteEmail, moveToSpam, markAsUnread } from '../../../store/actions';

const ViewerHeader = (props) => {
  const { emailId } = props;
  const dispatch = useDispatch();

  return (
    <div className='ViewerHeader'>
      <div className='ViewerHeader-wrapper flex'>
        <Button className='mr-2' color='warn' onClick={() => dispatch(deleteEmail(emailId))}>
          Delete
        </Button>

        <Button color='default' onClick={() => dispatch(moveToSpam(emailId))}>
          Spam
        </Button>

        <Button className='ml-auto' color='primary' onClick={() => dispatch(markAsUnread(emailId))}>
          Mark as unread
        </Button>
      </div>
    </div>
  );
};

ViewerHeader.propTypes = {
  emailId: PropTypes.string
};

ViewerHeader.defaultProps = {
  emailId: ''
};

export default ViewerHeader;
