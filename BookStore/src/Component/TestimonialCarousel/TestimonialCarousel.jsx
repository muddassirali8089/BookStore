import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Add navigation styles
import profile1 from "../../assets/profile1.png";
import "../TestimonialCarousel/TestimonialCarousel.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import navigation & autoplay

const testimonials = [
  {
    name: "Muddassir Ali",
    role: "React Developer",
    img: profile1,
    text: "“Teachings of the great explore of truth,the master-builder of human happiness.no one rejects,dislikes, or avoids pleasure itself, pleasure itself”,",
  },
  {
    name: "Abid Hussain",
    role: "React Native Developer",
    img: profile1,
    text: "“Teachings of the great explore of truth,the master-builder of human happiness.no one rejects,dislikes, or avoids pleasure itself, pleasure itself”,",
  },
  {
    name: "Tanveer khan",
    role: "Flutter developer",
    img: profile1,
    text: "“Teachings of the great explore of truth,the master-builder of human happiness.no one rejects,dislikes, or avoids pleasure itself, pleasure itself”,",
  },
  {
    name: "M.akhlaq",
    role: "AI developer",
    img: profile1,
    text: "“Teachings of the great explore of truth,the master-builder of human happiness.no one rejects,dislikes, or avoids pleasure itself, pleasure itself”,",
  },
  {
    name: "Huzaife Sajjad",
    role: "Designer",
    img: profile1,
    text: "“Teachings of the great explore of truth,the master-builder of human happiness.no one rejects,dislikes, or avoids pleasure itself, pleasure itself”,",
  },
 
 
];

const TestimonialCarousel = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto testimonalContainer">
        <h1 className="text-3xl font-large  title-font text-gray-900 mb-12 text-center" style={{fontWeight:"bold"}}>
          What student's Say
        </h1>
        <p className="text-center">  accuunt iiente, sint ullam consequatur commodi ea beatae blanditiire hic.</p>
        <Swiper
          slidesPerView={3} // Show 3 testimonials at a time
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={false} // Enable next/prev buttons
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Move automatically
          modules={[Pagination, Navigation, Autoplay]} // Include navigation & autoplay
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p
                  className="leading-relaxed mb-6"
                  style={{
                    color: "#ACACAC",
                    fontSize: "1.2rem",
                    fontStyle: "italic",
                  }}
                >
                  {testimonial.text}
                </p>
                <div className="container testimonalContainer">
                  <div className="row">
                    <div className="col-2 p-0 p-sm-1">
                      {" "}
                      <img
                        alt={testimonial.name}
                        src={testimonial.img}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </div>
                    <div className="col-10 p-sm-0 p-lg-2">
                      <span
                        style={{ fontWeight: "bold" }}
                        className="title-font font-medium text-gray-900"
                      >
                        {testimonial.name}
                      </span>
                      <br />
                      <span className="text-gray-500 text-sm">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="pl-4"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
