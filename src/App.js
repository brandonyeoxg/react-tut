import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
    state = {
        ninjas: [
            {name: 'Ryu', age: 25, belt: 'black', id: 1},
            {name: 'Yoshi', age: 30, belt: 'green', id: 2},
            {name: 'Crystal', age: 20, belt: 'pink', id: 3},
        ]
    }
    render() {
        return (
        <div className="App">
            <h1>My first React app!</h1>
            <p>Welcome :)</p>
            <Ninjas ninjas = {this.state.ninjas}/>
        </div>
    );
  }
}

export default App;
