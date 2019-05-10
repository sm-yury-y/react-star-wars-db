import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';
import SwapiService from '../../services/SwapiService';
import DummySwapiService from '../../services/DummySwapiService';

import { PeoplePage, PlanetsPage, StarshipsPage } from '../Pages';
import { SwapiServiceProvider } from '../SwapiServiceContext';

import './App.css';

export default class App extends Component {

  state = {
    swapiService: new SwapiService()
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

  render() {

      return (
       <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
          <div className="container stardb-app">
            <Header onServiceChange={this.onServiceChange}/>

              <RandomPlanet updateInterval = "2000"/>

              <PeoplePage />
              <PlanetsPage />
              <StarshipsPage />

          </div>
          </SwapiServiceProvider>
        </ErrorBoundry>
      );
  }
}