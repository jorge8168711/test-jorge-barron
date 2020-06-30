import React, { useState } from 'react';
import InboxHeader from './Header/Header';
import './Inbox.scss';
import InboxEmail from './Email/Email';
import PropTypes from 'prop-types';

const Inbox = (props) => {
  const [selection, setSelection] = useState([]);
  const { emails } = props;

  return (
    <section className='Inbox'>
      <InboxHeader unreadedItems={emails.filter((item) => !item.isReaded).length} />

      {emails.map((email) => (
        <InboxEmail onClick={(event, id) => console.log(event, id)} data={email} key={email.id} />
      ))}
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
