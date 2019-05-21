import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';
import SwapiService from '../../services/SwapiService';
import DummySwapiService from '../../services/DummySwapiService';

import { PeoplePage,
         PlanetsPage,
         StarshipsPage,
         LoginPage,
        SecretPage  } from '../Pages';
import { SwapiServiceProvider } from '../SwapiServiceContext';

import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import StarshipDetails from "../SwComponents/StarshipDetails";

export default class App extends Component {

  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
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

    const { isLoggedIn } = this.state;

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
            <Route path="/people/:id?" component={PeoplePage} />
            <Route path="/planets" component={PlanetsPage} />
            <Route path="/starships" exact component={StarshipsPage} />
            <Route path="/starships/:id"
                     render={({match}) => {
                      const { id } = match.params;
                       return <StarshipDetails itemId={id} />
                     }}/>

                <Route
                  path="/login"
                  render={() => (
                    <LoginPage
                      isLoggedIn={isLoggedIn}
                      onLogin={this.onLogin}/>
                  )}/>

                <Route
                  path="/secret"
                  render={() => (
                    <SecretPage isLoggedIn={isLoggedIn} />
                  )}/>

          </div>
          </Router>
          </SwapiServiceProvider>
        </ErrorBoundry>
      );
  }
}