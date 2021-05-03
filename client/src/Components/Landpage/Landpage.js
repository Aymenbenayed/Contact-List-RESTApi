/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import googleplay from "../../Assets/googleplay.png";
import appstore from "../../Assets/AppStore.png";
import image from "../../Assets/smartphonelist.png";
import image2 from "../../Assets/image2.png";
import search from "../../Assets/search.png";
import "./Landpage.css";
import { Link } from "react-router-dom";

const Landpage = () => {
  return (
    <div>
      <div className="home">
        <div className="cont hero">
          <div className="paragraph1">
            <div className="name">
              <h1>Contacts</h1> 
              <i class="fas fa-plus"></i>
            </div>
            <h4>
              L'application qui connecte vos Contact
              <br />
              partout où vous êtes !
              <br />
              Téléchargez-la gratuitement.
              <br />
            </h4>
            <div className="download">
              <img
                src={googleplay}
                alt="googleplay"
                style={{ width: "200px", marginRight: "15px" }}
              />
              <img src={appstore} alt="AppStore" style={{ width: "200px" }} />
            </div>
          </div>
          <div className="imageland">
            <img src={image} style={{ width: "350px" }} alt="imageland"/>
          </div>
        </div>

        <div className="cont hero">
          <div>
            <img src={image2} style={{ width: "450px" }} alt="imageland"  />
          </div>
          <div className="paragraph3">
            <img src={search} style={{ width: "100px" }} alt="imageland" />
            <h3>Find people near you</h3>
            <h4>
              Join us , add and search <br />
              new contacts
            </h4>
            <Link to="/Listcontacts">
              <li className="nav-item">
                    <a className="btn rounded-pill btn-dark py-2 px-4" >View Contacts</a>
                  </li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landpage;
