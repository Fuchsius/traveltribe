import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import { TOURS } from "@/src/constants/data";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const Tour = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Explore Tour Place"} />
      {/*====== Start Booking Section ======*/}
      {/* <section className="booking-form-section pb-100">
        <div className="container-fluid">
          <div className="booking-form-wrapper p-r z-2">
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
      {/*====== Start Places Section ======*/}
      <section className="places-section pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            {TOURS.map((tour, index) => (
              <div className="col-xl-4 col-md-6 col-sm-12 places-column">
                <div
                  key={index}
                  className="single-place-item mb-60 wow fadeInUp"
                >
                  <div className="place-img">
                    <img src={tour.images[0]} alt="Place Image" />
                  </div>
                  <div className="place-content">
                    <div className="info">
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
                        <li>({tour.rating})</li>
                      </ul>
                      <h4 className="title">
                        <Link legacyBehavior href={`/${tour.id}`}>
                          <a>{tour.title}</a>
                        </Link>
                      </h4>
                      <p className="location">
                        <i className="far fa-map-marker-alt" />
                        {tour.location}
                      </p>
                      <p className="price">
                        <i className="fas fa-usd-circle" />
                        Price <span className="currency">$</span>{tour.price}
                      </p>
                      <div className="meta">
                        <span>
                          <i className="far fa-clock" />
                          {tour.days} Days
                        </span>
                        <span>
                          <i className="far fa-user" />
                          {tour.persons}
                        </span>
                        <span>
                          <Link legacyBehavior href={`/${tour.id}`}>
                            <a>
                              Details
                              <i className="far fa-long-arrow-right" />
                            </a>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*====== End Places Section ======*/}
      {/*====== Start Gallery Section ======*/}
      {/* <GallerySection /> */}
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default Tour;
