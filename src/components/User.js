import React from 'react';
import Card from './Card';
import Followers from './Followers';
import './User.css'
const User = () => {
  return ( 
    <section className='user'>
      <div className='user-container'>
        <Card></Card>
        <Followers></Followers>
      </div>
    </section> )
};


export default User;
