import React, { Component } from "react";
//stateless Functional component
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

//sfc

//class NavBar extends Component {
// render() {
//  }
//}

export default NavBar;
