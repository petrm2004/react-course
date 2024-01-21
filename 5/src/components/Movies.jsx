import React from "react";
import {Movie} from "./Movie"

// Фишки
// {...movie}. "..." - это спред оператор
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax
function Movies(props) {
    const {movies = []} = props;
    return (
        <div className="movies">
            {movies.length ? movies.map(movie => (
                <Movie 
                    key={movie.imdbID}
                    {...movie}
                />)) : (<h4>Ничего не найдено</h4>)
            }
        </div>
    );
}

export {Movies};