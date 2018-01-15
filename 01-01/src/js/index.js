// import React from 'react'

// import ReactDOM from 'react-dom'

// ReactDOM.render(
// 	<h2>hello world</h2>,
// 	document.getElementById('root')
// )

/**
 * 1.jsx中使用表达式(例如1+1，user.firstName, formatName)
 * 2.jsx代码的最外面扩上一个小括号，防止分号自动插入的bug
 * 3.jsx本身也是一种表达式，可以当做变量，函数参数， 函数返回值
 */
// import React from 'react'
// import ReactDOM from 'react-dom'

// import css from '../css/index.css'

// function formatName(user) {
// 	return user.firstName + '' + user.lastName
// }

// const user = {
// 	firstName: 'zhou',
// 	lastName: 'shuai'
// }

// const element = (
// 	<h1>
// 		hello {formatName(user)}
// 	</h1>
// )
// const element = (
// 	<h2>
// 		<span>{1 + 1}</span>
// 	</h2>
// )
// const element = (
// 	<h2>
// 		<span>{user.firstName}</span>
// 	</h2>
// )

// function formatJSX() {
// 	return (
// 		<div>
// 			<h2>
// 				<span>jsx本身也是一种表达式，可以当做变量，函数参数</span>
// 			</h2>
// 		</div>
// 	)
// }

// const ele = (
// 	<div>
// 		<span>当作函数参数</span>
// 	</div>
// )

// function argu(ele) {
// 	return ele
// }

// ReactDOM.render(
// 	argu(ele),
// 	document.getElementById('root')
// )

// const ele = (
// 	<div className={css.box}>box</div>
// )


// ReactDOM.render(
// 	ele,
// 	document.getElementById('root')
// )

// 即便我们每秒都创建了一个描述整个UI树的新元素，React DOM 也只会更新渲染文本节点中发生变化的内容。

// import React from 'react'
// import ReactDOM from 'react-dom'

// function Tick() {
// 	const element = (
// 		<div>
// 			<span>it is {new Date().toLocaleTimeString()}</span>
// 		</div>
// 	)

// 	ReactDOM.render(
// 		element,
// 		document.getElementById('root')
// 	)

// }

// setInterval(Tick, 1000)

// 组件就是接受prop,并且返回jsx的函数，两种方式定义组件

// import React from 'react'
// import ReactDOM from 'react-dom'

// function Welcom(props) {
// 	console.log(props)
// 	return (
// 		<div>
// 			<h2>{props.name}</h2>
// 		</div>
// 	)
// }


// class Welcom extends React.Component {
// 	render() {
// 		console.log(this.props)
// 		return (
// 			<div>
// 				<span>{this.props.name}</span>
// 			</div>
// 		)
// 	}
// }

// ReactDOM.render(
// 	<Welcom name="zhou" />,
// 	document.getElementById('root')
// )


/**
 * 组合组件
 */
// import React from 'react'

// import ReactDOM from 'react-dom'

// function Welcome(props) {
// 	return (
// 		<h2>{props.name}</h2>
// 	)
// }


// function App() {
// 	return (
// 		<div>
// 			<Welcome name="zhou" />
// 			<Welcome name="shuai" />
// 		</div>
// 	)
// }

// ReactDOM.render(
// 	<App />,
// 	document.getElementById('root')
// )

/**
 * 分成小组件(提取组件)
 */

// import React from 'react'
// import ReactDOM from 'react-dom'

// function formatDate(date) {
// 	return date.toLocaleDateString();
// }

// function Comment(props) {
// 	return (
// 		<div className="Comment">
// 			<UserInfo user={props.author} />
// 			<div className="Comment-text">
// 				{props.text}
// 			</div>
// 			<div className="Comment-date">
// 				{formatDate(props.date)}
// 			</div>
// 		</div>
// 	);
// }

// function Avatar(props) {
// 	return (
// 		<img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
// 	)
// }

// function UserInfo(props) {
// 	return (
// 		<div className="UserInfo" >
// 			<Avatar user={props.user} />
// 			<div className="UserInfo-name">
// 				{props.user.name}
// 			</div>
// 		</div >
// 	)
// }

// const comment = {
// 	date: new Date(),
// 	text: 'I hope you enjoy learning React!',
// 	author: {
// 		name: 'Hello Kitty',
// 		avatarUrl: 'http://placekitten.com/g/64/64'
// 	}
// };
// ReactDOM.render(
// 	<Comment
// 		date={comment.date}
// 		text={comment.text}
// 		author={comment.author} />,
// 	document.getElementById('root')
// );

/**
 * props是只读的。 
 *
 *  
 */
/**
 * state(组件内的状态)
 * 封装一个clock
 */

