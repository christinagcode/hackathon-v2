import React, { Component } from "react";
import axios from "axios";
import ResultsByDate from "./BlogResultsByDate";
import ResultsByPopularity from "./BlogResultsByPopularity";
import '../App.css';

class BlogResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogPostsResultsPopular: [],
      blogPostResultsDate: [],
      selectedOption: "popularity",
    };
  }

  handleChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  };

  componentDidMount() {
    // FOR THE POPULARITY API RESULTS
    axios.get("https://hn.algolia.com/api/v1/search?tags=story").then((res) => {
      const blogPostsResultsPopular = res.data.hits;
      this.setState({ blogPostsResultsPopular });
      console.log(
        "The results are in for popularity:",
        blogPostsResultsPopular
      );
    });

    // FOR THE DATE API RESULTS
    axios
      .get("http://hn.algolia.com/api/v1/search_by_date?tags=story")
      .then((res) => {
        const blogPostResultsDate = res.data.hits;
        this.setState({ blogPostResultsDate });
        console.log("The results are in for date:", blogPostResultsDate);
      });
  }

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
          }}
        >
          <p>Search</p>
          <select>
            <option>All</option>
            <option>Stories</option>
            <option>Comments</option>
          </select>
          <p>By</p>
          <select
            value={this.state.selectedOption}
            onChange={this.handleChange}
          >
            <option value="popularity">Popularity</option>
            <option value="date">Date</option>
          </select>
          <p>for</p>
          <select>
            <option>All time</option>
            <option>Last 24H</option>
            <option>Past Week</option>
            <option>Past Month</option>
            <option>Past Year</option>
            <option>Custom Range</option>
          </select>
        </div>
        {this.state.selectedOption === "date" && (
          <ul>
            {this.state.blogPostResultsDate.map((article, index) => {
              return <ResultsByPopularity Result={article} />;
            })}
          </ul>
        )}
        {this.state.selectedOption === "popularity" && (
          <ul>
            {this.state.blogPostsResultsPopular.map((article, index) => {
              return <ResultsByDate Result={article} />;
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default BlogResult;
