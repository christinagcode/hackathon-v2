import React from 'react'
import '../App.css';
import logo from '../assets/hack-logo.png';
import icon from '../assets/icon-setting.png';
import { FaSistrix } from "react-icons/fa";

function Navbar(props) {
  const handleChange = (event) => {
    props.setInput(event.target.value)
  }

  

  return (
    
    <div className="header">
      <div className="innerHeader">
        <div className="logo">
          <img className="logoimg" src={logo} />
        </div>
        <div className="title1">
          Search
        </div>
        <div className="title2">
          Hacker News
        </div>
        <div className="sIconBackground">
          <FaSistrix className="searchIcon" />
          </div>
        <div className="searchContainer">
          <input type="text" value={props.input} onChange={handleChange} className="searchInput" name="search" placeholder="Search stories by title, url, or author"></input>
        </div>
        <div className="icon">
          <img className="settingIcon" src={icon} />
        </div>
        <div className="settingWord">
          Settings
        </div>
        
        
      </div>
    </div>
  )
}

export default Navbar;
