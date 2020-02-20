import React from 'react';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from "moment";

const TripDateForm=(props)=> {
  return (
    <div classdate="trip-date-form">
      <DateRangePicker
        startDate={props.startDate}
        startDateId="your_unique_start_date_id" 
        endDate={props.endDate}
        endDateId="your_unique_end_date_id"
        onDatesChange={({ startDate, endDate }) => props.onDatesChange({ startDate, endDate })}
        focusedInput={props.focusedInput}
        onFocusChange={props.onFocusChange}
        isDayBlocked={day => day.isBefore(moment(), "day")}
      />
    </div>
  )
}

export default TripDateForm;
