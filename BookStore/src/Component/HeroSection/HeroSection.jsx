import React from "react";
import "../HeroSection/HeroSection.css"; // Import the CSS file
import onlinetest1 from "../../assets/onlinetest1.png";
import exam1 from "../../assets/exam1.png";
import certification1 from "../../assets/certification1.png";



function HeroSection() {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 ">
            <div className="row">
              <div
                className="col-2 mt-1 hero-section-icon-div"
                style={{ backgroundColor: "#FFFFFF33" }}
              >
                <img src={onlinetest1} alt="" className="hero-section-icon" />
              </div>
              <div className="col-10">
                <h5 className="Hero-section-heading">
                  {" "}
                  Learn The Latest Skills{" "}
                </h5>
                <p className="Hero-section-paragraph">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a BC, making it over 2000 years old.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4  " >
            <div className="row">
              <div
                className="col-2 mt-1 hero-section-icon-div"
                style={{ backgroundColor: "#FFFFFF33" }}
              >
                <img src={exam1} alt="" className="hero-section-icon" />
              </div>
              <div className="col-10">
                <h5 className="Hero-section-heading">
                  {" "}
                  Get Ready For a Career{" "}
                </h5>
                <p className="Hero-section-paragraph">
                  Learn The Latest Skills Get Ready For a Career Earn a
                  Certificate om text. It has roots in a BC,
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div
                className="col-2 mt-1 hero-section-icon-div"
                style={{ backgroundColor: "#FFFFFF33" }}
              >
                <img src={certification1} alt="" className="hero-section-icon" />
              </div>
              <div className="col-10">
                <h5 className="Hero-section-heading">
                  {" "}
                  Earn a Certificate{" "}
                </h5>
                <p className="Hero-section-paragraph">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a BC, making it over 2000 years old.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="col-md-4 mb-4">
            <div className="hero-card text-center">
              <img src="path/to/career-icon.png" alt="Get Ready" className="hero-icon" />
              <h3>Get Ready For a Career</h3>
              <p>Contrary to popular belief, Lorem ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="hero-card text-center">
              <img src="path/to/certificate-icon.png" alt="Earn Certificate" className="hero-icon" />
              <h3>Earn a Certificate</h3>
              <p>Contrary to popular belief, Lorem ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
