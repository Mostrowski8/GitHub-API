import React from 'react';
import Repo from './repo/repo'

const Repos = (props) => {
    let newRepos = null;
if (props.repos) {
    newRepos = props.repos.map((repo)=>{return <Repo key={repo.id} name={repo.name} owner={repo.owner.login} description={repo.description} pushed_at={repo.pushed_at} repo={repo} list={props.list} />});
}
    return (
        <div>{newRepos}</div>
    )
}

export default Repos;