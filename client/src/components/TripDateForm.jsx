import React from 'react';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const TripDateForm=(props)=> {
  return (
    <div classdate="trip-date-form">
      <DateRangePicker
        startDate={props.startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={props.endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) => props.dateSelected({ startDate, endDate })} // PropTypes.func.isRequired,
        focusedInput={props.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => props.focusedInoutSelected({ focusedInput })} // PropTypes.func.isRequired,
      />
    </div>
  )
}

export default TripDateForm;
