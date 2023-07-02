import React, { Component } from 'react'

export default class Count extends Component {

    state = {}

    increment = () => {
        const { value } = this.selectedNum
        this.props.jia(value * 1)
    }
    decrement = () => {
        const { value } = this.selectedNum
        this.props.jian(value * 1)
    }
    incrementOdd = () => {
        const { value } = this.selectedNum;
        if (this.props.count % 2 !== 0) this.props.jia(value * 1)
    }
    incrementAsync = () => {
        const { value } = this.selectedNum;
        this.props.asyncJia(value * 1,1000)
    }
    render() {
        console.log('UI组件接收到的props是：', this.props)
        return (
            <div>
                <h2>求和结果为：{this.props.count}</h2>
                <select ref={(c) => this.selectedNum = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementOdd}>奇数时加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}

