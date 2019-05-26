import React from 'react';
import ListCreator from './listcreator/listcreator'

const Userinput = ({changeUrl, submitUrl, url, selectList}) => {

//validate url here but do not diable input, red color and message

    return (
        <div>
            <input value={url} type="text" onChange={(e)=>changeUrl(e.target.value)}></input>
            <button onClick={submitUrl}>ADD REPO</button>
            <ListCreator index={0} selectList={selectList}></ListCreator>
            <ListCreator index={1} selectList={selectList}></ListCreator>
            <ListCreator index={2} selectList={selectList}></ListCreator>
            <ListCreator index={3} selectList={selectList}></ListCreator>
            <ListCreator index={4} selectList={selectList}></ListCreator>
        </div>
    )
}

export default  Userinput;