import CheckAvilability from "@/src/components/CheckAvilability";
import GallerySection from "@/src/components/GallerySection";
import OutTeam from "@/src/components/OutTeam";
import PageBanner from "@/src/components/PageBanner";
import WhoWeAre from "@/src/components/WhoWeAre";
import { REVIEWS } from "@/src/constants/data";
import Layout from "@/src/layout/Layout";
import { partnerSliderOne, testimonialSliderOne } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const About = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"About Us"} />
      {/*====== Start Features Section ======*/}
      <section className="features-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-5">
              {/*=== Features Content Box ===*/}
              <div className="features-content-box pr-lg-70 mb-50 wow fadeInLeft">
                {/*=== Section Title ===*/}
                <div className="section-title mb-30">
                  <span className="sub-title">Availability</span>
                  <h2>Explore TravelTribe's Unique Journeys</h2>
                </div>
                <p className="mb-30">
                  Discover breathtaking landscapes, vibrant cultures, and
                  thrilling experiences with TravelTribe. From serene beaches to
                  lush rainforests and ancient ruins, we offer tailored
                  adventures that match your travel desires. Explore Sri Lanka
                  like never before with our expert guides and well-planned
                  itineraries.
                </p>
                <a href="tour" className="main-btn filled-btn">
                  Learn More
                  <i className="far fa-paper-plane" />
                </a>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="features-item-area mb-20 pl-lg-70">
                <div className="row">
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-two mb-30 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-camping" />
                      </div>
                      <div className="text">
                        <h3 className="title">Tent Camping</h3>
                        <p>
                          Experience the serenity of nature with our
                          well-equipped tent camping spots amidst lush forests
                          and tranquil surroundings.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-two mb-30 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-biking-mountain" />
                      </div>
                      <div className="text">
                        <h3 className="title">Mountain Biking</h3>
                        <p>
                          Conquer rugged trails and scenic paths with our guided
                          mountain biking tours, perfect for adventurers of all
                          levels.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-two mb-30 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-fishing-2" />
                      </div>
                      <div className="text">
                        <h3 className="title">Fishing &amp; Boat</h3>
                        <p>
                          Enjoy peaceful fishing trips or explore crystal-clear
                          waters on a boat ride, perfect for relaxation and fun.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-two mb-30 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-caravan" />
                      </div>
                      <div className="text">
                        <h3 className="title">RV Caravan Tent</h3>
                        <p>
                          Travel in style with our luxurious RV caravans
                          featuring comfortable living spaces and scenic camping
                          locations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start We Section ======*/}
      <section className="who-we-section">
        <WhoWeAre />
      </section>
      {/*====== End We Section ======*/}
      {/*====== Start Team Section ======*/}
      {/* <section className="team-section pt-100 pb-70 gray-bg">
        <OutTeam/>
      </section> */}
      {/*====== End Team Section ======*/}
      {/*====== Start What We Section ======*/}
      <section className="we-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-6">
              <div className="we-content-box mb-10 wow fadeInLeft">
                <div className="section-title mb-30">
                  <span className="sub-title">Who We Are</span>
                  <h2>Great Opportunity For Adventure &amp; Travels</h2>
                </div>
                <div className="features-list_one">
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-helmet" />
                      </div>
                    </div>
                    <div className="content">
                      <h4>Safety First Always</h4>
                      <p>
                        Your safety is our top priority. All our activities are
                        led by certified experts, ensuring secure and enjoyable
                        adventures.
                      </p>
                    </div>
                  </div>
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-best-price" />
                      </div>
                    </div>
                    <div className="content">
                      <h4>Low Price &amp; Friendly</h4>
                      <p>
                        Explore breathtaking experiences at affordable rates. We
                        provide great value for your adventures without
                        compromising on quality.
                      </p>
                    </div>
                  </div>
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-travel" />
                      </div>
                    </div>
                    <div className="content">
                      <h4>Trusted Travel Guide</h4>
                      <p>
                        Let our experienced travel guides lead you to hidden
                        gems and local treasures, ensuring an authentic and
                        memorable journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="we-two_image-box mb-20">
                <div className="row align-items-end">
                  <div className="col-md-6">
                    <div className="we-image mb-30 wow fadeInLeft">
                      <img src="1.jpg" alt="we Image" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="we-image mb-30 wow fadeInRight">
                      <img src="2.jpg" alt="we Image" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="we-image mb-30 pr-lg-30 text-md-end wow fadeInDown">
                      <img src="3.jpg" alt="we Image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End What We Section ======*/}
      {/*====== Start CTA Section ======*/}
      <CheckAvilability />
      {/*====== End CTA Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      <section className="testimonial-section pt-100 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Testimonials</span>
                <h2>What Our Traveler Say About Our Tour Services</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-xl-center">
            <div className="col-xl-5 col-lg-12 order-2 order-xl-1">
              {/*=== Testimonial Image ===*/}
              <div className="testimonial-one_image-box mb-40 wow fadeInLeft">
                <img
                  src="assets/images/new/elephants.jpg"
                  alt="Testimonial Image"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-12 order-1 order-xl-2">
              {/*=== Testimonial Slider ===*/}
              <Slider
                {...testimonialSliderOne}
                className="testimonial-slider-one pl-lg-55 mb-40 wow fadeInRight"
              >
                {/*=== Testimonial Item ===*/}
                {REVIEWS.map((item, index) => (
                  <div key={index} className="gw-testimonial-item">
                    <div className="testimonial-inner-content">
                      <div className="quote-rating-box">
                        <div className="icon">
                          <img
                            src="assets/images/testimonial/quote.png"
                            alt="quote icon"
                          />
                        </div>
                        <div className="ratings-box">
                          <h4>{item.title}</h4>
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>{item.description}</p>
                      <div className="author-thumb-title">
                        <div className="author-title">
                          <h3 className="title">{item.name}</h3>
                          <p className="position">{item.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default About;
