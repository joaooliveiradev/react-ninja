'use strict';
import React , {Component} from 'react'

class ErrorComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false,
        }
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }

    componentDidCatch(error, info) {
        logErrorToMyService(error, info);
      }
    render(){
        if(this.state.hasError){
            return <h1>Deu ruim fião!  </h1>
        }

        return this.props.children; 
    }

    
} 

export default ErrorComponent