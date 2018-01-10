import React from 'react'
import ReactDOM from 'react-dom'
import ComponentHeader from './components/header'
import ComponentBodyIndex from './components/bodyIndex'
import ComponentFooter from './components/footer'

class Index extends React.Component {
	// 理解生命周期执行函数的顺序
	componentDidMount() {
		console.log('这是index加载完成')
	}

	componentWillMount() {
		console.log('这是index将要加载')
	}


	render() {
		// 组件可以用变量来接受
		var componet = <ComponentHeader />
		return (
			<div>
				{componet}
				<ComponentBodyIndex  userName = {'nick'}/>
				<ComponentFooter />
			</div>
		)
	}
}

ReactDOM.render(<Index />, document.getElementById('root'))