import React from "react";
import {Book} from './Book'

const App = () =>{
  return <div>
    <Book name="JS книга" year="2018" price="456">Некоторый текст</Book>
    <Book name="React книга" year="2015" price="496"/>
    <Book name="Vue книга" year="2019" price="757"/>
  </div>
}

export default App;