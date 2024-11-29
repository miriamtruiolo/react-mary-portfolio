import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Maria Sanchez",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos dolor cum velit sint amet tempora sunt voluptate consequatur rerum. Corporis rem cum ipsa dolore sed vero numquam doloremque impedit.",
  },
  {
    avatar: AVTR2,
    name: "Alvaro Gustav",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos dolor cum velit sint amet tempora sunt voluptate consequatur rerum. Corporis rem cum ipsa dolore sed vero numquam doloremque impedit.",
  },
  {
    avatar: AVTR3,
    name: "Milena Moris",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos dolor cum velit sint amet tempora sunt voluptate consequatur rerum. Corporis rem cum ipsa dolore sed vero numquam doloremque impedit.",
  },
  {
    avatar: AVTR4,
    name: "Andrea Rodrigez",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos dolor cum velit sint amet tempora sunt voluptate consequatur rerum. Corporis rem cum ipsa dolore sed vero numquam doloremque impedit.",
  },
];

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      //instal swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true}}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt='persona che ha lasciato la recensione'/>
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review"> {review} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default testimonials;
