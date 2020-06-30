import React from 'react';
import InboxHeader from './Header/Header';
import './Inbox.scss';
import InboxEmail from './Email/Email';

const Inbox = () => {
  return (
    <section className='Inbox'>
      <InboxHeader />

      <InboxEmail selected />
      <InboxEmail />
      <InboxEmail />
      <InboxEmail />
    </section>
  );
};

export default Inbox;
