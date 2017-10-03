import React from 'react'
import ReactDOM from 'react-dom'
import FaTimesCircle from 'react-icons/lib/fa/times-circle'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaCheckCircle from 'react-icons/lib/fa/check-circle'
import css from './index.css'


class List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputText: '',
      listItems: ['Walk the dog', 'Eat a banana', 'Turn into a squirrel'],
    }
  }

  onChange (e) {
    this.setState({inputText: e.target.value});
  }

  onSubmit (e) {
    e.preventDefault();
    const newListItems = [...this.state.listItems, this.state.inputText];
    this.setState({
      inputText: '',
      listItems: newListItems
    });

  }

  render () {
    return (
      <div className="container">
        <h1>My to do list</h1>
        <ListItems items={this.state.listItems}/>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input value={this.state.inputText} onChange={this.onChange.bind(this)} />
          <button>
           Add new
          </button>
       </form>
      </div>
    )
  }
}

const ListItems = props => {
  return (
    <ul>
      {props.items.map((item, index) =>
        <li key={index}>{item} <Delete /></li>)
      }
    </ul>
  )
}


class Delete extends React.Component {
  render() {
    return <span className="icon"><FaTimesCircle /></span>
  }
}

class Edit extends React.Component {
  render() {
    return <span className="icon"><FaPencil /></span>
  }
}

class Done extends React.Component {
  render() {
    return <span className="icon"><FaCheckCircle /></span>
  }
}


const app = document.getElementById('app');
ReactDOM.render(<List />, app)
