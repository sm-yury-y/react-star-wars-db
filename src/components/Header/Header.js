import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">Люди</a>
        </li>
        <li>
          <a href="#">Планеты</a>
        </li>
        <li>
          <a href="#">Корабли</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;