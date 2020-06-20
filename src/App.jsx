import React, { useState } from 'react';
import './App.css';
import cn from 'classnames';
import { getClubs } from './api/clubs';
import { Clubs } from './components/Clubs';

function App() {
  const [clubs, setClubs] = useState([]);
  const [filteredClubs, setFilteredClubs] = useState([clubs]);
  const [activity, setActivities] = useState([]);
  const [city, setSity] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [filterCity, setFilterCity] = useState('ALL');
  const [filterAct, setFilterAct] = useState('ALL');

  const loadClubs = () => {
    Promise.resolve(getClubs()).then((rawClubs) => {
      setClubs(rawClubs);
    });
  };

  if (!clubs.length) {
    loadClubs();
  }

  if (clubs.length > 0 && !isLoaded) {
    setLoaded(true);
    setFilteredClubs(clubs);
    const act = ['ALL'];
    const city = ['ALL'];

    clubs.map((club) => {
      let tempCity = false;

      for (let i = 0; i < city.length; i++) {
        if (city[i] === club.city.title) {
          tempCity = true;
        }
      }

      if (!tempCity) {
        city.push(club.city.title);
      }

      club.activity.map((a) => {
        let tempAct = false;

        for (let i = 0; i < act.length; i++) {
          if (act[i] === a.slug) {
            tempAct = true;
          }
        }

        if (!tempAct) {
          act.push(a.slug);
        }
      });
    });
    setSity(city);
    setActivities(act);
  }

  const changeActivities = (e) => {
    const { value } = e.target;
    const filteredArr = [];

    setFilterAct(value);

    if (value === 'ALL' && filterCity === 'ALL') {
      setFilteredClubs(clubs);

    } else if (value === 'ALL' && filterCity !== 'ALL') {

      filteredArr.push(clubs.filter(club => club.city.title === filterCity));
      setFilteredClubs(filteredArr[0]);

    } else if (value !== 'ALL' && filterCity === 'ALL') {

      filteredArr.push(clubs.filter(obj => obj.activity
        .some(o => o.slug === value)));

      setFilteredClubs(filteredArr[0]);

    } else if (value !== 'ALL' && filterCity !== 'ALL') {

      filteredArr.push(clubs.filter(obj => obj.city.title === filterCity && obj.activity
        .some(o => o.slug === value)));
      setFilteredClubs(filteredArr[0]);

    } else {
      console.log("Error in activities");
    }
  };

  const changeCity = (e) => {
    const { value } = e.target;
    const filteredArr = [];

    setFilterCity(value);

    if (value === 'ALL' && filterAct === 'ALL') {

      setFilteredClubs(clubs);

    } else if (value === 'ALL' && filterAct !== 'ALL') {

      filteredArr.push(clubs.filter(obj => obj.activity
        .some(o => o.slug === filterAct)));
      setFilteredClubs(filteredArr[0]);

    } else if (value !== 'ALL' && filterAct === 'ALL') {

      filteredArr.push(clubs.filter(club => club.city.title === value));
      setFilteredClubs(filteredArr[0]);

    } else if (value !== 'ALL' && filterAct !== 'ALL') {

      filteredArr.push(clubs.filter(obj => obj.city.title === value && obj.activity
        .some(o => o.slug === filterAct)));
      setFilteredClubs(filteredArr[0]);

    } else {
      console.log("Error in city");
    }

  };

  console.log(city);
  console.log(filteredClubs);

  return (
    <>
      <h1>
        Instasport
      </h1>
      {clubs.length ? (
        <>
          {city.map(city => (
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
          ))}
          <hr />
          {activity.map(activity => (
            <button
              value={activity}
              onClick={changeActivities}
              className={cn('clubs__button--activities', 'button',
                { 'clubs__button--active': activity === filterAct })}
              type="button"
              key={activity}
            >
              {activity}
            </button>
          ))}
          <Clubs clubs={filteredClubs} />
        </>
      ) : (
        <h1>
          Loading ...
        </h1>
      )}
    </>
  );
}

export default App;
