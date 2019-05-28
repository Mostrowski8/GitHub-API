import React from 'react';
import ListCreator from './listcreator/listcreator'
import './userinput.less';
import {connect} from 'react-redux';

const Userinput = ({changeUrl, submitUrl, url, selectList, factorial, dispfactorial, value}) => {

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
            <p>Show factorial for input below</p>
            <input value={value} onChange={(e)=> dispfactorial(e.target.value)} type="number"></input><p>{factorial!==null && "Factorial is "+factorial}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      factorial: state.factorial,
      value: state.value
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      dispfactorial: (value)=>dispatch({type:"FACTORIAL", payload:value})
    }
  }

export default  connect(mapStateToProps, mapDispatchToProps)(Userinput);