import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// const Book = (props) => {
//   console.log(props);
//   return React.createElement('div', {}, [
//       React.createElement('h2', {}, props.name),
//       React.createElement('p', {}, props.year),
//       React.createElement('p', {}, props.price),                
//   ])
// }

const Book =(props) => {
  return <div>
    <h2>{props.name}</h2>
    <p>{props.year}</p>
    <p>{props.price}</p>
  </div>
}

// const App = () => {
//   return React.createElement("div", {}, [
//       React.createElement("h1", {id: 'hello'}, 'Привет!'),
//       React.createElement(Book, {name: 'JS книга', year: 2018, price: 950}),
//       React.createElement(Book, {name: 'React книга', year: 2019, price: 5950}),
//       React.createElement(Book, {name: 'Vue книга', year: 2017, price: 8950}),
//   ])
// }

const App = () =>{
  return <div>
    <Book name="JS книга" year="2018" price="456"/>
    <Book name="React книга" year="2015" price="496"/>
    <Book name="Vue книга" year="2019" price="756"/>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
