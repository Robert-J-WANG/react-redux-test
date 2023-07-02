import React, { Component } from 'react'

// 引入connect，用于连接UI组件和store
import { connect } from 'react-redux'
import {
    increment,
    decrement,
    incrementAsync
} from '../../redux/actions/count'


// UI组件
class Count extends Component {

    increment = () => {
        const { value } = this.selectNode;
        this.props.increment(value * 1);
    }

    decrement = () => {
        const { value } = this.selectNode;
        this.props.decrement(value * 1);
    }

    incrementOdd = () => {
        const { value } = this.selectNode;
        if (this.props.count % 2 !== 0) {
            this.props.increment(value * 1)
        }

    }
    incrementAsync = () => {
        const { value } = this.selectNode;
        this.props.incrementAsync(value * 1, 500);
    }
    render() {
        return (
            <div>
                <h2> 这是Count组件,下面组件的人数为{this.props.personCount}</h2>
                <h4>count的结果是{this.props.count}</h4>
                <select ref={c => this.selectNode = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementOdd}>奇数加</button>
                <button onClick={this.incrementAsync}>异步加</button>
                <hr />
            </div>
        )
    }
}


//容器组件
export default connect(
    state => ({
        count: state.count,
        personCount: state.persons.length
    }),
    {
        increment,
        decrement,
        incrementAsync,
    }
)(Count);