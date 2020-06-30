import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Search.scss';
import CloseIcon from '../Icons/Close';

const Search = ({ onSearch, placeholder }) => {
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (count > 0) {
        onSearch(search);
      }

      setCount((state) => state + 1);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <div className='Search-container'>
      <div className='relative'>
        <input
          className={`Search ${search && 'has-value'}`}
          type='text'
          value={search}
          placeholder={placeholder}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <button className='Search-btn' type='button' onClick={() => setSearch('')}>
            <CloseIcon />
          </button>
        )}
      </div>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  onSearch: PropTypes.func
};

Search.defaultProps = {
  placeholder: 'Search',
  onSearch: () => null
};

export default Search;
