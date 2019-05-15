import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#/index">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people">Люди</Link>
        </li>
        <li>
          <Link to="/planets">Планеты</Link>
        </li>
        <li>
         <Link to="/starships">Корабли</Link>
        </li>
      </ul>

      <button
          onClick={onServiceChange}
          className="btn btn-primary btn-sm">
        Изменить сервис
      </button>

    </div>
  );
};

export default Header;