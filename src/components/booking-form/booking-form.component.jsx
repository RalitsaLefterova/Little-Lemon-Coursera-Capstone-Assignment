import { useState } from "react";

import { occasions } from "../../data/ocasions";

import "./booking-form.style.css";

const BookingForm = ({ availableTimes, handleUpdateAvailableTimes }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  // const handleDateChange = (e) => {
  // const selectedDate = e.target.value;
  // TODO: Figure out how to implement this without relying on the illogical Coursera instructions!!!
  // const newTimes = [...availableTimes];
  // handleUpdateAvailableTimes(newTimes);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", { date, time, guests, occasion });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Select the date for your reservation:</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="res-time">
        Choose the preferred time for your reservation:
      </label>
      <select
        id="res-time"
        name="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="" disabled>
          Choose time...
        </option>
        {availableTimes.map((t) => (
          <option key={t.id} value={t.value}>
            {t.value}
          </option>
        ))}
      </select>

      <label htmlFor="guests">
        Specify the number of guests joining for the reservation:
      </label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value))}
      />

      <label htmlFor="occasion">
        Let us know if you're celebrating any special occasion:
      </label>
      <select
        id="occasion"
        name="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="" disabled>
          Choose occasion...
        </option>
        <option>Just dining, no special occasion</option>
        {occasions.map((o) => (
          <option key={o.id} value={o.value}>
            {o.value}
          </option>
        ))}
      </select>

      <input type="submit" value="Book Now" />
    </form>
  );
};

export default BookingForm;
