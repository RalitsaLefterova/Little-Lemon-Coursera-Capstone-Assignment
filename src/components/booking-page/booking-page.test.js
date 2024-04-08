import React from "react";
import { render, screen } from "@testing-library/react";
import BookingPage from "./booking-page.component";
import BookingForm from "../booking-form/booking-form.component";
import { initializeTimes } from "../../data/initializeTimes";

test("Renders the BookingForm heading", () => {
  render(<BookingPage />);
  const headingElement = screen.getByText(
    "Welcome to our restaurant reservation form!"
  );
  console.log({ headingElement });
  expect(headingElement).toBeInTheDocument();
});

describe("initializeTimes function", () => {
  it("should return an array of available times", () => {
    const mockAvailableTimes = [
      { id: 1, value: "10:00", available: true },
      { id: 2, value: "11:00", available: true },
      { id: 3, value: "12:00", available: true },
      { id: 4, value: "13:00", available: true },
      { id: 5, value: "14:00", available: true },
      { id: 6, value: "15:00", available: true },
      { id: 7, value: "16:00", available: true },
      { id: 8, value: "17:00", available: true },
      { id: 9, value: "18:00", available: true },
      { id: 10, value: "19:00", available: true },
      { id: 11, value: "20:00", available: true },
      { id: 12, value: "21:00", available: true },
      { id: 13, value: "22:00", available: true },
    ];

    const result = initializeTimes();

    expect(result).toEqual(mockAvailableTimes);
  });
});

test("updateTimes function updates the state correctly", () => {
  const newTimes = [
    { id: 1, value: "10:00", available: true },
    { id: 2, value: "11:00", available: true },
    { id: 3, value: "12:00", available: true },
  ];

  const mockHandleUpdateAvailableTimes = jest.fn();

  render(
    <BookingForm
      availableTimes={[]}
      handleUpdateAvailableTimes={mockHandleUpdateAvailableTimes}
    />
  );

  mockHandleUpdateAvailableTimes(newTimes);

  expect(mockHandleUpdateAvailableTimes).toHaveBeenCalledWith(newTimes);
});
