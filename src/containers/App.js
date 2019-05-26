import React from 'react';
import {connect} from 'react-redux';

import '../components/repos/repo/repo';
import '../components/userinput/user-input';
import Repos from '../components/repos/repos';
import Userinput from '../components/userinput/user-input';
import {submit} from '../store/actions';
import ErrorBoundary from '../components/errorboundary/errorboundary';
import './App.less'



function App(props) {

  return (
    <div className="App">
      
      <p>https://github.com/Mostrowski8/GitHub-API</p>
     <Userinput selectList={props.selectList} url={props.url} submitUrl={()=>props.submitUrl(props.url)} changeUrl={props.changeUrl}></Userinput>
     <hr></hr>
     <ErrorBoundary>
     <Repos repos={props.repos} list={props.list}/>
     </ErrorBoundary>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    url: state.url,
    repos: state.userRepos,
    list: state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitUrl: (url)=>dispatch(submit(url)),
    changeUrl: (url)=>dispatch({type:"CHANGE", payload:url}),
    selectList: (index, value)=>dispatch({type:"SELECT_LIST", payload:{index:index, value:value}})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
