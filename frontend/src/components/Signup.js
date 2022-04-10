import React from "react";
import "./signup.css";

export default function Signup() {
  return (
    <section className="sign_up">
      <h1 className="header">Create account</h1>
      <form action="">
        <div className="userName">
          <label htmlFor="ap_customer_name" className="">
            Your name
          </label>
          <input
            type="text"
            maxLength="50"
            id="ap_customer_name"
            autoComplete="name"
            name="customerName"
            tabIndex="1"
            className=""
            placeholder="enter your name"
          />
        </div>
        <div className="Mobile">
          <label htmlFor="ap_mobile_number" className="">
            Mobile number
          </label>
          <input
            type="text"
            maxLength="50"
            id="ap_mobile_number"
            name="mobileNumber"
            tabIndex="1"
            className=""
            placeholder="enter your mobile Number "
          />
        </div>
        <div className="Address">
          <label htmlFor="ap_address" className="">
            Address
          </label>
          <input
            type="text"
            maxLength="50"
            id="ap_address"
            name="mobileNumber"
            tabIndex="1"
            className=""
            placeholder="enter your address "
          />
        </div>
        <div className="Email">
          <label htmlFor="ap_email" className="">
            Email
          </label>
          <input
            type="email"
            maxLength="50"
            id="ap_email"
            name="email"
            tabIndex="1"
            className=""
            placeholder="enter a valid email "
          />
        </div>
        <div className="password">
          <label htmlFor="ap_password" className="">
            Password
          </label>
          <input
            type="password"
            maxLength="1024"
            id="ap_password"
            placeholder=""
            name="password"
            tabIndex="5"
            className=""
          />
          <div className="alret">
            <i className="alret">
              <strong>i</strong> Passwords must be at least 6 characters.
            </i>
          </div>
        </div>
        <div className="password_check">
          <label htmlFor="ap_password_check" className="a-form-label">
            Re-enter password
          </label>
          <input
            type="password"
            maxLength="1024"
            id="ap_password_check"
            autoComplete="off"
            name="passwordCheck"
            tabIndex="6"
            className=""
          />
        </div>
        <div className="submeit">
          <label htmlFor="submit-btn" className=""></label>
          <button type="submit" id="submit-btn" className="">
            continue
          </button>
        </div>
      </form>
      <div className="have_account">
        Already have an account? <a href="#login">Sign in</a>
      </div>
    </section>
  );
}
