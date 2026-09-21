import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import Input from "./Input";

function App(props) {
  const [isTrue, setIsTrue] = useState(false);
  const [crowd, setCrowd] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");

  useEffect(() => {
    console.log("useEffect fired!");

    // fetching ...
    let people = [
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
    ];

    // update crowd state
    setCrowd(people);
  }, []);

  return (
    // <hr/> - horizontal rule
    <Fragment>
      <hr />
      <h1 className="h1-green">{props.msg}</h1>
      <hr />
      {isTrue ? <p>Is true</p> : <p>Is false</p>}
      {isTrue && (
        <Fragment>
          <hr />
          <p>The current value of isTrue is true</p>
        </Fragment>
      )}
      <hr />
      <button
        htef="#!"
        className="btn btn-outline-secondary"
        onClick={() => {
          setIsTrue(!isTrue);
        }}
      >
        Toggle isTrue
      </button>
      <hr />
      <form autoComplete="off">
        <div className="mb-3">
          <label className="form-label" htmlFor="first-name">
            First Name
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="first-name-new"
            className="form-control"
            onChange={(event) => setFirstName(event.target.value)}
          ></input>
        </div>
      </form>

      <Input
        title="Last Name"
        type="text"
        name="last-name"
        autoComplete="last-name-new"
        className="form-control"
        onChange={(event) => setLastName(event.target.value)}
      ></Input>

      <Input
        title="Date of Birth"
        type="date"
        name="dob"
        autoComplete="dob-new"
        className="form-control"
        onChange={(event) => setDob(event.target.value)}
      ></Input>

      <div>
        First Name: {firstName} <br />
        Last Name: {lastName} <br />
        DOB: {dob} <br />
      </div>

      <hr />
      <h3>People</h3>
      <ul className="list-group">
        {crowd.map((m) => {
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

export default App;
