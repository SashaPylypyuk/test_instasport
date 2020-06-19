import React, { useState } from 'react';
import './App.css';
import { getClubs } from './api/clubs';
import { Clubs } from './components/Clubs';

function App() {
  const [clubs, setClubs] = useState([]);
  const [filteredClubs, setFilteredClubs] = useState([clubs]);
  const [activity, setActivities] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const loadClubs = () => {
    Promise.resolve(getClubs()).then((rawClubs) => {
      setClubs(rawClubs);
    });
  };

  if (!clubs.length) {
    loadClubs();
  }

  if (clubs.length > 0 && !isLoaded) {
    setFilteredClubs(clubs);
    const act = ['ALL'];

    clubs.map((club) => {
      club.activity.map((a) => {
        let temp = false;

        for (let i = 0; i < act.length; i++) {
          if (act[i] === a.slug) {
            temp = true;
          }
        }

        if (!temp) {
          act.push(a.slug);
        }
      });
    });
    setActivities(act);
    setLoaded(true);
  }

  const changeActivities = (e) => {
    const { value } = e.target;
    const filteredArr = [];

    if (value === 'ALL') {
      setFilteredClubs(clubs);
    } else {
      filteredArr.push(clubs.filter(obj => obj.activity
        .some(o => o.slug === value)));
      setFilteredClubs(filteredArr[0]);
    }
  };

  //  console.log(clubs);

  return (
    <>
      <h1>
        Instasport
      </h1>
      {clubs.length ? (
        <>
          {activity.map(activity => (
            <button value={activity} onClick={changeActivities} type="button" key={activity}>
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
