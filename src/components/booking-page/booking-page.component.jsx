import React, { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import { initializeTimes } from "../../data/initializeTimes";
import { fetchAPI, submitAPI } from "../../mock-api/mockAPI";
import BookingForm from "../booking-form/booking-form.component";

import "./booking-page.style.css";

const BookingPage = () => {
  const navigate = useNavigate();
  const initialState = {
    availableTimes: [],
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

  const submitForm = (formData) => {
    try {
      const response = submitAPI(formData);
      response
        ? navigate("/booking-confirmed")
        : console.log("Submission failed.");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const updateTimes = (date) => {
    fetchAvailableTimes(date);
  };

  const fetchAvailableTimes = (date) => {
    try {
      const availableTimes = fetchAPI(date);
      console.log({ availableTimes });
      dispatch({ type: "UPDATE_TIMES", payload: availableTimes });
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  };

  useEffect(() => {
    fetchAvailableTimes(new Date());
  }, []);

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
        handleSubmitForm={submitForm}
      />
    </div>
  );
};

export default BookingPage;
