import React from "react";

// Dipslay the results

// Build the 2 buttons

// Filter logic to display ONE of the results based upon the state
export default function ResultsByDate(props) {
  // props.results.map((Result, index) =>
  const urlSeparator = " | ";
  const itemLink = "https://news.ycombinator.com/item?id=";
  const userLink = "https://news.ycombinator.com/user?id=";
  let Result = props.Result
  return (
    <li>
      <div>
        <span>
          <a href={itemLink + Result.objectID}>{Result.title}</a>
        </span>
        <span>
          <a href={Result.url}>({Result.url})</a>
        </span>
      </div>
      <span>
        <a href={itemLink + Result.objectID}>{Result.points}</a>
        {urlSeparator}
        <a href={userLink + Result.author}>{Result.author}</a>
        {urlSeparator}
        <a href={itemLink + Result.objectID}>{Result.created_at}</a>
        {urlSeparator}
        <a href={itemLink + Result.objectID}>{Result.num_comments}</a>
      </span>
    </li>
  );
}
