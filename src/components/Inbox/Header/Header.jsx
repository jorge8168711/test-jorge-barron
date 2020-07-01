import React, { useState } from 'react';
import Search from '../../Search/Search';
import './Header.scss';
import Select from '../../Select/Select';
import PropTypes from 'prop-types';
import { setFilter, setSearch, cleanSelection } from '../../../store/actions';
import { useDispatch } from 'react-redux';

const filterOptions = [
  { id: 'inbox', name: 'Inbox' },
  { id: 'spam', name: 'Spam' },
  { id: 'deleted', name: 'Deleted' }
];

const InboxHeader = (props) => {
  const dispatch = useDispatch();
  const { unreadedItems } = props;
  const [currentFilter, setCurrentFilter] = useState('');

  function handleFilterChange(e) {
    const target = e.target;
    setCurrentFilter(target.value);
    dispatch(setFilter(target.value));
    dispatch(cleanSelection());
  }

  return (
    <header className='InboxHeader'>
      <div className='flex items-center InboxHeader-top'>
        <h1 className='InboxHeader-title'>Inbox</h1>
        {unreadedItems > 0 && <span className='InboxHeader-badge'>{unreadedItems}</span>}

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

      <Search onSearch={(search) => dispatch(setSearch(search))} />
    </header>
  );
};

InboxHeader.propTypes = {
  unreadedItems: PropTypes.number
};

InboxHeader.defaultProps = {
  unreadedItems: 0
};

export default InboxHeader;
