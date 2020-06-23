import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

export function Club({ club }) {
  return (
    <a href={club.link} className="club">
      <p className="club__city">
        {club.city.title}
      </p>
      <img className="club__logo" src={club.logo} alt="Logo of club" />
      <p>
        {club.title}
      </p>
      <ul className="club__list">
        {club.activity.map(activity => (
          <li className="club__list--item">
            {activity.title}
          </li>
        ))}
      </ul>
    </a>

  );
}

Club.propTypes = {
  club: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string,
      city: PropTypes.shape({
        slug: PropTypes.string,
        title: PropTypes.string,
      }),
      link: PropTypes.string,
      title: PropTypes.string,
      title_short: PropTypes.string,
      activity: PropTypes.shape({
        slug: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  ).isRequired,
};
