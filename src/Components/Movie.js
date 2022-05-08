import React, { Component } from "react";

class Movie extends Component {
  state = {};
  render() {
    const { Title, Year, imdbID, Type, Poster } = this.props;
    return (
      <div className="card" key={imdbID}>
        <div className="card_img">
          <img src={Poster} alt="Cinema" />
        </div>
        <div className="card_info">
          <p>{Type}</p>
          <h2>{Title}</h2>
          <p>{Year}</p>
        </div>
      </div>
    );
  }
}

export default Movie;
