import React from 'react';
import List from './list/list';
import {parseFromNow, formatISO} from '../../../helper-functions';

const Repo = ({name, description, owner, pushed_at, list, repo}) => {

    return (<div style={{marginBottom: "10px"}}>
        <div>{name}</div>
        <div><div>Description:</div><div>{description? description:"lacking"}</div></div>
        <List list={list} repo={repo}></List>
        <div><div>Owner:</div><div>{owner}</div></div>
        <div><div>Last push:</div><div>{formatISO(pushed_at, 'MM-DD-YYYY LTS')}</div></div>
        </div >
    )
}

export default Repo;