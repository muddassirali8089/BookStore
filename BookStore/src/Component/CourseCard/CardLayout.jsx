import React from "react";
import "../CourseCard/CardLayout.css";
import CourseCard from "../CourseCard/CourseCard.jsx";
import courseImage from "../../assets/cardImg.png";
import onlinecourseimg3 from "../../assets/onlinecourseimg3.png";
import onlinecourseimg1 from "../../assets/onlinecourseimg1.png";

const courses = [
  {
    image: onlinecourseimg1,
    category: "UI/UX Design",
    title: "UI/UX Design for Beginners",
    price: "98",
    duration: "22hr 30min",
    courses: "34",
    sales: "250",
  },
  {
    image: courseImage,
    category: "Web Development",
    title: "React.js Fundamentals",
    price: "120",
    duration: "30hr",
    courses: "45",
    sales: "400",
  },
  {
    image: onlinecourseimg3,
    category: "Data Science",
    title: "Machine Learning Basics",
    price: "150",
    duration: "40hr",
    courses: "50",
    sales: "600",
  },
];

function CardLayout() {
  return (
    <div className="container">
      <div className="row card-grid-container">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}

export default CardLayout;

// import React from 'react'
// import './CardLayout.css'
// import CourseCard from './CourseCard.jsx'

// function CardLayout() {
//   return (
//     <div className='container'>
//         <div className='row card-grid-container'>
//                 <CourseCard/>

//         </div>
//     </div>
//   )
// }

// export default CardLayout
