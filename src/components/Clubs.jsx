import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { Club } from './Club';

export function Clubs({ clubs }) {
  return (
    <>
      {clubs.length ? (
        <div className="clubs">
          {clubs.map(club => (
            <Club club={club} />
          ))}
        </div>
      ) : (
        <h1 className="noClubs">
          There are no clubs here
        </h1>
      )}

    </>
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
