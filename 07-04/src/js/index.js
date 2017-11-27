import React from 'react'
import ReactDOM from 'react-dom'
import ComponentHeader from './components/header'
import ComponentBodyIndex from './components/bodyIndex'
import ComponentFooter from './components/footer'

class Index extends React.Component {
	render() {
		// 组件可以用变量来接受
		var componet  = <ComponentHeader />
		return (
			<div>
				{componet}
				<ComponentBodyIndex />
				<ComponentFooter />
			</div>
		)
	}
}

ReactDOM.render(<Index />, document.getElementById('root'))