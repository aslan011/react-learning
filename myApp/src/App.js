import React, { Component } from 'react';
import Ninjas from './Ninjas.js';
import AddNinja from './AddNinja.js';

class App extends Component {
  state = {
    ninjas : [
      { name: 'Has', age:30, belt: 'Black', id: 1 },
      { name: 'Billy', age:20, belt: 'Blue', id: 2 },
      { name: 'Tony', age:25, belt: 'Green', id: 3 }
    ]
}

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id 
    });
    this.setState({
      ninjas: ninjas
    })
  }

  //testing out lifecycle hooks
/*   componentDidMount(){
    console.log('component mounted');
  }

  componentDidUpdate(prevProps, prevState){
    console.log('componenet updated');
    console.log(prevProps, prevState);
  } */

  render() {
    return (
      <div className='App'>
        <h1>My first React app</h1>
        <p>Welcome!</p>
        <Ninjas deleteNinja = { this.deleteNinja }ninjas = {this.state.ninjas} />
        <AddNinja addNinja = { this.addNinja }/>
      </div>
    )
  }
}
export default App;