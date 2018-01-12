import React from 'react'
import BodyChild from './bodyChild'

class BodyIndex extends React.Component {
  constructor() {
    super()//调用基类的所有初始化方法
    this.state = {
      userName: 'zhoushuai'
    }
  }
  componentWillMount() {
    // 定义你的逻辑即可
    console.log('这是bodyIndex页面')
  }
  componentDidMount() {
    console.log('这是这是bodyIndex页面页面加载完成')
  }
  changeUserInfo() {
    console.log(this, 'this是什么')
    this.setState({ userName: '张文庆' })
  }
  handleChildValueChange(event) {
    console.log(event.target, 2220)
    this.setState({ userName: event.target.value })
  }
  render() {
    // 注释
    /* 注释 */
    // setTimeout(() => {
    //   this.setState({userName:'zhangwenqing'})
    // }, 3000)
    return (
      <div>
        <h2>这是主题内容部分</h2>
        <p>{this.state.userName}</p>
        {/* props属于外来属性 */}
        {/* state属于模块滋生属性 */}
        <p>{this.props.userName}{this.props.userId}</p>
        <input type="button" value="按钮" onClick={this.changeUserInfo.bind(this)} />
        <BodyChild handle={this.handleChildValueChange.bind(this)}/>
      </div>
    )
  }
}

export default BodyIndex