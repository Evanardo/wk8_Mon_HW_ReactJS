import React, { Component } from 'react';
// import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import { ReactDOM } from 'react';

export default class Profile extends Component {
  render() {
    return (
      
      <section>
        <h1>Dossier</h1>
        {/* <Card>
        <div className="card" style={"width: 18rem;"}>
          <img  className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <Link className="card-link">Card link</Link>
            <Link className="card-link">Another link</Link>
          </div>
        </div>
        </Card> */}
      </section>
    )
  };
};
