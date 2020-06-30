import React from 'react';
import './Viewer.scss';
import ViewerHeader from './Header/Header';
import ViewerTags from './Tags/Tags';
import ViewerBody from './Body/Body';

const Viewer = () => {
  return (
    <section className='Viewer'>
      <ViewerHeader />

      <div className='Viewer-content'>
        <p className='Viewer-title'>Crosswell bowen</p>

        <ViewerTags />

        <ViewerBody />
      </div>
    </section>
  );
};

export default Viewer;
