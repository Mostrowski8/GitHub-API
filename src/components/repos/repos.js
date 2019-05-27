import React from 'react';
import Repo from './repo/repo'
import './repos.less';
import ErrorBoundary from '../errorboundary/errorboundary';

const Repos = (props) => {
    let newRepos = null;
if (props.repos) {
    newRepos = props.repos.map((repo)=>{return <ErrorBoundary key={repo.id}><Repo  name={repo.name} owner={repo.owner.login} description={repo.description} pushed_at={repo.pushed_at} repo={repo} list={props.list} /></ErrorBoundary>});
}
    return (

        <div className={"repos"}>{newRepos}</div>
   
    )
}

export default Repos;