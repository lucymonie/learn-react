import React from 'react'
import ReactDOM from 'react-dom'

class Main extends React.Component {
  render () {
    return (
      <div>
       <Time />
       <h1>My to do list</h1>
       <List />
       <Button />
      </div>
    )
  }
}

class List extends React.Component {
  render () {
    const autoListItems = ['Walk the dog', 'Eat a banana', 'Turn into a squirrel'];
    return (
      <div>
       <ul className="list">
        {autoListItems.map( listItem => <li>{listItem}</li> )}
       </ul>
      </div>
    )
  }
}

class Button extends React.Component {
  render () {
    return (
      <div>
       <button>Add new list item</button>
      </div>
    )
  }
}

class Time extends React.Component {
  render () {
    const now = new Date();
    return (
      <div>
        <p>Current time: {now.toTimeString().slice(0,5)}</p>
      </div>
    )
  }
}



const app = document.getElementById('app')
ReactDOM.render(<Main />, app)
