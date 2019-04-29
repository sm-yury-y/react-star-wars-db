import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorButton from '../ErrorButton';
import PeoplePage from '../PeoplePage';
import ErrorBoundry from '../ErrorBoundry';

import './App.css';

export default class App extends Component {

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

    return (
      <ErrorBoundry>
      <div className="container stardb-app">
        <Header />
        { planet }

      <div className="row mb-2 button-row">
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}>
          Случайная планета
        </button>
        <ErrorButton />
      </div>
        <PeoplePage />

      </div>

      </ErrorBoundry>
    );
  }
}