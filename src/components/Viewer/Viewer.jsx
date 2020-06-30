import React from 'react';
import './Viewer.scss';
import ViewerHeader from './Header/Header';
import ViewerTags from './Tags/Tags';
import ViewerBody from './Body/Body';
import PropTypes from 'prop-types';

const Viewer = (props) => {
  const { email } = props;

  return (
    <section className='Viewer'>
      <ViewerHeader emailId={email.id} />

      <div className='Viewer-content'>
        <p className='Viewer-title'>{email.subject}</p>

        <p>{email.date}</p>
        <p>
          <strong className='mr-1'>From:</strong>
          {email.from}
        </p>
        <p>
          <strong className='mr-1'>To:</strong>
          {email.to}
        </p>

        <ViewerTags tags={email.tag} />

        <ViewerBody body={email.body} attachements={email.attachements} />
      </div>
    </section>
  );
};

Viewer.propTypes = {
  email: PropTypes.shape({
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

Viewer.defaultProps = {
  email: {}
};
export default Viewer;
