import React from 'react';
import ListCreator from './listcreator/listcreator'
import './userinput.less';
const Userinput = ({changeUrl, submitUrl, url, selectList}) => {

//validate url here but do not diable input, red color and message

    return (
        <div className={"userinput"} >
            <p>https://github.com/Mostrowski8/GitHub-API</p>
            <h2>Paste url below</h2>
            <input value={url} type="text" onChange={(e)=>changeUrl(e.target.value)}></input>
            <button onClick={submitUrl}>ADD REPO</button>
            <div>
            <h2>List selector</h2>
            <ListCreator index={0} selectList={selectList}></ListCreator>
            <ListCreator index={1} selectList={selectList}></ListCreator>
            <ListCreator index={2} selectList={selectList}></ListCreator>
            <ListCreator index={3} selectList={selectList}></ListCreator>
            <ListCreator index={4} selectList={selectList}></ListCreator>
            </div>
        </div>
    )
}

export default  Userinput;