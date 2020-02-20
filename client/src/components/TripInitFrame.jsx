import React from 'react';

const stepTitle = (step) => ({
  1: "Let's create a new trip",
  2: "What's the date of your travel?",
  3: "Things you'd like to do on this trip?"
})[step];

const TripInitFrame = ({ children }) => {
  return (
    <div className="trip-init-wrapper">
      <h3>{stepTitle(children.props.step)}</h3>
      {children}
    </div>
  )
}

export default TripInitFrame;
