import React from 'react';
import Inbox from './components/Inbox/Inbox';
import Viewer from './components/Viewer/Viewer';

const App = () => {
  return (
    <main className='flex min-h-screen'>
      <Inbox />

      <Viewer />
    </main>
  );
};

export default App;
