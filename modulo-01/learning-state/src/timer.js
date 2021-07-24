'use strict'
import React, { Component } from 'react'
class Timer extends Component {
    constructor() {
        console.log('constructor timer')
        super();
        this.state = {
            time: 0
        }
    }
    componentDidMount() {
        console.log('componentDidMount timer')
        this.timer = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    tick() {
        this.setState({
            time: this.state.time + 1
        })
    }
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps timer', this.props, nextProps)
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate timer', this.props, prevProps)
    }


    shouldComponentUpdate(nextProps, nextState){
        // console.log('shouldComponentUpdate timer', this.props, nextProps);
        return this.props.time !== nextProps.time
    }

    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate timer', this.props, nextProps)
    }
    componentwill
    
    render() {
        console.log('render time')
        return (
            <div>
                Timer: {this.state.time}
            </div>
        )
    }

}
export default Timer;