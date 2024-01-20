import { render } from "@testing-library/react"
import React from "react"
import {Movies} from "../components/Movies"

class Main extends React.Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?s=matrix&apikey=c6c96988&page=2')
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
    }



    //фишки
    //Alt+ стрелки ввер/вниз перемещают текст
    render()
    {
        return <main className="container content">
            {
                this.state.movies.length ? (
                    <Movies 
                        movies={this.state.movies}
                    />
                ) : <h3>Загрузка ...</h3>
            }
        </main>
    }
}

export {Main}