import React, { Component } from 'react'

export default class Count extends Component {

    state = {
        count: 0
    }

    increment = () => {
        const { count } = this.state
        const { value } = this.selectedNum
        this.setState({ count: count + value * 1 })
    }
    decrement = () => {
        const { count } = this.state
        const { value } = this.selectedNum
        this.setState({ count: count - value * 1 })
    }
    incrementOdd = () => {
        const { count } = this.state
        const { value } = this.selectedNum;
        if (count % 2 !== 0) this.setState({ count: count + value * 1 })
    }
    incrementSync = () => {
        const { count } = this.state
        const { value } = this.selectedNum;
        setTimeout(() => {
            this.setState({ count: count + value * 1 })
        }, 2000)
    }
    render() {
        const { count } = this.state
        return (
            <div>
                <h2>求和结果为：{count}</h2>
                <select ref={(c) => this.selectedNum = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementOdd}>奇数时加</button>
                <button onClick={this.incrementSync}>异步加</button>
            </div>
        )
    }
}

