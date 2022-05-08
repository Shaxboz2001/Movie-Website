import React, { Component } from "react";
import Movie from "./Movie";

class Movies extends Component {
  state = {};
  render() {
    const { movies } = this.props;
    return (
      <div className="movies">
        {movies.length ? movies.map((movie) => (
          <Movie key={movie.imdbID} {...movie} />
        )) : <h1>Data is not found</h1>}
      </div>
    );
  }
}

export default Movies;
