import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {}
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet });
  };

  updatePlanet() {
    const id = 6;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded);
  }

  render() {

    const { planet: { id, name, population,
      rotationPeriod, diameter } } = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Популяция</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Период вращения</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Диаметр</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}
