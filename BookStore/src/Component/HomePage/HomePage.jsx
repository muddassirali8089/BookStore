import React from "react";
import HomePng from "../../assets/homepng.png";
import "../HomePage/HomePage.css"; // Import the CSS file
import SearchInput from "../Searchinput/SearchInput";
import vector1 from "../../assets/Vector.png";
import Vector2 from "../../assets/Vector2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";
import Ellipse1 from "../../assets/Ellipse1.png";

import { FaLightbulb, FaFlask, FaAtom, FaQuestionCircle } from "react-icons/fa"; // Import Icons

const HomePage = () => {
  return (
    <div className="container home-container position-relative">
      {/* Background Icons */}

      <img src={vector1} alt="" className="bg-icon icon-1" />
      <img src={Vector2} alt="" className="bg-icon icon-2" />
      <img src={icon3} alt="" className="bg-icon icon-3" />
      <img src={icon4} alt="" className="bg-icon icon-4" />
      <img src={icon5} alt="" className="bg-icon icon-5" />
      <img src={icon6} alt="" className="bg-icon icon-6" />

      <div className="row d-flex align-items-center">
        <div className="col-md-5 leftmain">
          <h2 className="main-heading">
            The <span className="smart">Smart</span> <br /> Choice For{" "}
            <span className="smart">Future</span>
          </h2>
          <p className="main-paragraph">
            Elearn is a global training provider based across the UK that
            specialises in accredited and bespoke training courses. We crush
            the...
          </p>

          <SearchInput />
        </div>
        <div className="col-md-7 text-center">
          <img
            src={HomePng}
            alt="home image"
            className="img-fluid home-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
