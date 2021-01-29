import React from 'react';
import { GithubContext } from '../context/context';
import { Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
import './Repos.css';
const Repos = () => {
  const { repos } = React.useContext(GithubContext);

  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if(!language) return total;
    if(!total[language]) {
      total[language] = { label: language, value: 1 , stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language], value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  console.log(languages)

  const mostUsed = Object.values(languages).sort((a,b) => {
    return b.value - a.value;
  }).slice(0 ,5);

  const mostPopular = Object.values(languages).sort((a, b) => {
    return b.stars - a.stars
  }).map((item) => {
    return { ...item, value: item.stars };
  }).slice(0, 5);

  let { stars, forks } = repos.reduce (
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks }
      return total;
    }, {
      stars: {},
      forks: {},
    }
  );

  stars = Object.values(stars).splice(-5).reverse();
  forks = Object.values(forks).splice(-5).reverse();

  return (
    <section className='repos'>
      <div className='repos-center'>
        <Pie3D className='repos-chart' data={mostUsed} />
        <Column3D className='repos-chart' data={stars} />
        <Doughnut2D className='repos-chart' data={mostPopular}/>
        <Bar3D className='repos-chart' data={forks} />
      </div>
    </section>
    
  ) ;
};


export default Repos;
