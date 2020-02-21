import React from 'react';
import TripNameForm from '../components/TripNameForm';
import TripDateForm from '../components/TripDateForm';
import TripAddContentForm from '../components/TripAddContentForm';
import TripInitFrame from '../components/TripInitFrame';

const InitTrip = (props) => {
  return (
    <div className="trip-init">
      <form>
        <TripInitFrame>
          <TripNameForm
            step={1}
            tripName={props.tripName}
            changeTripName={props.changeTripName}
          />
        </TripInitFrame>
        {props.tripName !==null &&
          <TripInitFrame>
            <TripDateForm
              step={2}
              startDate={props.startDate}
              endDate={props.endDate}
              onStartDateChange={props.onStartDateChange}
              onEndDateChange={props.onEndDateChange}
            />
          </TripInitFrame>
        }
        {props.endDate !== null &&
          <TripInitFrame>
            <TripAddContentForm
              step={3} />
          </TripInitFrame>

        }
      </form>
    </div>
  )
}

export default InitTrip;
