import React from "react";



class App extends React.Component{
  state = {
    posts: [
      {id: 'abc1', name: 'JS 1'},
      {id: 'abc2', name: 'JS 2'},
      {id: 'abc3', name: 'JS 3'},
    ]
  }  

  render() {
    return (
        <div className="App">
            {this.state.posts.map((post) => (
              <h2 key={post.id}>{post.name}</h2>
            ))}
        </div>
    );
  }
}

export default App;