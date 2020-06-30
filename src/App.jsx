import React, { useEffect } from 'react';
import Inbox from './components/Inbox/Inbox';
import Viewer from './components/Viewer/Viewer';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmails } from './store/actions';

const App = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmails());
  }, []);

  return (
    <main className='flex min-h-screen'>
      <Inbox emails={store[store.filterBy]} />

      <Viewer />
    </main>
  );
};

export default App;
