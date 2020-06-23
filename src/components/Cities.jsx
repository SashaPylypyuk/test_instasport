import React from 'react';
import '../App.css';
import { City } from './City';

export function Cities({ city, filterCity, changeCity }) {
  return (
    <div className="header__section header__section--city">
      <p className="header__title">
        City
      </p>
      {city.map(city => (
        <City city={city} filterCity={filterCity} changeCity={changeCity} />
      ))}
    </div>
  );
}
