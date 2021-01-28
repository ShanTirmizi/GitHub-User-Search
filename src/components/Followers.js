import React from 'react';
import { GithubContext } from '../context/context';
import './Followers.css';

const Followers = () => {
  const { followers } = React.useContext(GithubContext);

  return (
    <div>
      <div className='followers'>
        {
          followers.map((follower, index) => {
            return (
              <div key={index}>
                <div className='followers-container'>
                  <img src={follower.avatar_url} alt={follower.login} />
                  <div className='followers-container-info'>
                  <h4>{follower.login}</h4>
                  <a href={follower.html_url}>{follower.html_url}</a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Followers;
