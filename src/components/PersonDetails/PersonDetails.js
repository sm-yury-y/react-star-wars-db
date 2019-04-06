import React, { Component } from 'react';

import './PersonDetails.css';

export default class PersonDetails extends Component {

  render() {
    return (
      <div className="person-details card">
        <img alt="Person" className="person-image"
          src="https://starwars-visualguide.com/assets/img/characters/3.jpg" />

        <div className="card-body">
          <h4>R2-D2</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Пол</span>
              <span>Мужской</span>
            </li>
            <li className="list-group-item">
              <span className="term">Год рождения</span>
              <span>43</span>
            </li>
            <li className="list-group-item">
              <span className="term">Цвет глаз</span>
              <span>красный</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
