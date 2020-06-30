import React, { useEffect, useState } from 'react';
import Inbox from './components/Inbox/Inbox';
import Viewer from './components/Viewer/Viewer';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmails, addEmails } from './store/actions';
import { Email } from './models/Email';
import shortid from 'shortid';

const App = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [selection, setSelection] = useState(null);

  useEffect(() => {
    dispatch(fetchEmails());
    const interval = setInterval(() => {
      dispatch(
        addEmails([
          new Email(
            shortid.generate(),
            'user.random@gmail.com',
            'me.random@yopmail.com',
            'Random subject',
            "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.",
            '3/31/2019',
            false,
            'tag1, tag2, tag3',
            null
          ),
          new Email(
            shortid.generate(),
            'barron.random@gmail.com',
            'anotheruser.random@yopmail.com',
            'Test subject',
            "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
            '3/31/2020',
            false,
            'test 1, test 2, test 4',
            [{ file: 'https://dummyimage.com/300x300.jpg/eeeeee/000000', name: 'image_1.jpeg' }],
            { file: 'https://dummyimage.com/300x300.jpg/eeeeee/ffffff', name: 'image_2.jpeg' }
          )
        ])
      );
    }, 90 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className='flex min-h-screen'>
      <Inbox
        emails={store[store.filterBy]}
        onSelect={setSelection}
        selection={(selection && selection.id) || ''}
      />

      {selection && <Viewer email={selection} />}
    </main>
  );
};

export default App;
