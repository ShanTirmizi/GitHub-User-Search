import React from 'react';
import { GithubContext } from '../context/context';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import './Info.css';

const UserInfo = () => {
  const { githubUser } = React.useContext(GithubContext);
  const { public_repos, followers, following, public_gists } = githubUser;
    const items = [
      {
        id: 1,
        icon: <GoRepo className='icon' />,
        label: 'repos',
        value: public_repos,
        color: 'pink',
      },
      {
        id: 2,
        icon: <FiUsers className='icon' />,
        label: 'followers',
        value: followers,
        color: 'green',
      },
      {
        id: 3,
        icon: <FiUserPlus className='icon' />,
        label: 'following',
        value: following,
        color: 'purple',
      },
      {
        id: 4,
        icon: <GoGist className='icon' />,
        label: 'gists',
        value: public_gists,
        color: 'yellow',
      },
    ];
  return ( 
    <section className='info'>
      <div className='info-center'>
        {
          items.map(item => {
            return (
              <article className='info-content'>
                {/* <span >
                  {item.icon}
                </span> */}
                <div className='info-content-value'>
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
};

export default UserInfo;
