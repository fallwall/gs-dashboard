import React from 'react';

const TripNameForm = (props) => {
  return (
    <div className="trip-name-form">
        <label for="trip_name_form">Name your trip</label>
        <input
          type="text"
          name="trip_name_form"
          id="trip_name_form"
          value={props.tripName}
          onChange={props.changeTripName} />
    </div>
  )
}

export default TripNameForm;