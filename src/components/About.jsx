import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="container my-5 py-5" > 

        <div className="row">

          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              mollitia facere in, soluta vel eaque dolor ipsum expedita
              laudantium aperiam delectus natus laboriosam veniam provident
              pariatur doloribus quibusdam cum? Mollitia nemo repellat autem rem
              praesentium eos cum assumenda vel voluptatibus ratione nobis,
              maiores, commodi nisi ea quasi ullam asperiores ipsum quibusdam.
              Illo voluptatem animi laudantium repudiandae? Nulla aspernatur
              alias iusto totam molestiae quia dicta tenetur velit quisquam,
              sunt quasi maiores voluptatibus beatae perspiciatis delectus ab
              rerum quo cupiditate? Velit fugiat laboriosam aut magni corrupti,
              obcaecati voluptatum quod nihil at sunt necessitatibus vel, quasi
              dolore alias quo rem quibusdam praesentium ipsa.
            </p>
            <NavLink to='/contact' className="btn btn-outline-primary px-3">Contact Us</NavLink>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/images/about.png" alt="About Us" height='400px' width='400px' />
            </div>

        </div> 

      </div> 

    </> 
  );
};

export default About;
