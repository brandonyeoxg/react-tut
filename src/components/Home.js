import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinjas from "./AddNinja";
import axios from 'axios';

class Home extends Component {
  state = {
    ninjas: [
        {name: 'Ryu', age: 25, belt: 'black', id: 1},
        {name: 'Yoshi', age: 30, belt: 'green', id: 2},
        {name: 'Crystal', age: 20, belt: 'pink', id: 3},
    ],
    posts: [],
  }

  addNinja = (ninja) => {
      ninja.id = Math.random();
      let newNinjaList = [...this.state.ninjas, ninja];
      this.setState({
          ninjas: newNinjaList
      });
  }

  deleteNinja = (id) => {
      let ninjas = this.state.ninjas.filter(ninja => {
          return ninja.id !== id;
      });
      this.setState({
          ninjas: ninjas,
      });
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          posts: res.data.slice(0, 10)
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
      console.log('Component updated');
      console.log(prevProps, prevState);
  }

  render() {

    const { posts } = this.state;

    const postList = posts.length ? (
      posts.map(post => {
        return(
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    );

    return(
      <div className="container">
        <h1 className="center">My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinjas addNinja= {this.addNinja}/>
        {postList}
      </div>
    );
  }
}

export default Home;