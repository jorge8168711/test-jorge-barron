import React from 'react';
import InboxHeader from './Header/Header';
import './Inbox.scss';
import InboxEmail from './Email/Email';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Inbox = (props) => {
  const { emails, onSelect, selection } = props;
  const currentSearch = useSelector((state) => state.search);

  return (
    <section className='Inbox'>
      <InboxHeader unreadedItems={emails.filter((item) => !item.isReaded).length} />

      <div className='InboxList'>
        {emails
          .filter(
            (item) =>
              item.body.toLowerCase().includes(currentSearch.toLowerCase()) ||
              item.subject.toLowerCase().includes(currentSearch.toLowerCase())
          )
          .map((email) => (
            <InboxEmail
              onClick={() => {
                onSelect(email);
              }}
              data={email}
              key={email.id}
              selected={selection === email.id}
            />
          ))}
      </div>
    </section>
  );
};

Inbox.propTypes = {
  onSelect: PropTypes.func,
  selection: PropTypes.string,
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
  emails: [],
  onSelect: () => null,
  selection: ''
};

export default Inbox;
