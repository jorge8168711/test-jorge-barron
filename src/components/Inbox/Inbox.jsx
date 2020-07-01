import React from 'react';
import InboxHeader from './Header/Header';
import './Inbox.scss';
import InboxEmail from './Email/Email';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setSelection } from '../../store/actions';

const Inbox = (props) => {
  const dispatch = useDispatch();
  const { emails } = props;
  const globalState = useSelector((state) => state);

  return (
    <section className='Inbox'>
      <InboxHeader unreadedItems={emails.filter((item) => !item.isReaded).length} />

      <div className='InboxList'>
        {emails
          .filter(
            (item) =>
              item.body.toLowerCase().includes(globalState.search.toLowerCase()) ||
              item.subject.toLowerCase().includes(globalState.search.toLowerCase())
          )
          .map((email) => (
            <InboxEmail
              onClick={() => dispatch(setSelection(email))}
              data={email}
              key={email.id}
              selected={
                globalState.currentSelection && globalState.currentSelection.id === email.id
              }
            />
          ))}
      </div>
    </section>
  );
};

Inbox.propTypes = {
  emails: PropTypes.arrayOf(
    PropTypes.shape({
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
  )
};

Inbox.defaultProps = {
  emails: []
};

export default Inbox;
