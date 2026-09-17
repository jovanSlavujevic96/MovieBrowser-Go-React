import React, { Component, Fragment } from "react";
import "./AppClass.css";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrue: false,
    };
  }

  toggleTrue = () => {
    this.setState({
      isTrue: !this.state.isTrue,
    });
  };

  // mandatory method for every class which extends `Component`
  render() {
    return (
      <Fragment>
        <hr />
        <h1 className="h1-green">{this.props.msg}</h1>
        <hr />
        {this.state.isTrue ? <p>Is true</p> : <p>Is false</p>}
        {this.state.isTrue && (
          <>
            <hr />
            <p>The current value of isTrue is true</p>
          </>
        )}
        <hr />
        <button
          htef="#!"
          className="btn btn-outline-secondary"
          onClick={() => {
            this.toggleTrue();
          }}
        >
          Toggle isTrue
        </button>
      </Fragment>
    );
  }
}
