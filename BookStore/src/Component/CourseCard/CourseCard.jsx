import React from "react";
import { Button, Card } from "react-bootstrap";
import { CameraVideoFill, Clock, Download, StarFill } from "react-bootstrap-icons";
import "../CourseCard/CourseCard.css";

const CourseCard = ({ image, category, title, price, duration, courses, sales }) => {
  return (
    <Card className="course-card border-0 shadow-sm">
      {/* Course Image */}
      <Card.Img variant="top" src={image} className="course-image" />

      {/* Card Body */}
      <Card.Body>
        {/* Course Category */}
        <div className="d-flex justify-content-between">
          <small className="text-muted">{category}</small>
          <div className="d-flex align-items-center mb-2">
            <StarFill className="text-warning me-1" />
            <StarFill className="text-warning me-1" />
            <StarFill className="text-warning me-1" />
            <StarFill className="text-warning " />
            <StarFill className="text-warning" />
          </div>
        </div>

        {/* Course Title */}
        <Card.Title className="fw-bold mt-2">{title}</Card.Title>

        {/* Price */}
        <h5 className="text-danger fw-bold">${price}</h5>

        {/* Course Info */}
        <div className="d-flex justify-content-between text-muted">
          <div>
            <Clock className="me-1" /> {duration}
          </div>
          <div>
          <CameraVideoFill className="me-1"  style={{marginBottom:"2px"}}/> {courses} Videos
          </div>
          <div>
          <Download className="me-1" /> {sales} sales
          </div>
        </div>
      </Card.Body>

      {/* Join Course Button */}
      <Button className="join-btn">Join Course</Button>
    </Card>
  );
};

// Default Props
CourseCard.defaultProps = {
  image: "https://via.placeholder.com/300",
  category: "General",
  title: "No Title",
  price: "0",
  duration: "0hr",
  courses: "0",
  sales: "0",
};

export default CourseCard;











// import React from "react";
// import './CourseCard.css'
// import { Card, Button } from "react-bootstrap";
// import { StarFill, Clock, Book, Cart } from "react-bootstrap-icons";
// import courseImage from "../assets/cardImg.png"; // Replace with actual image path

// const CourseCard = () => {
//   return (
//     <Card className="course-card border-0 shadow-sm">
//       {/* Course Image */}
//       <Card.Img variant="top" src={courseImage} className="course-image" />

//       {/* Card Body */}
//       <Card.Body>
//         {/* Course Category */}
//         <div className="d-flex justify-content-between"> 
//         <small className="text-muted">UI/UX Design</small>
//         <div className="d-flex align-items-center mb-2">
//           <StarFill className="text-warning me-1" />
//           <StarFill className="text-warning me-1" />
//           <StarFill className="text-warning me-1" />
//           <StarFill className="text-warning me-1" />
//           <StarFill className="text-warning" />
//         </div>
//         </div>
        

//         {/* Course Title */}
//         <Card.Title className="fw-bold mt-2">
//           UI/UX Design for Beginners
//         </Card.Title>
        

//         {/* Price */}
//         <h5 className="text-danger fw-bold">$98</h5>

//         {/* Rating */}
        

//         {/* Course Info */}
//         <div className="d-flex justify-content-between text-muted">
//           <div>
//             <Clock className="me-1" /> 22hr30min
//           </div>
//           <div>
//             <Book className="me-1" /> 34 Courses
//           </div>
//           <div>
//             <Cart className="me-1" /> 250 Sales
//           </div>
//         </div>
//       </Card.Body>

//       {/* Join Course Button */}
//       <Button className="join-btn">Join Course</Button>
//     </Card>
//   );
// };

// export default CourseCard;
