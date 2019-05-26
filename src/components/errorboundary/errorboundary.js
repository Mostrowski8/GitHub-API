import React, {Component} from 'react';

export default class ErrorBoundary extends Component {
    state={hasError: false, error: ""};

    componentDidCatch(error, info) {
        return { hasError: true, error: error };
    }

    render(){
        if (this.state.hasError) {
            return <div><h1>Something went wrong</h1><p>{JSON.parse(this.state.error)}</p></div>
        }
        return this.props.children;
    }
}