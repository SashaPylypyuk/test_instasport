import React from 'react';
import '../App.css';
import { Activity } from './Activity';

export function Activities({ activity, changeActivities, filterAct }) {
  return (
    <div className="header__section header__section--act">
      <p className="header__title">
        Activities
      </p>
      {activity.map(activity => (
        <Activity activity={activity} filterAct={filterAct} changeActivities={changeActivities} />
      ))}
    </div>
  );
}
