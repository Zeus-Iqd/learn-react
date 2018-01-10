import React from 'react'
import footerCss from '../../css/footer.css'
console.log(footerCss)
import { Input, Button } from 'antd';
// import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
// ReactDOM.render(<Input placeholder="Basic usage" />, mountNode);

export default class Footer extends React.Component {
  render() {
    console.log(122120)
    return (
      <footer className={footerCss.miniFooter}>
        <h2>这是底部</h2>
        {/* <Input placeholder="Basic usage" /> */}
        <Button disabled>default</Button>
        {/* <Button type="primary">primary</Button> */}
        <Button type="danger">Danger</Button>
      </footer>
    )
  }
}
