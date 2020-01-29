import React from "react";
import "./App.css";

const Card = ({ email, id, name }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma1 grow bw2 shadow-5 ba b--dotted bw1 b--dark-green">
      <div>
        <h3>{name}</h3>
        <img
          // loading="lazy"
          alt="robots"
          src={`https://robohash.org/${id}?size=200x200`}
        />
        <div>
          <h3>{id}</h3>
          <p>{email}</p>
          {/* <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            More about me
          </a> */}
        </div>
      </div>
      {/* <br />
      <br />
      <div>
        <h1 className="second-app">Robo brx</h1>
        <img alt="robots" src={`https://robohash.org/${id}?size=150x150`} />
      </div>

      <div>
        <h3>{id}</h3>
        <h3>{name}</h3>
        <p>{email}</p>
      </div> */}
    </div>
  );
};

export default Card;
