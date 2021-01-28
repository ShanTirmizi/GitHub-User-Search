import React from 'react';
import { Info, Repos, User, Search } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
import './Dashboard.css';

const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);



  if(isLoading) {
    return (
      <main>
        <Search />
        <img src={loadingImage} className='loading-img' alt='loading' />
      </main>
    )
  }
  return (
    <main>
      <div className="home-container">
        <div className="home-left-container">
          <User />
        </div>
        <div className="home-right-container">
          <Search />
          <Info />
          <Repos />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
