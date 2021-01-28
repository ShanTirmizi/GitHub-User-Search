import React, { useState } from 'react';
import { GithubContext } from '../context/context';
import './Search.css';
const Search = () => {
  const [search, setSearch] = useState('');
  const { requests, err, searchUser } = React.useContext(GithubContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(search) {
      searchUser(search);
    }
  };
  return (
    <section className='search'>
      <div className='search-center'>
        <div className='search-center-1'>
          {err.message && (
            <div>
              <p>{err.message}</p>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="search-control">
              {/* <MdSearch /> */}
              <input type='text' placeholder='Enter User' 
                value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type='submit'>Search</button>
            </div>
          </form>
        </div>
        <div className='search-center-1'>
          <h3>requests : {requests} / 60</h3>
        </div>
      </div>
    </section>
  ) ;
};

export default Search;
