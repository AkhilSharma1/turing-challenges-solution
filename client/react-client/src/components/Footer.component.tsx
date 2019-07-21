import React, { FunctionComponent, useState } from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';
import '../App.css';
import sports from '../assets/exercise.jpeg'


export const Footer: FunctionComponent = () => {
  return (<div>
    <section className="hero is-medium Home-banner">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Hero title
      </h1>
          <h2 className="subtitle">
            Hero subtitle
      </h2>
        </div>
      </div>
    </section>
    <section>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <figure className="media-left">
              <p className="image  is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <h4 className="title is-4">Vera Bradley</h4>
                <p className="subtitle is-5">Carry the day in style with this extra large tote crafted in
                our chic B.B. collection textured PVC. Featuring colorful faux leather trim, this tote
                offers a roomy interior plus just enough perfectly placed</p>
                <a className="button is-danger is-rounded"><strong>Shop Now</strong></a>

              </div>
            </div>
          </div>

        </div>
      </div>


      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child card">
            <p className="title">One</p>
          </div>
          <div className="tile is-child card">
            <p className="title">Two</p>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child card">
            <div className="card-image">
              <figure className="image is-256x128">
                <img src={sports} alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <h2 className="title is-2 has-text-centered">Let the Game begin</h2>
              <h5 className="subtitle is-5  has-text-centered"><strong>Registration is on - get ready for the Open</strong></h5>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>);
};
