import React from 'react';

import './ErrorIndicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="Иконка ошибки"/>
      <span className="boom">Что-то пошло не так!</span>
      <span>
        (но мы уже послали дройдов, чтобы всё починить)
      </span>
    </div>
  );
};

export default ErrorIndicator;