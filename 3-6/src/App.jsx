import React from "react";



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      comments: []
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => this.setState({posts: data, loading: false}))

    this.timerId = setInterval(() => {
      fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => this.setState({comments: data}))
    }, 3000)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    clearInterval(this.timerId);
    
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (<div className="App">
      {this.state.loading ? <h3>Загрузка ...</h3> : <h3>
        {this.state.posts.length} загружено постов
        </h3>}
    </div> )
  }
}

export default App;