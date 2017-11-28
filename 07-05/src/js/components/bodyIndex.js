import React from 'react'

class BodyIndex extends React.Component {
  componentWillMount(){
    // 定义你的逻辑即可
    console.log('这是bodyIndex页面')
  }
  componentDidMount(){
    console.log('这是这是bodyIndex页面页面加载完成')
  }
  render() {
    let userName = 'zhoushuai'
    var isDisabled = false
    let html = 'IMOOC&nbsp;Lesson'
    // 注释
    /* 注释 */
    return (
      <div>
        <h2>这是主题内容部分</h2>
        <p>{userName == '' ? '用户还没登陆' : '用户名：' + userName}</p>
        {/* 值的绑定请注意用{}这个是jsx里面的注释 */}
        {<p><input type="button" value="默认按钮" disabled={isDisabled} /></p>}
        {/* 解析html，可以用unicode 转码（后端转码） */}
        <p>{html}</p>
        {/* xss攻击，有漏洞 */}
        <p dangerouslySetInnerHTML={{ __html: html }}></p>
      </div>
    )
  }
}

export default BodyIndex