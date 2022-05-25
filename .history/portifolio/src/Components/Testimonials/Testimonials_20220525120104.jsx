import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const data = [
  {
    avatar: AVTR1,
    name: "Jooa Lorea",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus aperiam alias deserunt pariatur molestias reiciendis fugiat numquam quibusdam! Dolorum est, qui praesentium reiciendis deleniti nemo! Delectus sunt ullam odio.",
  },
  {
    avatar: AVTR2,
    name: "Jooa Lorea",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus aperiam alias deserunt pariatur molestias reiciendis fugiat numquam quibusdam! Dolorum est, qui praesentium reiciendis deleniti nemo! Delectus sunt ullam odio.",
  },
  {
    avatar: AVTR3,
    name: "Jooa Lorea",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus aperiam alias deserunt pariatur molestias reiciendis fugiat numquam quibusdam! Dolorum est, qui praesentium reiciendis deleniti nemo! Delectus sunt ullam odio.",
  },
  {
    avatar: AVTR4,
    name: "Jooa Lorea",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus aperiam alias deserunt pariatur molestias reiciendis fugiat numquam quibusdam! Dolorum est, qui praesentium reiciendis deleniti nemo! Delectus sunt ullam odio.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar one" />
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>{" "}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
