import React from "react";



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  handleClickPlus = () => {
    this.setState({count: this.state.count + 1});
    // this.setState((prevState) => ({count: prevState.count + 1}))
    // this.setState((prevState) => ({count: prevState.count + 1}))
    // this.setState((prevState) => ({count: prevState.count + 1}))
  }

  handleClickMinus = () => {
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (<div className="App">
      sdf 
      <button onClick={this.handleClickPlus}>+</button>
      {this.state.count}
      <button onClick={this.handleClickMinus}>-</button>
    </div> )
  }
}

export default App;