import React from 'react';
import moment from "moment";

const TripDateForm = (props) => {
  const { startDate, endDate, onStartDateChange, onEndDateChange } = props;
  const today = moment(new Date());
  const todayF = today.format("MM/DD/YYYY");
  return (
    <div className="trip-date-form">
      <label for="trip_start_date">Start Date</label>
      <input
        onChange={onStartDateChange}
        value={startDate}
        min={today}
        type="date"
        id="trip_start_date"
        name="trip_start_date" />
      <label for="trip_end_date">End Date</label>
      <input
        onChange={onEndDateChange}
        value={endDate}
        min={startDate}
        type="date"
        id="trip_end_date"
        name="trip_end_date" />

    </div>
  )
}



export default TripDateForm;
