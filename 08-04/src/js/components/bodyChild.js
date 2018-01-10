import React from 'react'
export default class BodyChild extends React.Component {
  render() {
    return (
      <div>
        {/* 子页面通过调用事情处理父组件的方法 */}
        <p>子页面输入：<input type="text" onChange={this.props.handle}/></p>
        <p>{this.props.userId}{this.props.userName}</p>
        <p>{this.props.a}</p>
        {/* <p>{this.props}</p> */}
      </div>
    )
  }
}