import React, { Component } from "react";
import Movies from "../Components/Movies";
import Search from "../Components/Search";
class Main extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=7ad55f5a&s=spider")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          movies: data.Search,
        })
      );
  }

  searchValue = (text, type = "all") => {
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=7ad55f5a&s=${text}&type=${type}`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          movies: data.Search,
        })
      );
  };

  render() {
    return (
      <div className="container">
        <Search searchValue={this.searchValue} />
        
        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default Main;
