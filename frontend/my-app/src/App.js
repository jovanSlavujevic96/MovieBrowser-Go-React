import React, { Fragment, useEffect, useState } from "react";
import "./App.css";

function App(props) {
  const [isTrue, setIsTrue] = useState(false);
  const [crowd, setCrowd] = useState([]);

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
