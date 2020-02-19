import React from 'react';

export default function TripNameForm() {
  return (
    <div className="trip-name-form">
      <form>
        <label for="trip_name_form">Name your trip</label>
        <input type="text" name="trip_name_form" id="trip_name_form" />
      </form>
    </div>
  )
}
