import React from "react";
import footr from "../../Assets/Land.png";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerrrr">
    <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
      <footer>
        <div className="footer1">
          <div className="footer2">
            <h2>Get in Touch</h2>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> Ariena , Tunisie
              </li>
              <li>
                <i className="fas fa-phone-alt"></i> (+216) 58 811 554
              </li>
              <li>
                <i className="fas fa-envelope"></i> Aymen.bnmohamed@gmail.com
              </li>
              <li>
                <i className="fas fa-clock"></i>7 jours sur 7,
                <br />
                Du Lundi Au Samedi: 08h00 à 19h00
                <br />
                Dimanche: 09h00 à 15h00
              </li>
            </ul>
            <br />

            
          </div>

          <div className="footer2">
            <img src={footr} alt="footer" style={{ width: "150px" }} />
            <div className="social">
            <div className="facebook text-center mr-3">
                <i className="fab fa-facebook-f"></i>
              </div>
              <div className="twitter text-center mr-3">
                <i className="fab fa-twitter"></i>
              </div>
              <div className="linkedin text-center mr-3">
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
        <p className="copyright">
          Copyright © 2021. Aymen Ben Ayed , All rights reserved.
        </p>
      </footer>
    </div>
    </div>
  );
};

export default Footer;
