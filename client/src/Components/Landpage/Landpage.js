import React from "react";
import googleplay from "../../Assets/googleplay.png";
import appstore from "../../Assets/AppStore.png";
import image from "../../Assets/toppng.com-free-contacts-icon-android-lollipop-s-google-contacts-icon-svg-387x387 (1).png";
import image2 from "../../Assets/image2.png"
import search from "../../Assets/search.png"
import "./Landpage.css";

const Landpage = () => {
  return (
    <div>
      <div className="home">
        <div className="cont hero">
          <div className="paragraph1">
            <h1>Contact List</h1>
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
            <img src={image} style={{ width: "550px" }} />
          </div>
        </div>

        <div className="cont hero">
          <div><img src={image2} style={{ width:'450px', }}/></div>
          <div className="paragraph3">
            <img src={search} style={{ width:'100px', }}/>
            <h4>Créez des profils pour vos amis .</h4>
            <h3>Join us , add and search <br />new contacts</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landpage;
