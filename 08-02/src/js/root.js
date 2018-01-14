// import ListComponent from './components/list'
// import DemoComponent from './components/demo'
// import DemoTwo from './components/demoTwo'
// import Index from './index'
// import React from 'react'
// import ReactDOM from 'react-dom'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Index</Link></li>
//         <li><Link to="/list">list</Link></li>
//         <li><Link to="/demo/">demo</Link></li>
//         <li><Link to="/demo">demo</Link></li>
//       </ul>
//       <hr />

//       {/*  */}
//       <Route exact path="/" component={Index} />
//       <Route path="/list" component={ListComponent} />
//       <Route strict path="/demo/" component={DemoComponent} />
//       <Route component={DemoTwo}></Route>
//     </div>
//   </Router>
// )

// ReactDOM.render(<BasicExample />, document.getElementById('root'))

// import React from 'react'
// import ReactDOM from 'react-dom'
// import { BrowserRouter, Route, Link } from 'react-router-dom'
// import Index from './index'
// import ListComponent from './components/list'


// const Root = (item) => {
//   console.log(item)
//   return (
//     <BrowserRouter>
//       <div>
//         <ul>
//           <li><Link to="/">Index</Link></li>
//           <li><Link to="/list">List</Link></li>
//           <li><Link to="/list/demo/">还是能匹配到list这个组件</Link></li>
//         </ul>
//         {/*
//           1、 route里面的是匹配规则，不加path,就是普通组件，始终显示，
//           2. 加了path,就是按照字符匹配，即path的内容可以理解为正则的规则，to 后面就是要匹配的内


//         */}
//         <Route exact path="/" component={Index}></Route>
//         <Route path="/list/" component={ListComponent}></Route>
//       </div>
//     </BrowserRouter>
//   )
// }

// ReactDOM.render(<Root />, document.getElementById('root'))




// import React from 'react'
// import ReactDOM from 'react-dom'

// class Cloak extends React.Component {
//   constructor(props) {
//     console.log(props)
//     super(props)
//     this.state = { time: 0 }
//   }
//   componentDidMount() {
//     this.tick()
//   }
//   tick() {
//     setInterval(() => {
//       this.setState((preState) => {
//         // console.log(preState, preState)
//         return { time: preState.time + 1 }
//       })
//       // 下面为简写方式， 解决Js了解析的语法错误
//       // this.setState((pre) => ({ time: pre.time + 1 }))
//       // 个人感觉也可以这样写
//       // this.setState({ time: this.state.time + 1 })
//     }, 1000)
//   }
//   render() {
//     return (
//       <div>
//         <span>{this.state.time}</span>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Cloak />, document.getElementById('root'))

import React from 'react'

import ReactDOM from 'react-dom'
class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Type some *markdown* here!' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    const md = new Remarkable();
    // return { __html: md.render(this.state.value) };
  }
  render() {
    var test = { __html: '<h2>我是标题</h2>' }
    let test2 = { __html: 'First &middot; Second' };
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <textarea
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className="content"
          // dangerouslySetInnerHTML={this.getRawMarkup()}
          dangerouslySetInnerHTML={test}
        />
      </div>
    );
  }
}

// ReactDOM.render(<MarkdownEditor />, mountNode);



// class TodoApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: [], text: '' };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
//     return (
//       <div>
//         <h3>TODO</h3>
//         <TodoList items={this.state.items} />
//         <form onSubmit={this.handleSubmit}>
//           <input
//             onChange={this.handleChange}
//             value={this.state.text}
//           />
//           <button>
//             Add #{this.state.items.length + 1}
//           </button>
//         </form>
//       </div>
//     );
//   }

//   handleChange(e) {
//     this.setState({ text: e.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     if (!this.state.text.length) {
//       return;
//     }
//     const newItem = {
//       text: this.state.text,
//       id: Date.now()
//     };
//     this.setState(prevState => ({
//       items: prevState.items.concat(newItem),
//       text: ''
//     }));
//   }
// }

// class TodoList extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.props.items.map(item => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     );
//   }
// }

ReactDOM.render(<MarkdownEditor />, document.getElementById('root'));



