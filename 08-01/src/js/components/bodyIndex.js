import React from 'react'

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
  render() {
    // 注释
    /* 注释 */
    setTimeout(() => {
      this.setState({userName:'zhangwenqing'})
    }, 3000)
    return (
      <div>
        <h2>这是主题内容部分</h2>
        <p>{this.state.userName}</p>
      </div>
    )
  }
}

export default BodyIndex