import React, { Component } from 'react'
// 引入count的容器组件，而不是UI组件，因为UI组件是容器组件的子组件
import Count from './containers/Count'

export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
      </div>
    )
  }
}