import React from 'react';
import ListCreator from './listcreator/listcreator'
import './userinput.less';

const Userinput = ({changeUrl, submitUrl, url, selectList}) => {

    return (
        <div className={"userinput"} >
            <h2>Paste url below</h2>
            <input value={url} type="text" onChange={(e)=>changeUrl(e.target.value)}></input>
            <button onClick={submitUrl}>ADD REPO</button>
            <h2>List creator</h2>
            <div className={"row inputscontainer"}>
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