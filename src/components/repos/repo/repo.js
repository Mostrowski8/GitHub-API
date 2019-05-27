import React from 'react';
import List from './list/list';
import {parseFromNow, formatISO} from '../../../helper-functions';
import './repo.less'

const Repo = ({name, description, owner, pushed_at, list, repo}) => {

    if (owner==="error"){
        throw new Error("Failed to get resource");
    }

    return (<div className={"repo"}>
        <div className={"title"}><h3>{name}</h3></div>
        <div  className={"content"}>
        <div className={"column-1"}><div className={"label text-right"}>Description:&nbsp;</div><div className={"value text-left"}>{description? description:"lacking"}</div></div>
        <List list={list} repo={repo}></List>
        <div className={"row"}><div className={"label column-2 text-right"}>Owner:&nbsp;</div><div className={"value column-2 text-left"}>{owner}</div></div>
        <div className={"row"}><div className={"label column-2 text-right"}>Last push:&nbsp;</div><div className={"value column-2 text-left"}>{formatISO(pushed_at, 'MM-DD-YYYY LTS')}</div></div>
        </div>
        </div>
    )
}

export default Repo;