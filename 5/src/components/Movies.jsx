import React from "react";
import {Movie} from "./Movie"

// Фишки
// {...movie}. "..." - это спред оператор
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax
function Movies(props) {
    const {movies} = props;
    return <div className="movies">
        {movies.map(movie => (
             <Movie 
                key={movie.imdbID}
                {...movie}
            />
        )
        )}
    </div>
}

export {Movies};