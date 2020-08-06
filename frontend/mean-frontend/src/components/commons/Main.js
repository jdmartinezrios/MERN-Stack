import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Main extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <NavLink
          className="btn btn-primary btn-lg"
          to="/createNotes"
          role="button"
        >
          Create notes!
        </NavLink>
      </div>
    );
  }
}