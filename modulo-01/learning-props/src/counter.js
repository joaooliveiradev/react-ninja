import React, {Component} from 'react'
import Button from './button';

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    handleOnClick(type) {
        this.setState(prevState => ({
            counter: type == "sub" ? --prevState.counter : ++prevState.counter 
        }))
    }

    render() {
        return (
            <div>
                <Button handleOnClick={this.handleOnClick.bind(this, 'sub')}>Subtrair</Button>
                <Button>{this.state.counter}</Button>
                <Button handleOnClick={this.handleOnClick.bind(this, 'sum')}>Adicionar</Button>
            </div>

        )
    }
}

export default Counter