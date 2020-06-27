import React from 'react';
import { Inbox, Viewer } from './components';

const App = (props) => {
  return (
    <main className='flex'>
      <Inbox />

      <Viewer />
    </main>
  );
};

export default App;
