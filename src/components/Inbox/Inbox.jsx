import React from 'react';
import InboxHeader from './Header/Header';
import './Inbox.scss';
import InboxEmail from './Email/Email';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Inbox = (props) => {
  const { emails } = props;
  const currentSearch = useSelector((state) => state.search);

  return (
    <section className='Inbox'>
      <InboxHeader unreadedItems={emails.filter((item) => !item.isReaded).length} />

      {emails
        .filter(
          (item) =>
            item.body.toLowerCase().includes(currentSearch.toLowerCase()) ||
            item.subject.toLowerCase().includes(currentSearch.toLowerCase())
        )
        .map((email) => (
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
