import { useFormik, Formik, Form } from "formik";
import * as Yup from "yup";

import { occasions } from "../../data/ocasions";
import Button from "../rpl-common/button/button.component";
import FormikInput from "../rpl-common/formik-input/formik-input.component";
import FormikDateInput from "../rpl-common/formik-date-input/formik-date-input.component";
import FormikSelect from "../rpl-common/formik-select/formik-select.component";
import FormikTextarea from "../rpl-common/formik-textarea/formik-textarea.component";

import "./booking-form.style.css";

const BookingForm = ({
  availableTimes,
  handleUpdateAvailableTimes,
  handleSubmitForm,
}) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      date: "",
      time: "",
      guests: "",
      occasion: "",
      comment: "",
    },
    onSubmit: (values) => {
      handleSubmitForm(values);
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(/^\+?\d+$/g, "Invalid phone number"),
      date: Yup.date().required("Date is required"),
      time: Yup.string()
        .matches(
          /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
          "Invalid time format (HH:MM)"
        )
        .required("Reservation time is required"),
      guests: Yup.number().required("Number of guests is required"),
      occasion: Yup.string(),
      comment: Yup.string(),
    }),
  });

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        phoneNumber: "",
        date: "",
        time: "",
        guests: "",
        occasion: "",
        comment: "",
      }}
      onSubmit={(values) => {
        handleSubmitForm(values);
      }}
      validationSchema={Yup.object({
        fullName: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        phoneNumber: Yup.string()
          .required("Phone number is required")
          .matches(/^\+?\d+$/g, "Invalid phone number"),
        date: Yup.date().required("Date is required"),
        time: Yup.string()
          .matches(
            /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
            "Invalid time format (HH:MM)"
          )
          .required("Reservation time is required"),
        guests: Yup.number()
          .min(1, "Number of guests must be at least 1")
          .max(12, "Number of guests must not exceed 12")
          .required("Number of guests is required"),
        occasion: Yup.string(),
        comment: Yup.string(),
      })}
    >
      {(formik) => (
        <Form
          role="form"
          aria-labelledby="booking-table-form-little-lemon"
          onSubmit={formik.handleSubmit}
          className="booking-form"
        >
          <div className="booking-form-heading">
            <p>
              This form allows you to reserve a table at our restaurant for your
              upcoming dining experience.
            </p>
            <p>
              Please fill out the following details to secure your reservation.
            </p>
          </div>
          <div className="booking-form-container">
            <div className="rpl-form-block-control full-width">
              <FormikInput name="fullName" label="Full Name" />
            </div>
            <div className="rpl-form-block-control full-width">
              <FormikInput name="email" label="Email" type="email" />
            </div>
            <div className="rpl-form-block-control full-width">
              <FormikInput name="phoneNumber" label="Phone Number" />
            </div>
            <div className="rpl-form-block-combination-control full-width">
              <div className="rpl-form-block-control half-width">
                <FormikDateInput
                  name="date"
                  fieldId="res-rpl-date"
                  label="Select the date for your reservation:"
                  min={new Date().toISOString().split("T")[0]}
                  handleChange={(e) =>
                    handleUpdateAvailableTimes(new Date(e.target.value))
                  }
                />
              </div>
              <div className="rpl-form-block-control half-width">
                <FormikSelect
                  name="time"
                  fieldId="res-rpl-time"
                  label="Choose the time for your reservation:"
                  options={availableTimes}
                />
              </div>
            </div>
            <div className="rpl-form-block-combination-control full-width">
              <div className="rpl-form-block-control half-width">
                <FormikInput
                  name="guests"
                  label="Specify the number of guests joining for the reservation:"
                  type="number"
                  min="1"
                  max="12"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </div>
              <div className="rpl-form-block-control half-width">
                <FormikSelect
                  name="occasion"
                  fieldId="res-rpl-occasion"
                  label="Let us know if you're celebrating any special occasion:"
                  options={occasions}
                />
              </div>
            </div>
            <div className="rpl-form-block-control full-width">
              <FormikTextarea name="comment" label="Your message" />
            </div>

            <Button
              type="submit"
              aria-label="Book Now"
              classes={`main-button text-uppercase booking-form-btn ${
                !(formik.dirty && formik.isValid) ? "rpl-disabled-btn" : ""
              }`}
              disabled={!(formik.dirty && formik.isValid)}
              aria-disabled={!(formik.dirty && formik.isValid)}
            >
              Book Now
            </Button>
          </div>
        </Form>
      )}
    </Formik>
    // <form
    //   role="form"
    //   aria-labelledby="booking-table-form-little-lemon"
    //   onSubmit={formik.handleSubmit}
    //   className="booking-form"
    // >
    //   <div className="booking-form-heading">
    //     <p>
    //       This form allows you to reserve a table at our restaurant for your
    //       upcoming dining experience.
    //     </p>
    //     <p>Please fill out the following details to secure your reservation.</p>
    //   </div>
    //   <div className="booking-form-container">
    //     <div className="rpl-form-block-control full-width">
    //       <FormikInput name="fullName" label="Full Name" />
    //     </div>
    //     <div className="rpl-form-block-control full-width">
    //       <FormikInput name="email" label="Email" type="email" />
    //     </div>
    //     <div className="rpl-form-block-control full-width">
    //       <label htmlFor="fullName">Full Name</label>
    //       <input
    //         id="fullName"
    //         name="fullName"
    //         type="text"
    //         {...formik.getFieldProps("fullName")}
    //         className={
    //           formik.touched.fullName && formik.errors.fullName
    //             ? "rpl-input-error"
    //             : null
    //         }
    //         aria-label="Full Name"
    //         aria-invalid={!(formik.touched.fullName && formik.errors.fullName)}
    //         aria-describedby="fullNameError"
    //       />
    //       {formik.touched.fullName && formik.errors.fullName ? (
    //         <span data-testid="fullNameError" className="rpl-error-message">
    //           {formik.errors.fullName}
    //         </span>
    //       ) : null}
    //     </div>
    //     <div className="rpl-form-block-control full-width">
    //       <label htmlFor="email">Email</label>
    //       <input
    //         id="email"
    //         name="email"
    //         type="email"
    //         {...formik.getFieldProps("email")}
    //         className={
    //           formik.touched.email && formik.errors.email
    //             ? "rpl-input-error"
    //             : null
    //         }
    //       />
    //       {formik.touched.email && formik.errors.email ? (
    //         <span data-testid="emailError" className="rpl-error-message">
    //           {formik.errors.email}
    //         </span>
    //       ) : null}
    //     </div>
    //     <div className="rpl-form-block-control full-width">
    //       <label htmlFor="phoneNumber">Phone number</label>
    //       <input
    //         id="phoneNumber"
    //         name="phoneNumber"
    //         type="text"
    //         {...formik.getFieldProps("phoneNumber")}
    //         className={
    //           formik.touched.phoneNumber && formik.errors.phoneNumber
    //             ? "rpl-input-error"
    //             : null
    //         }
    //       />
    //       {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
    //         <span data-testid="phoneNumberError" className="rpl-error-message">
    //           {formik.errors.phoneNumber}
    //         </span>
    //       ) : null}
    //     </div>

    //     <div className="rpl-form-block-combination-control full-width">

    //       <div className="rpl-form-block-control half-width">
    //         <label htmlFor="res-rpl-date">
    //           Select the date for your reservation:
    //         </label>
    //         <input
    //           type="date"
    //           id="res-rpl-date"
    //           name="date"
    //           min={new Date().toISOString().split("T")[0]}
    //           value={formik.values.date}
    //           onBlur={formik.handleBlur}
    //           onChange={(e) => {
    //             formik.handleChange(e);
    //             handleUpdateAvailableTimes(new Date(e.target.value));
    //           }}
    //           className={
    //             formik.touched.date && formik.errors.date
    //               ? "rpl-input-error"
    //               : null
    //           }
    //         />
    //         {formik.touched.date && formik.errors.date ? (
    //           <span className="rpl-error-message">{formik.errors.date}</span>
    //         ) : null}
    //       </div>

    //       <div className="rpl-form-block-control half-width">
    //         <label htmlFor="res-rpl-time">
    //           Choose the time for your reservation:
    //         </label>
    //         <select
    //           id="res-rpl-time"
    //           name="time"
    //           {...formik.getFieldProps("time")}
    //           className={
    //             formik.touched.time && formik.errors.time
    //               ? "rpl-input-error"
    //               : null
    //           }
    //         >
    //           <option value="" disabled>
    //             Choose time...
    //           </option>
    //           {availableTimes.map((t) => (
    //             <option key={t.id} value={t.value}>
    //               {t.value}
    //             </option>
    //           ))}
    //         </select>
    //         {formik.touched.time && formik.errors.time ? (
    //           <span className="rpl-error-message">{formik.errors.time}</span>
    //         ) : null}
    //       </div>
    //     </div>

    //     <div className="rpl-form-block-combination-control full-width">

    //       <div className="rpl-form-block-control half-width">
    //         <label htmlFor="guests">
    //           Specify the number of guests joining for the reservation:
    //         </label>
    //         <input
    //           type="number"
    //           placeholder="1"
    //           min="1"
    //           max="10"
    //           id="guests"
    //           name="guests"
    //           {...formik.getFieldProps("guests")}
    //         />
    //       </div>

    //       <div className="rpl-form-block-control half-width">
    //         <label htmlFor="occasion">
    //           Let us know if you're celebrating any special occasion:
    //         </label>
    //         <select
    //           id="occasion"
    //           name="occasion"
    //           {...formik.getFieldProps("occasion")}
    //         >
    //           <option value="" disabled>
    //             Choose occasion...
    //           </option>
    //           <option>Just dining, no special occasion</option>
    //           {occasions.map((o) => (
    //             <option key={o.id} value={o.value}>
    //               {o.value}
    //             </option>
    //           ))}
    //         </select>
    //       </div>
    //     </div>

    //     <div className="rpl-form-block-control full-width">
    //       <label htmlFor="comment">Your message</label>
    //       <textarea
    //         id="comment"
    //         name="comment"
    //         onChange={formik.handleChange}
    //         {...formik.getFieldProps("comment")}
    //       ></textarea>
    //     </div>

    //     <Button
    //       type="submit"
    //       aria-label="Book Now"
    //       classes={`main-button text-uppercase booking-form-btn ${
    //         !(formik.dirty && formik.isValid) ? "rpl-disabled-btn" : ""
    //       }`}
    //       disabled={!(formik.dirty && formik.isValid)}
    //       aria-disabled={!(formik.dirty && formik.isValid)}
    //     >
    //       Book Now
    //     </Button>
    //   </div>
    // </form>
  );
};

export default BookingForm;
