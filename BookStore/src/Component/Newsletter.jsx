import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Newsletter.css"; // Custom styles

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-box">
          <h2 className="text-white fw-bold">Subscribe to our newsletter</h2>
          <p className="text-light">Lorem Ipsum is simply dummy text of the printing.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Email Address" className="form-control" />
            <button className="btn btn-orange">Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
