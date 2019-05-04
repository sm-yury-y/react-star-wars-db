import React from 'react';

import ItemDetails, {Record} from '../ItemDetails';

import { SwapiServiceConsumer } from '../SwapiServiceContext';

const PersonDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getPerson, getPersonImage}) => {
          return (
          <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage} >

            <Record field="gender" label="Пол" />
            <Record field="eyeColor" label="Цвет глаз" />
          </ItemDetails>
          );
        }
      }
    </SwapiServiceConsumer>
  );
};

const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPlanet, getPlanetImage }) => {
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
        }
      }
    </SwapiServiceConsumer>
  );
};


const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getStarship, getStarshipImage }) => {
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
        }
      }
    </SwapiServiceConsumer>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};