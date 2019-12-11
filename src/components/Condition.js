import React from 'react'

//! 简化版的条件渲染。原文档太过复杂
export default class Condition extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }
  toggle = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }
  render() {
    //! 注意this不要丢掉 （在class组件中不能丢this）
    return (
    <div>
      <p>{this.state.isLoggedIn? 'Welcome back!':'Please sign up'}</p>
      <button onClick={this.toggle}>{this.state.isLoggedIn? 'logout':'login'}</button> 
    </div>
    )
  }
}

