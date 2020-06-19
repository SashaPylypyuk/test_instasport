import React, { useState } from 'react';
import '../App.css';

export function Clubs({ clubs }) {
  return (
    <div className="clubs">
      {clubs.map(club => (
        <div className="club">
          <a href={club.link}>
          <p className="club__city">
            {club.city.title}
          </p>
          <p className="club__title">
            {club.title_short}
          </p>
          <img className="club__logo" src={club.logo} />
          <ul className="club__activities">
            {club.activity.map(activity => (
              <li className="club__activity">
                {activity.title}
              </li>
            ))}
          </ul>
          </a>
        </div>
      ))}
    </div>
  );
}

