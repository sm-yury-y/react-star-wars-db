import React, { Component } from 'react';

import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';
import SwapiService from '../../services/SwapiService';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';

import './PeoplePage.css';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>

        {(i) => (
          `${i.name} (${i.gender})`
        )}

      </ItemList>
    );

    const personDetails = (
    <ErrorBoundry>
      <PersonDetails personId={this.state.selectedPerson} />
    </ErrorBoundry>
    );

    return (
      <div>
       <Row left={itemList} right={personDetails} />
      </div>
    );

  }
}
