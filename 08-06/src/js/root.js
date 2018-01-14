import React from 'react'
import ReactDOM from 'react-dom'

import Index from './index'

import ComponentList from './components/list'

import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <div>我是首页</div>
        <BrowserRouter>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/list">About</Link></li>
            </ul>
            <Route exact path="/" component={Index} />
            <Route path="/list" component={ComponentList00000000} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'))