/**
 * 定义为类的组件有一些特性。局部状态就是如此：一个功能只适用于类
 * 1. 类有局部状态
 * 2. 类有生命周期
 * 3.why? 因为他是继承过来的
 * 4. 构造函数是唯一能够初始化this.state的地方
 * 5. 状态更新可能是异步更新的，你不应该依靠它们的值来计算下一个状
 * 6. 状态更新合并
 */

// import React from 'react'
// import ReactDOM from 'react-dom'

// class Clock extends React.Component {
// 	constructor() {
// 		super()
// 		this.state = { time: new Date().toLocaleTimeString() }
// 	}
// 	componentDidMount() {
// 		this.TimerId = setInterval(this.tick.bind(this), 1000)
// 	}
// 	componentWillUnmount() {
// 		clearInterval(this.TimerId)
// 	}
// 	tick() {
// 		console.log(this)
// 		this.setState({ time: new Date().toLocaleTimeString() })
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h2>{this.state.time}</h2>
// 				<h2>{this.props.name}</h2>
// 			</div>
// 		)
// 	}
// }


// ReactDOM.render(
// 	<Clock name="zhou" />,
// 	document.getElementById('root')
// )
/**
 * 主要就是. 事件处理函数的this绑定问题
 * 1. 在事件里的回调函数使用es6语法
 * 2. 在构造函数中初始化绑定
 * 3. 使用属性初始化器语法（需要babel插件）
 * 4. 事件处理程序传递参数
 */

// import React from 'react'

// import ReactDOM from 'react-dom'

// class Toggle extends React.Component {
//   constructor() {
//     super()
//     this.state = { isOn: true }
//     this.toggleButton = this.toggleButton.bind(this)
//   }

//   toggleButton() {
//     this.setState((pre) => ({ isOn: !pre.isOn }))
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.toggleButton}>120000</button>
//         <span>{this.state.isOn ? 'on' : 'off'}</span>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// )

// import React from 'react'

// import ReactDOM from 'react-dom'

// class Popper extends React.Component {
//   constructor() {
//     super();
//     this.state = { name: 'Hello world!' }
//     // 这种方式没办法传参
//     // this.preventPop = this.preventPop.bind(this)
//   }

//   preventPop(name, e) {    //事件对象e要放在最后
//     console.log(name)
//     console.log(e.target)
//     e.preventDefault();
//     // console.log(name, e)
//     // alert(name);
//   }

//   render() {
//     return (
//       <div>
//         <p>hello</p>
//         {/* Pass params via bind() method. */}
//         {/* 个人感觉这种方法最常用 */}
//         {/* <a href="https://reactjs.org" onClick={this.preventPop.bind(this, this.state.name)}>Click</a> */}
//         {/* 这种方法不推荐 */}
//         <a href="https://reactjs.org" onClick={(e) => this.preventPop(this.state.name, e)}>Click</a>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Popper />,
//   document.getElementById('root')
// )


// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = { isLoggedIn: false };
//   }

//   handleLoginClick() {
//     this.setState({ isLoggedIn: true });
//   }

//   handleLogoutClick() {
//     this.setState({ isLoggedIn: false });
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;

//     let button = null;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );

/**
 * 1. 列表渲染多个组件
 * 2. 注意keys.应该保存在数组中的这个元素上，而不是放在组件的li元素上
 * 3. 组件中需要使用和key相同的值，请将其作为属性传递
 */

import React from 'react'

import ReactDOM from 'react-dom'

// const numbers = [2, 4, 6, 8, 10]
// // 如果列表重新排序，我们不建议使用索引来进行排序，
// // 因为这样会导致渲染变慢
// const numElements = numbers.map((el, index) => (<li key={index}>{el}</li>))

// console.log(numElements)

// ReactDOM.render(
//   <ul>{numElements}</ul>,
//   document.getElementById('root')
// )

/**
 * 受控组件
 * 1. 在react中， textarea会用value属性来代替，这样的话，表单中的textarea非常
 * 类似于使用单行输入的表单
 * 2. 总之input , textarea, select 都十分类似，他们都通过传入一个value属性
 * 来实现对组件的控制
 * 3。 当你有处理多个受控的input元素时，你可以通过给每一个元素添加一个names
 * 属性，让处理函数根据event.target.name的值来选择做什么。
 * 4. 受控组件的替代方法，======》 非受控组件
 */



// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: '' };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value.toUpperCase()});
//     // this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// class EssayForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 'Please write an essay about your favorite DOM element.'
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert('An essay was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <textarea value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }


// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: 'coconut' };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite La Croix flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Is going:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Number of guests:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange} />
//         </label>
//       </form>
//     );
//   }
// }


const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: '', scale: 'c' };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    console.log(temperature, 'temperature')
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);

// ReactDOM.render(
//   <Reservation />,
//   document.getElementById('root')
// )