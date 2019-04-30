import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';

import Row from '../Row/Row';
import ItemDetails, {Record} from '../ItemDetails/ItemDetails';
import SwapiService from '../../services/SwapiService';

import './App.css';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

      const { getPerson,
        getStarship,
        getPersonImage,
        getStarshipImage } = this.swapiService;

      const personDetails = (
        <ItemDetails
          itemId={11}
          getData={getPerson}
          getImageUrl={getPersonImage} >

          <Record field="gender" label="Пол" />
          <Record field="birthYear" label="Год рождения" />
          <Record field="eyeColor" label="Цвет глаз" />

        </ItemDetails>
      );

      const starshipDetails = (
        <ItemDetails
          itemId={5}
          getData={getStarship}
          getImageUrl={getStarshipImage}>

          <Record field="model" label="Модель" />
          <Record field="length" label="Длина" />
          <Record field="costInCredits" label="Стоимость" />
        </ItemDetails>

      );

    return (
      <ErrorBoundry>
      <div className="container stardb-app">
        <Header />
        <Row
            left={personDetails}
            right={starshipDetails} />
      </div>

      </ErrorBoundry>
    );
  }
}