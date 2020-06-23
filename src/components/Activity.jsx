import React from 'react';
import '../App.css';
import cn from 'classnames';

export function Activity({ activity, changeActivities, filterAct }) {
  return (
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
  );
}
