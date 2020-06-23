import React from 'react';
import '../App.css';
import cn from 'classnames';

export function City({ city, filterCity, changeCity }) {
  return (
    <button
      value={city}
      type="button"
      key={city}
      className={cn('clubs__button--city', 'button',
        { 'clubs__button--active': city === filterCity })}
      onClick={changeCity}
    >
      {city}
    </button>

  );
}
