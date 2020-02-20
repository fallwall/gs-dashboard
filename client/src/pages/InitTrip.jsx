import React from 'react';
import TripNameForm from '../components/TripNameForm';
import TripDateForm from '../components/TripDateForm';
import TripAddContentForm from '../components/TripAddContentForm';

const InitTrip = (props) => {
  return (
    <div className="trip-init">
      <TripNameForm
        tripName={props.tripName}
        changeTripName={props.changeTripName}
      />
      <TripDateForm
        startDate={props.startDate}
        endDate={props.endDate}
        focusedInput={props.focusedInput}
        onFocusChange={props.onFocusChange}
        onDatesChange={props.onDatesChange}
      />
      <TripAddContentForm />
    </div>
  )
}

export default InitTrip;
