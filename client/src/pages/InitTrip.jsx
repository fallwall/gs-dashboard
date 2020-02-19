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
        focusedInoutSelected={props.focusedInoutSelected}
        dateSelected={props.dateSelected}
      />
      <TripAddContentForm />
    </div>
  )
}

export default InitTrip;
