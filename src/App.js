import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinjas from "./AddNinja";

class App extends Component {
    state = {
        ninjas: [
            {name: 'Ryu', age: 25, belt: 'black', id: 1},
            {name: 'Yoshi', age: 30, belt: 'green', id: 2},
            {name: 'Crystal', age: 20, belt: 'pink', id: 3},
        ]
    }

    addNinja = (ninja) => {
        ninja.id = Math.random();
        let newNinjaList = [...this.state.ninjas, ninja];
        newNinjaList.push(ninja);
        this.setState({
            ninjas: newNinjaList
        });
    }

    render() {
        return (
        <div className="App">
            <h1>My first React app!</h1>
            <p>Welcome :)</p>
            <Ninjas ninjas = {this.state.ninjas}/>
            <AddNinjas addNinja= {this.addNinja}/>
        </div>
    );
  }
}

export default App;
