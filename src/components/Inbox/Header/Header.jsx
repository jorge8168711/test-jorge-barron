import React, { useState } from 'react';
import Search from '../../Search/Search';
import './Header.scss';
import Select from '../../Select/Select';

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

        <Select classes='ml-auto' value={currentFilter} onChange={handleFilterChange}>
          <option value='' disabled>
            Filter by
          </option>
          {filterOptions.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </Select>
      </div>

      <Search onSearch={(e) => console.log(e)} />
    </header>
  );
};

export default InboxHeader;
