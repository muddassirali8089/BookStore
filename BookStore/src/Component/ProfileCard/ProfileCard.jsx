import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "../ProfileCard/ProfileCard.css"; // Custom CSS file for styling

const ProfileCard = ({ image, name, role, text, subject, insta, linkedin }) => {
  return (
    <div className="d-flex justify-content-center mt-5">
    <div className="profile-card">
      <img src={image} alt="Profile" className="profile-img" />
      <div className="profile-info">
        <h5 className="profile-name">{name}</h5>
        <p className="profile-role">{role}</p>
        <p className="profile-text">{text}</p>
      </div>
      <div className="profile-footer">
        <a href="#" className="subject">
          {subject}
        </a>
        <div className="social-icons">
          <a href={insta} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
  text: PropTypes.string,
  subject: PropTypes.string,
  insta: PropTypes.string,
  linkedin: PropTypes.string,
};

export default ProfileCard;


















// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaInstagram, FaLinkedin } from "react-icons/fa";
// import men1 from "../assets/men1.png"
// import "./ProfileCard.css"; // Custom CSS file for styling

// const ProfileCard = () => {
//   return (
//     <div className="d-flex justify-content-center mt-5">
//       <div className="profile-card">
//         <img
//           src={men1} // Replace with actual image
//           alt="Profile"
//           className="profile-img"
//         />
//         <div className="profile-info">
//           <h5 className="profile-name">Matthew E. McNatt</h5>
//           <p className="profile-role">Professor @George Brown College</p>
//           <p className="profile-text">
//             Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi
//             ut aliquip ex commodo.
//           </p>
//         </div>
//         <div className="profile-footer">
//           <a href="#" className="subject">
//             Engineering physics
//           </a>
//           <div className="social-icons">
//             <a href="#">
//               <FaInstagram />
//             </a>
//             <a href="#">
//               <FaLinkedin />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;
