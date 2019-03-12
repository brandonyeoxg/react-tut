import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinjas from "./AddNinja";
import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png';
import {connect} from 'react-redux';

class Home extends Component {
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

  componentDidUpdate(prevProps, prevState) {
  }

  render() {
    const { posts } = this.props;

    const postList = posts.length ? (
      posts.map(post => {
        return(
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt=''/>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    );

    return(
      <div className="container home">
        <h1 className="center">My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinjas addNinja= {this.addNinja}/>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);