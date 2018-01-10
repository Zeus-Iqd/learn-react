// import React from 'react'
// import ReactDOM from 'react-dom'


// class ToDo extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { liArr: [], text: '' }
//     this.handleSubmit = this.handleSubmit.bind(this)
//     this.handleChange = this.handleChange.bind(this)
//   }
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.liArr.map((item) => <li key={item.id}>{item.text}</li>)}
//         </ul>
//         <form onSubmit={this.handleSubmit}>
//           <input onChange={this.handleChange} value={this.state.text} />
//           <button> Add # </button>
//         </form>
//       </div>
//     )
//   }
//   handleSubmit(e) {
//     e.preventDefault()
//     if (this.state.text) {

//       let newArr = { text: this.state.text, id: Date.now() }
//       console.log(newArr)
//       this.setState((pre) => ({
//         liArr: pre.liArr.concat(newArr),
//         text: ''
//       }))
//     }
//   }
//   handleChange(e) {
//     console.log(e)
//     let text = e.target.value
//     this.setState({ text: e.target.value });
//   }
// }

// export default ToDo


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
    return { __html: md.render(this.state.value) };
  }

  render() {
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
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

ReactDOM.render(<MarkdownEditor />, mountNode);