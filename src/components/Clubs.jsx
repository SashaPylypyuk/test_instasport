import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

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
            <img className="club__logo" src={club.logo} alt="Logo of club" />
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

Clubs.propTypes = {
  clubs: PropTypes.arrayOf(
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
