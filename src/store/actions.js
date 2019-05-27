import axios from 'axios';

export const ADD = 'ADD';
export const CHANGE = "CHANGE";
export const SELECT_LIST = "SELECT_LIST";
export const THROW_ERROR = "THROW_ERROR";

export const passdata = (data) => {
    return {
        type: ADD,
        payload: data
    }
}

export const submit = (url) => {
    let apiUrl = (url) => {
        let cutUrl = url.split("/");
        
        let owner = cutUrl[3];
        let repo = cutUrl[4];
        return (
            `https://api.github.com/repos/${owner}/${repo}`
        )
    }
   
    return dispatch => {
        axios.get(apiUrl(url)).then(response => {
            console.log(response, response.data);
            dispatch(passdata(response.data))
        }).catch(error => {
            console.log(error);
            dispatch(passdata(error))
        })
    }
}