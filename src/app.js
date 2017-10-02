import React from 'react'
import ReactDOM from 'react-dom'
import FaTimesCircle from 'react-icons/lib/fa/times-circle'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaCheckCircle from 'react-icons/lib/fa/check-circle'
import './index.css'


class List extends React.Component {
  constructor () {
    super();
    this.state = {
      name: 'Lucy'
    }
  }

  render () {
    let name;
    if (this.state.name) {
      name = this.state.name + "'s";
    } else {
      name = 'My';
    }

    return (
      <div className="container">
        <h1>{name} to do list</h1>
        <ListItems />
        <Button />
      </div>
    )
  }
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

const ListItems = props => {
  const autoListItems = ['Walk the dog', 'Eat a banana', 'Turn into a squirrel'];
  return (
    <div>
      <ul className="list">
        {autoListItems.map( listItem => <li>{listItem} <Edit /> <Done /> <Delete /></li> )}
      </ul>
    </div>
  );
}




const Button = props => (
  <div>
   <button>Add new</button>
  </div>
)



const app = document.getElementById('app');
ReactDOM.render(<List />, app)
