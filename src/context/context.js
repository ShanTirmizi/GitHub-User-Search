import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const url = 'https://api.github.com';

const GithubContext = React.createContext();


const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers);
    const [requests, setRequests] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const [err, setErr] = useState({show:false, message:''})

    const searchUser = async (user) => {
        toggleErr();
        setIsLoading(true);
        const response = await axios(`${url}/users/${user}`).catch(err => console.log(err));
        console.log(response);
        if (response) {
            setGithubUser(response.data);
            const { login, followers_url } = response.data;

            axios(`${url}/users/${login}/repos?per_page=100`).then((response) => setRepos(response.data));
            axios(`${followers_url}?per_page=100`).then((response) => setFollowers(response.data));
        } else {
            toggleErr(true, "User doesn't exist");
        }
        checkRequests();
        setIsLoading(false);
    };


    const checkRequests = async() =>{
        try {
            const response = await fetch(`${url}/rate_limit`);
            const data = await response.json();
            let dataRate = data.rate.remaining  
            setRequests(dataRate);
            if (dataRate === 0) {
                toggleErr(true, 'Sorry you are out of limit')
            }
        } catch (error) {
            console.log(error);
        }
    }

    const toggleErr = (show = false,message = '') => {
        setErr({ show, message })
    }

    useEffect(() => {
        checkRequests();
    }, [])
    return (
        <GithubContext.Provider value={{ githubUser, repos, followers, requests, err, searchUser, isLoading }}>
            {children}
        </GithubContext.Provider>
    )
}

export { GithubContext, GithubProvider };