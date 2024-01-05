import React from "react";



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    //Привязка к контексту this
    //Иначе функция handleClickMinus не будет понимать, что такое this
    this.handleClickMinus = this.handleClickMinus.bind(this);
  }

  handleClickPlus = () => {
    this.setState({count: this.state.count + 1});
    // this.setState((prevState) => ({count: prevState.count + 1}))
    // this.setState((prevState) => ({count: prevState.count + 1}))
    // this.setState((prevState) => ({count: prevState.count + 1}))
  }

  handleClickMinus() {
    this.setState({count: this.state.count - 1});
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('render');
    return (<div className="App">
      sdf 
      <button onClick={this.handleClickPlus}>+</button>      
      <span style={{margin: "0 10px", display: "inline-block"}}>{this.state.count}</span>
      <button onClick={this.handleClickMinus}>-</button>
    </div> )
  }
}

export default App;