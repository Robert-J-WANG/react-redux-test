import React, { Component } from 'react'
// 引入count的容器组件，而不是UI组件，因为UI组件是容器组件的子组件
import Count from './containers/Count'

// 引入redux中的store对象，并以props的形式传给子组件Count
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
        <Count store={store} />
      </div>
    )
  }
}