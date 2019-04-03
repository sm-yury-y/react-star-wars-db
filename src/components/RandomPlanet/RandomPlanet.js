import React, { Component } from 'react';

import SwapiSevice from '../../services/SwapiSevice';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

  SwapiSevice = new SwapiSevice();

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diametr: null
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  updatePlanet() {

    const id = Math.floor(Math.random()*25) + 2;

    this.SwapiSevice
      .getPlanet(id)
      .then((planet) => {
        this.setState({
          id,
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diametr: planet.diametr
        });
      });
  }

  render() {

    const {id, name, population, rotationPeriod, diametr} = this.state;

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
              <span>{diametr}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}
