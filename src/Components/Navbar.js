import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiAlignCenter } from "react-icons/fi";

export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      isSticky: false,
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  sticky = () => {
    if (window.scrollY > 0) {
      this.setState({
        isSticky: true,
        isOpen: false
      });
    } else {
      this.setState({
        isSticky: false
      });
    }
  };

  top = () => {
    this.setState({
      isOpen: false
    });
    return window.scrollTo(0, 0);
  };

  render() {
    window.addEventListener("scroll", this.sticky);

    return (
      <div className={this.state.isSticky ? "navbar nav" : "navbar"}>
        <div className="Logo">
          <Link to="/">
            <h3>SkillHunt</h3>
          </Link>
        </div>

        <ul className={this.state.isOpen ? "navbar-nav" : ""}>
          <li>
            <Link to="/" onClick={this.top}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/browesjob/" onClick={this.top}>
              BrowseJob
            </Link>
          </li>
          <li>
            <Link to="/Condidate/" onClick={this.top}>
              Candidates
            </Link>
          </li>
          <li>
            <Link to="/blog/" onClick={this.top}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/contact/" onClick={this.top}>
              Contact
            </Link>
          </li>
          <div>
            <button type="button" className="nav-btn-1">
              Post a job
            </button>
            <button type="button" className="nav-btn-2">
              want a job
            </button>
          </div>
        </ul>
        <FiAlignCenter className="nav-icon" onClick={this.toggle} />
      </div>
    );
  }
}
