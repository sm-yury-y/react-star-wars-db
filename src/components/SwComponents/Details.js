import React from 'react';

import ItemDetails, {Record} from '../ItemDetails';
import SwapiService from '../../services/SwapiService';

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = swapiService;

const PersonDetails = ({itemId}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage} >

      <Record field="gender" label="Пол" />
      <Record field="eyeColor" label="Цвет глаз" />
    </ItemDetails>
  );
};

const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}>

      <Record field="population" label="Население" />
      <Record field="rotationPeriod" label="Период вращения" />
      <Record field="diameter" label="Диаметр" />
    </ItemDetails>
  );
};


const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}>

      <Record field="model" label="Модель" />
      <Record field="length" label="Длина" />
      <Record field="costInCredits" label="Стоимость" />
    </ItemDetails>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};