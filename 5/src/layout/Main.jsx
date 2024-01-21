import { render } from "@testing-library/react"
import React from "react"
import {Movies} from "../components/Movies"
import {Preloader} from "../components/Preloader"
import {Search} from "../components/Search"

class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?s=matrix&apikey=c6c96988&page=2')
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
    }

    searchMovies = (str, type) => {
        this.setState({loading: true});
        const paramType = type === 'all' ? '' : `&type=${type}`
        fetch(`http://www.omdbapi.com/?s=${str}&apikey=c6c96988`+paramType)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
    }


    //фишки
    //Alt+ стрелки ввер/вниз перемещают текст
    render() {
        const {movies, loading} = this.state;
        return <main className="container content">
            <Search searchMovies={this.searchMovies}/>
            {
                loading ? (<Preloader />) : (<Movies movies={movies} />)
            }
        </main>
    }
}

export {Main}