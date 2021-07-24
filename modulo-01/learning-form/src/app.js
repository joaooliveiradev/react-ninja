'use strict';
import React, { Component } from 'react';


class App extends Component {
    constructor() {
        super();
        this.state = {
            checked: false,
            isVisible: false,
            alert: false
        }
    }


    render() {
        return (
            <div>
                <label>
                    <input type="checkbox" checked={this.state.checked} value="M" onClick={() => {
                        this.setState({
                            checked: !this.state.checked
                        }, () => {
                            this.setState({
                                isVisible: this.state.checked
                            }, () => {
                                this.setState({
                                    alert: !this.state.alert
                                })
                            })
                        })
                    }}
                    />
                    Mostrar conteúdo
                </label>
                {this.state.isVisible && <div>Olha eu aqui</div>}
                {this.state.alert ? alert('sim funciona') : null}
            </div>
        )
    }
}

export default App;



