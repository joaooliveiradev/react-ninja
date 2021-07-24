import React, { Component } from 'react'
import Button from './button';
class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        }
    }
    handleOnClick(type) {
        this.setState(prevState => ({
            counter: type == "sub" ? --prevState.counter : ++prevState.counter
        }))
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate counter', prevProps, this.props)
    }

    componentWillUnmount(){
        console.log('componentWillUnmount counter')
    }

    componentDidUpdate() {
        if(this.state.counter === 5)
          throw new Error('I crashed');
      }

    render() {
        return (
            <div>
                <Button handleClick={this.handleOnClick.bind(this, 'sub')}>Subtrair</Button>
                <Button>{this.state.counter}</Button>
                <Button handleClick={this.handleOnClick.bind(this, 'sum')}>Adicionar</Button>
            </div>

        )
    }
}

export default Counter