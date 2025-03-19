import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../LearningExperience/LearningExperience.css";
import learningImg from "../../assets/learningImg.png"; // Replace with actual image path
import icon1 from "../../assets/icon1.png"; // Replace with actual icon paths
import icon2 from "../../assets/icon2.png";

const LearningExperience = () => {
  return (
    <Container fluid className="learning-section">
      <Row className="align-items-center">
        {/* Left Side - Image */}
        <Col md={6} className="text-center">
          <img src={learningImg} alt="Learning Illustration" className="img-fluid learning-img" />
        </Col>

        {/* Right Side - Text Content */}
        <Col md={6}>
          <h2 className="section-title">
            Premium <span className="highlight">Learning</span> <br /> Experience
          </h2>

          <div className="feature">
            <img src={icon1} alt="Icon 1" className="feature-icon" />
            <div>
              <h5>Easily Accessible</h5>
              <p>Learning will feel very comfortable with Courslab.</p>
            </div>
          </div>

          <div className="feature">
            <img src={icon2} alt="Icon 2" className="feature-icon" />
            <div>
              <h5>Fun Learning Experience</h5>
              <p>Learning will feel very comfortable with Courslab.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LearningExperience;
