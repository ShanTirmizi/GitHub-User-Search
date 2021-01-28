import React from 'react';
import { GithubContext } from '../context/context';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
import './Card.css'
const Card = () => {
  const { githubUser } = React.useContext(GithubContext);

  const { avatar_url, html_url, name, company, blog, bio, location, twitter_username, } = githubUser;

  return ( 
    <div className='card-container'>
      <img className='card-header-img' src={avatar_url || null} alt={name} />
      <div className="card-info">
        <h4 className="card-info-element name">
          {name || 'Name not found'}
        </h4>
        <div className="card-info-element twitter">
          <p>
          @{twitter_username || 'Twitter Not Found'}
          </p>
          {twitter_username &&
            <button  src={html_url}>follow</button>
          }
        </div>
          {/* <a className="card-info-element a" href={html_url}>follow</a> */}
        <p className='bio card-info-element'>{bio || 'Bio not found'}</p>
        <p className="card-info-element">
          <MdBusiness className="card-info-icon" /> {company || 'Company not found'}
        </p>
        <p className="card-info-element">
          <MdLocationOn className="card-info-icon" /> {location || 'earth'}
        </p>
        <a className="card-info-element blog" href={`https://${blog}`}>
          <MdLink className="card-info-icon" />
          {blog || 'Blog not found'}
        </a>
      </div>
    </div>
  )
};

export default Card;
