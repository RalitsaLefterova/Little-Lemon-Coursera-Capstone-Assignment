import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagramSquare,
  faYoutubeSquare,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import LogoWhite from "../../assets/images/little-lemon-logo-white.png";
import { schedule } from "../../data/schedule";

import "./footer.style.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-rpl-data">
        <div>
          <Link to="/">
            <img src={LogoWhite} alt="Little Lemon Logo" />
          </Link>
          <p>
            {/* Visit us at <strong>Little Lemon</strong> to savor the authentic
            flavors of the Mediterranean, where every dish is crafted with
            passion and precision. */}
            {/* Explore our diverse menu, brimming with tantalizing
          dishes that capture the essence of the Mediterranean region.  */}
            Join us for a memorable dining experience that will transport you to
            the sun-kissed shores and vibrant markets of the Mediterranean.
          </p>
          <div className="socials">
            <Link to="https://www.facebook.com/" target="_blank">
              <FontAwesomeIcon icon={faSquareFacebook} />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </Link>
            <Link to="https://twitter.com/" target="_blank">
              <FontAwesomeIcon icon={faSquareXTwitter} />
            </Link>
            <Link to="https://www.youtube.com/" target="_blank">
              <FontAwesomeIcon icon={faYoutubeSquare} />
            </Link>
          </div>
        </div>
        <div>
          <h4>Hours</h4>
          {schedule.map((scheduleItem) => (
            <div key={scheduleItem.id} className="schedule-pair">
              <span>{scheduleItem.days}</span>
              <br />
              <span>{scheduleItem.hours}</span>
            </div>
          ))}
        </div>
        <div className="navigation">
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/booking">Reservations</Link>
            </li>
            <li>
              <Link to="/order">Order Online</Link>
            </li>
          </ul>
        </div>
        <div>
          <address>
            <h4>Address</h4>
            <p>3700 West Ogden Ave. Chicago, IL 82453</p>
            <p>(872) 123-4567</p>
            <p>hello@littlelemon.com</p>
          </address>
        </div>
      </div>
      <hr />
      <div className="footer-rpl-copy">
        &copy; 2024 Little Lemon. All rights reserved. | Design & Development by
        Ralitsa Lefterova
      </div>
    </footer>
  );
};

export default Footer;
