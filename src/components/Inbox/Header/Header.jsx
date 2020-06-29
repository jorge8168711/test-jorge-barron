import React, { useState } from 'react';
import Search from '../../Search';
import './Header.scss';

const filterOptions = [
  { id: 'read', name: 'Read' },
  { id: 'unread', name: 'Unread' }
];

const InboxHeader = () => {
  const [currentFilter, setCurrentFilter] = useState('');

  function handleFilterChange(e) {
    const target = e.target;
    setCurrentFilter(target.value);
  }

  return (
    <header className='InboxHeader'>
      <div className='flex items-center InboxHeader-top'>
        <h1 className='InboxHeader-title'>Inbox</h1>
        <span className='InboxHeader-badge'>3</span>

        <div className='relative ml-auto'>
          <select
            value={currentFilter}
            className='InboxHeader-select'
            onChange={handleFilterChange}>
            <option value='' disabled>
              Filter by
            </option>
            {filterOptions.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <div className='InboxHeader-selectIcon'></div>
        </div>
      </div>

      <Search />
    </header>
  );
};

export default InboxHeader;
