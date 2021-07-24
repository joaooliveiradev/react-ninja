'use strict';
import React, { Component } from 'react'

class Plugin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <div>
                <div>Valor: {this.state.value}</div>
                <input type="text" ref={(element) => this.myInput = element} />
                <button onClick={() => this.setState(({ value: this.myInput.value }))}>Submit</button>
            </div>
        )
    }
}
export default Plugin