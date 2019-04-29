import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#/index">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#/people">Люди</a>
        </li>
        <li>
          <a href="#/planets">Планеты</a>
        </li>
        <li>
          <a href="#/starships">Корабли</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;