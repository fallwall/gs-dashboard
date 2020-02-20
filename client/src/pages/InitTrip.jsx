import React from 'react';
import TripNameForm from '../components/TripNameForm';
import TripDateForm from '../components/TripDateForm';
import TripAddContentForm from '../components/TripAddContentForm';
import TripInitFrame from '../components/TripInitFrame';

const InitTrip = (props) => {
  return (
    <div className="trip-init">
      <TripInitFrame>
        <TripNameForm
          step={1}
          tripName={props.tripName}
          changeTripName={props.changeTripName}
        />
      </TripInitFrame>
      {props.tripName &&
        <TripInitFrame>
          <TripDateForm
            step={2}
            startDate={props.startDate}
            endDate={props.endDate}
            focusedInput={props.focusedInput}
            onFocusChange={props.onFocusChange}
            onDatesChange={(t) => props.onDatesChange(t)}
          />
        </TripInitFrame>
      }
      {props.endDate &&
        <TripInitFrame>
          <TripAddContentForm
            step={3} />
        </TripInitFrame>

      }
    </div>
  )
}

export default InitTrip;
