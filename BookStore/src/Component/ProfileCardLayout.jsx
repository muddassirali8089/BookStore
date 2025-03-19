import React from "react";
import ProfileCard from "./ProfileCard";
import men1 from "../assets/men1.png";
import girl1 from "../assets/girl1.png";
import girl2 from "../assets/girl2.png"; // Import images
import "./profileCardLayout.css";

const profiles = [
  {
    image: men1,
    name: "Matthew E. McNatt",
    role: "Professor @George Brown College",
    text: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
    subject: "Engineering Physics",
    insta: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  {
    image: girl1,
    name: "Tracy D. Wright",
    role: "Software Engineer @Google",
    text: "Tracy D. Wright  Professor @George Brown CollegeUt enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.Engineering physics",
    subject: "Computer Science",
    insta: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  {
    image: girl2,
    name: "Cynthia A. Nelson",
    role: "Software Engineer @Google",
    text: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",

    subject: "Computer Science",
    insta: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
];

const ProfileCardLayout = () => {
  return (
    <div className="container mt-4">
      <div className="row profile-card-grid-container">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default ProfileCardLayout;

// import React from "react";
// import "./profileCardLayout.css";
// import ProfileCard from "./ProfileCard.jsx"; // Import ProfileCard component

// function ProfileCardLayout() {
//   return (
//     <div className="container mt-4">
//       <div className="row profile-card-grid-container">
//         {/* Display multiple ProfileCards in Bootstrap grid */}

//         <ProfileCard />

//         <ProfileCard />

//         <ProfileCard />
//       </div>
//     </div>
//   );
// }

// export default ProfileCardLayout;
