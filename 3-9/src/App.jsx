import React from "react";
import {Posts} from './components/Posts'


class App extends React.Component{
  state = {
    posts: [
      {id: 'abc1', name: 'JS 1'},
      {id: 'abc2', name: 'JS 2'},
      {id: 'abc3', name: 'JS 3'},
    ]
  }

  removePost = (id) => {
    this.setState({posts: this.state.posts.filter(post => post.id !== id)});
  }

  render() {
    return (
        <div className="App">
            <Posts posts={this.state.posts} removePost={this.removePost} />
        </div>
    );
  }
}

export default App;