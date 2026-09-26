import React, { Component, Fragment } from "react";
import "./AppClass.css";
import Input from "./Input";

export default class AppClass extends Component {
  constructor(props) {
    super(props);

    this.lastNameRef = React.createRef(null);
    this.firstNameRef = React.createRef(null);
    this.dobRef = React.createRef(null);

    this.state = {
      isTrue: false,
      crowd: [],
    };
  }

  componentDidMount() {
    this.setState({
      firstName: "",
      lastName: "",
      dob: "",
      crowd: [
        {
          id: 1,
          firstName: "Mary",
          lastName: "Jones",
          dob: "1997-05-02",
        },
        {
          id: 2,
          firstName: "Jack",
          lastName: "Smith",
          dob: "1999-02-04",
        },
      ],
    });
  }

  toggleTrue = () => {
    this.setState({
      isTrue: !this.state.isTrue,
    });
  };

  setFirstName(newName) {
    this.setState({ firstName: newName });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.firstName !== "") {
      this.addPerson(this.state.firstName, this.state.lastName, this.state.dob);
    }
  };

  addPerson(newFirst, newLast, newDob) {
    // create the object
    let newPerson = {
      id: this.state.crowd.length + 1,
      firstName: newFirst,
      lastName: newLast,
      dob: newDob,
    };

    const newLIst = this.state.crowd.concat(newPerson);

    const sorted = newLIst.sort((a, b) => {
      if (a.lastName < b.lastName) {
        return -1;
      } else if (a.lastName > b.lastName) {
        return 1;
      } else {
        return 0;
      }
    });

    this.setState({ crowd: sorted });

    this.setState({ firstName: "" });
    this.setState({ lastName: "" });
    this.setState({ dob: "" });

    this.firstNameRef.current.value = "";
    this.lastNameRef.current.value = "";
    this.dobRef.current.value = "";
  }

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

        <hr />
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="first-name">
              First Name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              ref={this.firstNameRef}
              autoComplete="first-name-new"
              className="form-control"
              onChange={(event) => this.setFirstName(event.target.value)}
            ></input>
          </div>

          <Input
            title="Last Name"
            type="text"
            ref={this.lastNameRef}
            name="last-name"
            autoComplete="last-name-new"
            className="form-control"
            onChange={(event) =>
              this.setState({ lastName: event.target.value })
            }
          ></Input>

          <Input
            title="Date of Birth"
            type="date"
            ref={this.dobRef}
            name="dob"
            autoComplete="dob-new"
            className="form-control"
            onChange={(event) => this.setState({ dob: event.target.value })}
          ></Input>

          <input
            type="submit"
            value="Submit"
            className="btn btn-primary"
          ></input>
        </form>

        <div>
          First Name: {this.state.firstName} <br />
          Last Name: {this.state.lastName} <br />
          DOB: {this.state.dob} <br />
        </div>

        <hr />
        <h3>People</h3>
        <ul className="list-group">
          {this.state.crowd.map((m) => {
            return (
              <li key={m.id} className="list-group-item">
                {m.firstName} {m.lastName}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}
