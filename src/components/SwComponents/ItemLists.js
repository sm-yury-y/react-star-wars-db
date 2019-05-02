import React from 'react';
import ItemList from '../ItemList';
import {withData} from '../HocHelpers';
import SwapiService from '../../services/SwapiService';

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllStarships,
  getAllPlanets
} = swapiService;

const PersonList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipList = withData(ItemList, getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList
};