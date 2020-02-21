import React from 'react';

import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from "moment";

const TripDateForm = (props) => {
  const { startDate, endDate, onStartDateChange, onEndDateChange } = props;
  return (
    <div className="trip-date-form">
      <label for="trip_start_date">Start Date:</label>
      <input onChange={onStartDateChange} value={startDate} type="date" id="trip_start_date" name="trip_start_date" />
      <label for="trip_end_date">End Date:</label>
      <input onChange={onEndDateChange} value={endDate} type="date" id="trip_end_date" name="trip_end_date" />
      {/* <DateRangePicker
        // {...props}
        startDate={startDate}
        startDateId="unique_start_date_id"
        endDate={endDate}
        endDateId="unique_end_date_id"
        onDatesChange={onDatesChange}
        // onDatesChange={({ startDate, endDate }) => {onDatesChange({ startDate, endDate }) }}
        focusedInput={focusedInput}
        onFocusChange={onFocusChange}
        displayFormat="DD-MM-YYYY"
        // isDayBlocked={day => day.isBefore(moment(), "day")}
      /> */}
    </div>
  )
}



export default TripDateForm;
