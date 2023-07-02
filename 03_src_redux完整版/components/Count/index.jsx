import React, { Component } from 'react'
// 引入store对象，获取数据
import store from '../../redux/store'
// 引入actionCreator, 专门用于创建action对象
import { createIncrementAction, createDecrementAction } from '../../redux/count_action'

export default class Count extends Component {

    state = {}

    // componentDidMount() {
    //     // 检查redux中状态的变化，只要变化，就调用render
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    increment = () => {
        const { value } = this.selectedNum
        store.dispatch(createIncrementAction(value * 1))
    }
    decrement = () => {
        const { value } = this.selectedNum
        store.dispatch(createDecrementAction(value * 1))
    }
    incrementOdd = () => {
        const count = store.getState()
        const { value } = this.selectedNum;
        if (count % 2 !== 0) store.dispatch(createIncrementAction(value * 1))
    }
    incrementSync = () => {
        const { value } = this.selectedNum;
        setTimeout(() => {
            store.dispatch(createIncrementAction(value * 1))
        }, 1000)
    }
    render() {
        return (
            <div>
                <h2>求和结果为：{store.getState()}</h2>
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

