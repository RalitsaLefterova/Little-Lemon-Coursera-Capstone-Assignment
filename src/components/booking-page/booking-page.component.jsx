import React, { useReducer } from "react";

import { initializeTimes } from "../../data/initializeTimes";
import BookingForm from "../booking-form/booking-form.component";

import "./booking-page.style.css";

const BookingPage = () => {
  const initialState = {
    availableTimes: initializeTimes(),
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return { ...state, availableTimes: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateTimes = (newTimes) => {
    console.log({ newTimes });
    dispatch({ type: "UPDATE_TIMES", payload: newTimes });
  };

  return (
    <div className="booking-page-container">
      <h2>Welcome to our restaurant reservation form!</h2>
      <p>
        This form allows you to reserve a table at our restaurant for your
        upcoming dining experience. Please fill out the following details to
        secure your reservation.
      </p>
      <BookingForm
        availableTimes={state.availableTimes}
        handleUpdateAvailableTimes={updateTimes}
      />
    </div>
  );
};

export default BookingPage;
