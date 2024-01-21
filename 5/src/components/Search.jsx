import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        typeSearch: 'all',
    }

    /**Обработчик события по нажатию кнопки */
    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.typeSearch);
        }
    }

    render() {

        return <div className="row">
                <div className="input-field">
                    <input 
                        className="validate" 
                        placeholder="search" 
                        type="search" 
                        value={this.state.search}
                        onChange={(e) => this.setState({search: e.target.value})}
                        onKeyDown={this.handleKey}
                />
                    <button 
                        className="btn search-btn"
                        onClick={() => this.props.searchMovies(this.state.search, this.state.typeSearch)}
                    >Поиск</button>                
                </div>
                <div>
                    <label>
                        <input 
                            className="with-gap"
                            type="radio" 
                            name="typeSearch"
                            value="all"
                            onChange={(e) => this.setState({typeSearch: e.target.value})}
                            checked={this.state.typeSearch === "all"}
                        />
                        <span>all</span>
                    </label>
                    <label>
                        <input 
                            className="with-gap"    
                            type="radio" 
                            name="typeSearch"
                            value="movie"
                            onChange={(e) => this.setState({typeSearch: e.target.value})}
                            checked={this.state.typeSearch === "movie"}
                        /> 
                        <span>movie</span>                         
                    </label>  
                    <label>
                        <input 
                            className="with-gap"    
                            type="radio" 
                            name="typeSearch"
                            value="series"
                            onChange={(e) => this.setState({typeSearch: e.target.value})}
                            checked={this.state.typeSearch === "series"}
                        /> 
                        <span>series</span>                         
                    </label> 
                </div>
                
                
        </div>

    }
}

export {Search}