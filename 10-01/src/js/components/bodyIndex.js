import React from 'react'
import ReactDOM from 'react-dom'
import BodyChild from './bodyChild'
import PropTypes from 'prop-types'
import ReactMinxin from 'react-mixin'
import MinxinLog from './mixins'
console.log(MinxinLog, 'MinxinLog')
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
    // 第一种方法（原生）
    // const submit = document.getElementById('submit')
    // console.log(submit)
    // console.log(ReactDOM.findDOMNode(submit))
    // // submit.style.color = 'red'
    // ReactDOM.findDOMNode(submit).style.color = 'red'

    // 第二种方法（refs）
    console.log(this.refs.domP)
    this.refs.domP.style.color = 'green'
    MinxinLog.log()
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
        <p ref="domP">{this.props.userName}{this.props.userId}</p>
        <input type="button" id="submit" value="按钮" onClick={this.changeUserInfo.bind(this)} />
        <BodyChild {...this.props} a={22322} handle={this.handleChildValueChange.bind(this)} />
      </div>
    )
  }
}

BodyIndex.defaultProps = {
  userId: 'hahha'
}
// BodyIndex.propTypes = {
//   userId: PropTypes.any.isRequired,
// }

ReactMinxin(BodyIndex.prototype,MinxinLog)


export default BodyIndex