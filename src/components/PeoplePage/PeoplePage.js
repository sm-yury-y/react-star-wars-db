import React, { Component } from 'react';

import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

import './PeoplePage.css';
import SwapiService from '../../services/SwapiService';

const Row = ({left, right}) => {
    return (
      <div className="row mb-2">
        <div className="col-md-6">
          {left}
        </div>
        <div className="col-md-6">
          {right}
        </div>
      </div>
    );
};

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
    hasError: false
  };

  componentDidCatch(error, info) {

    this.setState({
      hasError: true
    });
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({name, gender}) => (`${name} (${gender})`)}
      />
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return (
      <div>
       <Row left={itemList} right={personDetails} />
      </div>
    );

  }
}
