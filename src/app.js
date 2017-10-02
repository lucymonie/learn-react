import React from 'react'
import ReactDOM from 'react-dom'


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
      <div>
        <h1>{name} to do list</h1>
        <ListItems />
        <Button />
      </div>
    )
  }
}

const ListItems = props => {
  const autoListItems = ['Walk the dog', 'Eat a banana', 'Turn into a squirrel'];
  return (
    <div>
      <ul className="list">
        {autoListItems.map( listItem => <li>{listItem}</li> )}
      </ul>
    </div>
  );
}




const Button = props => (
  <div>
   <button>Add new</button>
  </div>
)



const app = document.getElementById('app')
ReactDOM.render(<List />, app)
