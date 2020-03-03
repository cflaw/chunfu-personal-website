import React, { Component } from "react";
import Portrait from "../images/test_portrait.png";
import "../css/main.css";

export default class Home extends Component {
  render() {
    return (
      <div className="welcome">
        <div className="foldpg" />
        <div className="name">
          <img className="portrait-img" src={Portrait} alt="portrait" />
          <p className="underline">LAW</p>
          <p> CHUN FU</p>
        </div>
        <div className="footer">
          <div className="arrow" />
          <div className="socialmedia">
            <a href="#" className>
              <i className="fa fa-linkedin" />
            </a>
            <a href="#" className>
              <i className="fa fa-github" />
            </a>
            <a href="#" className>
              <i className="fa fa-envelope" />
            </a>
          </div>
        </div>
        <div className="shadow" />
      </div>

    );
  }
}
