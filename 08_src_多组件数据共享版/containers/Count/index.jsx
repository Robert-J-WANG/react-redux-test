import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count'
import React, { Component } from 'react'

// 定义UI组件
class Count extends Component {
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
        this.props.asyncJia(value * 1, 500)
    }
    render() {
        return (
            <div>
                <h2>我是Count组件,下面组件的总人数为：{this.props.renshu}</h2>
                <h4>求和结果为：{this.props.count}</h4>
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

//使用connect创建并暴露一个count的容器组件
export default connect(
    state => ({
        count: state.he,
        renshu: state.rens.length
    }),
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        asyncJia: createIncrementAsyncAction

    }
)(Count)