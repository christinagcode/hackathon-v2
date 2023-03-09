import React from 'react'
import BlogResult from './BlogResults';
import '../App.css';

function Body(props) {
  return (
    <div className="bodyMain">
        <BlogResult input={props.input} />
    </div>
  )
}

export default Body;