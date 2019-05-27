import React, {Component} from 'react';
import {connect} from 'react-redux';

class ErrorBoundary extends Component {
    state={hasError: false, error: ""};

    componentDidCatch(error, info) {
        this.setState({ hasError: true, error: error });
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
      }

    render(){
        if (this.state.hasError) {
            return <div><h3>Failed to get resource.</h3><p>{this.props.errorType.message}</p><p>Please check connection and URL</p></div>
        }
        return this.props.children;
    }
}

const mapStateToProps = state => {
    return {
      errorType: state.errorType
    }
  }

export default connect(mapStateToProps)(ErrorBoundary)