import React from "react";

const WhoWeAre = () => {
  return (
    <div className="container">
      <div className="row align-items-xl-center">
        <div className="col-lg-6 order-2 order-lg-1">
          {/*=== We Image Box ===*/}
          <div className="we-image-box text-center text-lg-left wow fadeInLeft">
            <img
              src="/wwww.jpg"
              className="radius-top-left-right-288"
              alt="Image"
            />
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2">
          {/*=== We Content Box ===*/}
          <div className="we-one_content-box wow fadeInRight">
            <div className="section-title mb-30">
              <span className="sub-title">Who We Are</span>
              <h2>Your Trusted Partner for Adventure & Travel in Sri Lanka</h2>
            </div>
            <p>
              At TravelTribe, we believe in creating journeys that are more than
              just travel—they're life-changing experiences. Whether you're an
              adventure seeker, a culture enthusiast, or someone looking to
              unwind, we provide expertly crafted tours that showcase the heart
              and soul of Sri Lanka. With a 60% satisfaction rate and a 93%
              success rate, our dedicated team ensures every trip is memorable,
              safe, and tailored to your preferences. Trust us to turn your
              dream getaway into reality!
            </p>
            <div className="skill-wrapper">
              <div className="single-skill-circle text-center">
                <div className="inner-circle">
                  <div className="line" />
                  <span className="number">60%</span>
                </div>
                <h5>Saticfied Clients</h5>
              </div>
              <div className="single-skill-circle text-center">
                <div className="inner-circle">
                  <div className="line" />
                  <span className="number">93%</span>
                </div>
                <h5>Success Rate</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
