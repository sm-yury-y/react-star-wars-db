import React, { Component } from 'react';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

  render() {
    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src="https://starwars-visualguide.com/assets/img/planets/5.jpg" />
        <div>
          <h4>Название планеты</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Популяция</span>
              <span>123124</span>
            </li>
            <li className="list-group-item">
              <span className="term">Период вращения</span>
              <span>43</span>
            </li>
            <li className="list-group-item">
              <span className="term">Диаметр</span>
              <span>100</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}
