import React from 'react';
import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../HocHelpers';

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Население" />
      <Record field="rotationPeriod" label="Период вращения" />
      <Record field="diameter" label="Диаметр" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
