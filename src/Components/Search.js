import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
    type: "all",
  };
  handlevalue = (e) => {
    if (e.key === "Enter") this.props.searchValue(this.state.search);
  };
  handleCategory = (e) => {
    this.setState({
      type: e.target.dataset.type,
    });
  };
  render() {
    return (
      <div className="search">
        <div className="radio-toggles">
          <input
            type="radio"
            id="option-1"
            name="radio-options"
            datatype="movie"
            onChange={this.handleCategory}
            checked={this.state.type==="movie"}
          />
          <label for="option-1">Movie</label>
          <input
            type="radio"
            id="option-2"
            name="radio-options"
            datatype="all"
            onChange={this.handleCategory}
            checked={this.state.type==="all"}
          />
          <label for="option-2">All</label>
          <input
            type="radio"
            id="option-3"
            name="radio-options"
            datatype="series"
            onChange={this.handleCategory}
            checked={this.state.type==="series"}
          />
          <label for="option-3">Series</label>
          <div className="slide-item"></div>
        </div>
        <div className="search-box">
          <input
            type="search"
            name="search"
            required
            value={this.state.search}
            placeholder="Search anything"
            className="search-input"
            onKeyDown={this.handlevalue}
            onChange={(e) => {
              this.setState({
                search: e.target.value,
              });
            }}
            autoComplete="off"
          />
          <a href="#!" className="search-btn">
            <i className="fas fa-search"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Search;
