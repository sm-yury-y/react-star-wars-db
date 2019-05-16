import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';
import SwapiService from '../../services/SwapiService';
import DummySwapiService from '../../services/DummySwapiService';

import { PeoplePage, PlanetsPage, StarshipsPage } from '../Pages';
import { SwapiServiceProvider } from '../SwapiServiceContext';

import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

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
        <Router>
          <div className="container stardb-app">
            <Header onServiceChange={this.onServiceChange}/>

            <RandomPlanet />

            <Route path="/"
                     render={() => <h2>Добро пожаловать в StarDB</h2>}
                     exact />
            <Route path="/people"
                     render={() => <h2>Люди</h2>}
                     exact />
            <Route path="/people" component={PeoplePage} />
            <Route path="/planets" component={PlanetsPage} />
            <Route path="/starships" component={StarshipsPage} />

          </div>
          </Router>
          </SwapiServiceProvider>
        </ErrorBoundry>
      );
  }
}