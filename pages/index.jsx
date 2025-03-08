import CheckAvilability from "@/src/components/CheckAvilability";
import GallerySection from "@/src/components/GallerySection";
import WhoWeAre from "@/src/components/WhoWeAre";
import Layout from "@/src/layout/Layout";
import {
  home2Slider,
  sliderActive3Item,
  sliderActive4Item,
} from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const Index2 = () => {
  return (
    <Layout header={3} extraClass={"pt-160"}>
      {/*====== Start Hero Section ======*/}
      <section className="hero-section">
        {/*=== Hero Wrapper ===*/}
        <div className="hero-wrapper-two">
          {/*=== Hero Slider ===*/}
          <Slider {...home2Slider} className="hero-slider-two">
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/new/hero1.jpg)",
                }}
              />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-xl-9">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white text-center">
                      <span className="ribbon">Tour &amp; Travels</span>
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Explore Sri Lanka Like Never Before with TravelTribe
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/new/hero2.jpg)",
                }}
              />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-xl-9">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white text-center">
                      <span className="ribbon">Tour &amp; Travels</span>
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Your Gateway to Authentic Sri Lankan Adventures
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/new/hero3.jpg)",
                }}
              />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-xl-9">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white text-center">
                      <span className="ribbon">Tour &amp; Travels</span>
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Discover the Wonders of Sri Lanka with TravelTribe
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/new/hero4.jpg)",
                }}
              />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-xl-9">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white text-center">
                      <span className="ribbon">Tour &amp; Travels</span>
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Unforgettable Journeys Await in Sri Lanka
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Booking Section ======*/}
      {/* <section className="booking-form-section">
        <div className="container-fluid">
          <div className="booking-form-wrapper">
            <form className="booking-form-two">
              <div className="form_group">
                <span>Check In</span>
                <input
                  type="date"
                  className="form_control datepicker"
                  placeholder="Check In"
                />
              </div>
              <div className="form_group">
                <span>Check Out</span>
                <input
                  type="date"
                  className="form_control datepicker"
                  placeholder="Check Out"
                />
              </div>
              <div className="form_group">
                <span>Guest</span>
                <label>
                  <i className="far fa-user-alt" />
                </label>
                <input
                  type="text"
                  className="form_control"
                  placeholder="Guest"
                  name="text"
                />
              </div>
              <div className="form_group">
                <span>Accommodations</span>
                <select className="wide">
                  <option data-display="Accommodations">Accommodations</option>
                  <option value={1}>Classic Tent</option>
                  <option value={1}>Forest Camping</option>
                  <option value={1}>Small Trailer</option>
                  <option value={1}>Tree House Tent</option>
                  <option value={1}>Tent Camping</option>
                  <option value={1}>Couple Tent</option>
                </select>
              </div>
              <div className="form_group">
                <button className="booking-btn">
                  Check Availability <i className="far fa-angle-double-right" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section> */}
      {/*====== End Booking Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-45 wow fadeInDown">
                <span className="sub-title">Popular Activities</span>
                <h2>Explore Real Adventure</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6 col-sm-12">
              {/*=== Features Image Item ===*/}
              <div className="single-features-item-two mb-40 wow fadeInUp">
                <div className="img-holder">
                  <img
                    src="assets/images/features/feat-5.jpg"
                    alt="Features Image"
                  />
                  <div className="item-overlay">
                    <div className="content">
                      <h3 className="title">Tent Camping</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              {/*=== Features Image Item ===*/}
              <div className="single-features-item-two mb-40 wow fadeInDown">
                <div className="img-holder">
                  <img
                    src="assets/images/features/feat-6.jpg"
                    alt="Features Image"
                  />
                  <div className="item-overlay">
                    <div className="content">
                      <h3 className="title">Mountain Biking</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              {/*=== Features Image Item ===*/}
              <div className="single-features-item-two mb-40 wow fadeInUp">
                <div className="img-holder">
                  <img
                    src="assets/images/features/feat-7.jpg"
                    alt="Features Image"
                  />
                  <div className="item-overlay">
                    <div className="content">
                      <h3 className="title">Fishing</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              {/*=== Features Image Item ===*/}
              <div className="single-features-item-two mb-40 wow fadeInDown">
                <div className="img-holder">
                  <img
                    src="assets/images/features/feat-8.jpg"
                    alt="Features Image"
                  />
                  <div className="item-overlay">
                    <div className="content">
                      <h3 className="title">Kayaking</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6">
              {/*=== About Content Box ===*/}
              <div className="about-two_content-box mb-35 wow fadeInLeft">
                <div className="section-title mb-30">
                  <span className="sub-title">About TravelTribe</span>
                  <h2>Embark on a Sri Lankan Adventure with TravelTribe</h2>
                </div>
                <p>
                  Discover the magic of Sri Lanka with TravelTribe, your go-to
                  partner for unforgettable travel experiences. Whether you’re
                  seeking tranquil beaches, misty mountains, ancient temples, or
                  vibrant city life, our expert guides and tailor-made tours
                  immerse you in the heart of the island’s rich culture and
                  breathtaking landscapes. Join us on a journey through the
                  Pearl of the Indian Ocean—one adventure at a time.
                </p>
                <div className="card-list">
                  <div className="card-item">
                    <i className="fas fa-badge-check" />
                    Wildlife
                  </div>
                  <div className="card-item">
                    <i className="fas fa-badge-check" />
                    Beach Tours
                  </div>
                  <div className="card-item">
                    <i className="fas fa-badge-check" />
                    Tea Trails
                  </div>
                  <div className="card-item">
                    <i className="fas fa-badge-check" />
                    Heritage
                  </div>
                  <div className="card-item">
                    <i className="fas fa-badge-check" />
                    Whale Watching
                  </div>
                  <div className="card-item">
                    <i className="fas fa-badge-check" />
                    Wellness
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== About Image Box ===*/}
              <div className="about-one_image-box mb-50 wow fadeInRight">
                <img
                  src="/about.jpg"
                  className="radius-top-left-right-288"
                  alt="About image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start We Section ======*/}
      <section className="who-we-section pb-100">
        <WhoWeAre/>
      </section>
      {/*====== End We Section ======*/}
      {/*====== Start Services Section ======*/}
      <section className="services-section black-bg pt-100 pb-100">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              {/*=== Section Title ===*/}
              <div className="section-title text-center text-white mb-50 wow fadeInDown">
                <span className="sub-title">Popular Services</span>
                <h2>Unforgettable Adventure Camping Experiences</h2>
              </div>
            </div>
          </div>
          {/*=== Service Slider One ===*/}
          <Slider
            {...sliderActive4Item}
            className="slider-active-4-item wow fadeInUp"
          >
            {/*=== Single Service Item ===*/}
            <div className="single-service-item-two">
              <div
                className="hover-bg bg_cover"
                style={{
                  backgroundImage: "url(assets/images/service/hover-bg.jpg)",
                }}
              />
              <div className="content">
                <div className="icon">
                  <i className="flaticon-camping" />
                </div>
                <h3 className="title">
                  <a href="#">Jungle Tent Camping</a>
                </h3>
                <p>
                  Sleep under the stars surrounded by Sri Lanka's lush
                  rainforests. Enjoy guided tours, campfires, and a unique
                  connection with nature.
                </p>
                <a href="#" className="btn-link">
                  Read More <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
            {/*=== Single Service Item ===*/}
            <div className="single-service-item-two">
              <div
                className="hover-bg bg_cover"
                style={{
                  backgroundImage: "url(assets/images/service/hover-bg.jpg)",
                }}
              />
              <div className="content">
                <div className="icon">
                  <i className="flaticon-cable-car" />
                </div>
                <h3 className="title">
                  <a href="#">Luxury Glamping Cabins</a>
                </h3>
                <p>
                  Experience camping in style! Stay in luxurious cabins amidst
                  serene landscapes with modern amenities for ultimate comfort.
                </p>
                <a href="#" className="btn-link">
                  Read More <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
            {/*=== Single Service Item ===*/}
            <div className="single-service-item-two">
              <div
                className="hover-bg bg_cover"
                style={{
                  backgroundImage: "url(assets/images/service/hover-bg.jpg)",
                }}
              />
              <div className="content">
                <div className="icon">
                  <i className="flaticon-trailer" />
                </div>
                <h3 className="title">
                  <a href="#">RV & Caravan Adventures</a>
                </h3>
                <p>
                  Travel across Sri Lanka in style with fully equipped RVs.
                  Enjoy the freedom to explore at your own pace with modern
                  comforts.
                </p>
                <a href="#" className="btn-link">
                  Read More <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
            {/*=== Single Service Item ===*/}
            <div className="single-service-item-two">
              <div
                className="hover-bg bg_cover"
                style={{
                  backgroundImage: "url(assets/images/service/hover-bg.jpg)",
                }}
              />
              <div className="content">
                <div className="icon">
                  <i className="flaticon-firewood" />
                </div>
                <h3 className="title">
                  <a href="#">Campfire & BBQ Nights</a>
                </h3>
                <p>
                  Unwind with a warm campfire and delicious BBQ in stunning
                  locations. Perfect for families and friends seeking a relaxing
                  evening.
                </p>
                <a href="#" className="btn-link">
                  Read More <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
            {/*=== Single Service Item ===*/}
            <div className="single-service-item-two">
              <div
                className="hover-bg bg_cover"
                style={{
                  backgroundImage: "url(assets/images/service/hover-bg.jpg)",
                }}
              />
              <div className="content">
                <div className="icon">
                  <i className="flaticon-cable-car" />
                </div>
                <h3 className="title">
                  <a href="#">Coastal Glamping</a>
                </h3>
                <p>
                  Wake up to the sound of waves in our beachside glamping
                  cabins. Enjoy a mix of adventure and serenity by the ocean.
                </p>
                <a href="#" className="btn-link">
                  Read More <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      {/*====== End Services Section ======*/}
      {/*====== Start Team Section ======*/}
      {/* <section className="team-section pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Team Member</span>
                <h2>We’ve Expert Team Members Meet With Team</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6 col-sm-12">
              
              <div className="single-team-item mb-30 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/team-1.jpg" alt="Team Image" />
                </div>
                <div className="member-info">
                  <h4 className="title">Donald D. Schafer</h4>
                  <p className="position">CEO &amp; Founder</p>
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="single-team-item mb-30 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/team-2.jpg" alt="Team Image" />
                </div>
                <div className="member-info">
                  <h4 className="title">William E. Combs</h4>
                  <p className="position">Web Designer</p>
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="single-team-item mb-30 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/team-3.jpg" alt="Team Image" />
                </div>
                <div className="member-info">
                  <h4 className="title">Daniel G. Santana</h4>
                  <p className="position">Senior Manager</p>
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="single-team-item mb-30 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/team-4.jpg" alt="Team Image" />
                </div>
                <div className="member-info">
                  <h4 className="title">Mario M. Troutman</h4>
                  <p className="position">Web Developer</p>
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="single-team-item mb-30 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/team-5.jpg" alt="Team Image" />
                </div>
                <div className="member-info">
                  <h4 className="title">Don O. Vaillancourt</h4>
                  <p className="position">Junior Marketer</p>
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="single-team-item mb-30 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/team-6.jpg" alt="Team Image" />
                </div>
                <div className="member-info">
                  <h4 className="title">Eugene J. Gilliam</h4>
                  <p className="position">Graphics Designer</p>
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Team Section ======*/}
      {/*====== Start Activity Section ======*/}
      {/* <section className="activity-section pt-100 pb-60">
        <div className="container-fluid">
          <Slider
            {...sliderActive3Item}
            className="slider-active-3-item wow fadeInUp"
          >
            <div className="single-activity-item mb-40">
              <div className="img-holder">
                <img src="assets/images/gallery/act-1.jpg" alt="Image" />
              </div>
              <div className="content">
                <div className="meta">
                  <ul>
                    <li>
                      <span className="icon">
                        <i className="flaticon-blanket" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-cat" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-tent" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-fire" />
                      </span>
                    </li>
                  </ul>
                  <div className="rate">
                    <i className="fas fa-star" />
                    4.9
                  </div>
                </div>
                <h3 className="title">Classic Tents</h3>
                <p>
                  Quis autem veleum reprehenderit voluptate velit esse quame
                  nihile molestiae consequatur veillum dolorem eumy
                </p>
                <a href="#" className="main-btn filled-btn">
                  Check Now
                  <i className="fas fa-paper-plane" />
                </a>
              </div>
            </div>
            <div className="single-activity-item mb-40">
              <div className="img-holder">
                <img src="assets/images/gallery/act-2.jpg" alt="Image" />
              </div>
              <div className="content">
                <div className="meta">
                  <ul>
                    <li>
                      <span className="icon">
                        <i className="flaticon-blanket" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-cat" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-tent" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-fire" />
                      </span>
                    </li>
                  </ul>
                  <div className="rate">
                    <i className="fas fa-star" />
                    4.9
                  </div>
                </div>
                <h3 className="title">Small Cabin Wood</h3>
                <p>
                  Quis autem veleum reprehenderit voluptate velit esse quame
                  nihile molestiae consequatur veillum dolorem eumy
                </p>
                <a href="#" className="main-btn filled-btn">
                  Check Now
                  <i className="fas fa-paper-plane" />
                </a>
              </div>
            </div>
            <div className="single-activity-item mb-40">
              <div className="img-holder">
                <img src="assets/images/gallery/act-3.jpg" alt="Image" />
              </div>
              <div className="content">
                <div className="meta">
                  <ul>
                    <li>
                      <span className="icon">
                        <i className="flaticon-blanket" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-cat" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-tent" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-fire" />
                      </span>
                    </li>
                  </ul>
                  <div className="rate">
                    <i className="fas fa-star" />
                    4.9
                  </div>
                </div>
                <h3 className="title">RV Caravan Trailer</h3>
                <p>
                  Quis autem veleum reprehenderit voluptate velit esse quame
                  nihile molestiae consequatur veillum dolorem eumy
                </p>
                <a href="#" className="main-btn filled-btn">
                  Check Now
                  <i className="fas fa-paper-plane" />
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </section> */}
      {/*====== End Activity Section ======*/}
      {/*====== Start CTA Section ======*/}
      <CheckAvilability/>
      {/*====== End CTA Section ======*/}
      {/*====== Start Blog Section ======*/}

      {/*====== End Blog Section ======*/}
      {/*====== Start Gallery Section ======*/}
      {/* <GallerySection /> */}
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default Index2;
