import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';

import ItemDetails, {Record} from '../ItemDetails/ItemDetails';
import SwapiService from '../../services/SwapiService';
import DummySwapiService from '../../services/DummySwapiService';


import { SwapiServiceProvider } from '../SwapiServiceContext';

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../SwComponents';

import './App.css';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    swapiService: new DummySwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {

      const Service = swapiService instanceof SwapiService ?
                        DummySwapiService : SwapiService;

      return {
        swapiService: new Service()
      };
    });
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
              getStarshipImage
            } = this.state.swapiService;

      const personDetails = (
        <ItemDetails
          itemId={11}
          getData={getPerson}
          getImageUrl={getPersonImage} >

          <Record field="gender" label="Пол" />
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
        <SwapiServiceProvider value={this.state.swapiService} >
          <div className="container stardb-app">
            <Header onServiceChange={this.onServiceChange}/>


            <PersonDetails itemId={11} />

            <PlanetDetails itemId={5} />

            <StarshipDetails itemId={9} />

            <PersonList />

            <StarshipList />

            <PlanetList />

          </div>
          </SwapiServiceProvider>
        </ErrorBoundry>
      );
  }
}