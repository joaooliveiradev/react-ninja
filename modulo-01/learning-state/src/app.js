'use strict';
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }

        this.handleForm = this.handleForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleForm(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit(e) {
        alert(`O valor ${this.state.value} foi enviado com sucesso!`);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleForm}/>

                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default App;



