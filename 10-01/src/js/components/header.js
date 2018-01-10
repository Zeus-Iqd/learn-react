import React from 'react'
class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      miniHeader: false
    }
  }
  swithchHeader() {
    this.setState({
      miniHeader: !this.state.miniHeader
    })
  }
  render() {
    // 使用reactNatvie
    const styleComponentHeader = {
      header: {
        backgroundColor: '#333',
        color: '#fff',
        // paddingTop: '15px',
        paddingTop: this.state.miniHeader ? '3px' : '15px',
        // marginTop: '20px'
        marginTop: this.state.miniHeader ? '10px' : '50px'
      }
    }
    return (
      // <header style={styleComponentHeader.header}>
      //   <h1>这里是头部1111111</h1>
      // </header>
      <header style={styleComponentHeader.header} class="smallFontSize" onClick={this.swithchHeader.bind(this)}>
        <h1>这里是头部1111111</h1>
      </header>
    )
  }
}

export default Header
