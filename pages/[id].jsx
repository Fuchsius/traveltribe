import GallerySection from "@/src/components/GallerySection";
import RelatedTours from "@/src/components/sliders/RelatedTours";
import { TOURS } from "@/src/constants/data";
import Layout from "@/src/layout/Layout";
import { placeSlider } from "@/src/sliderProps";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import toast from "react-hot-toast";
import Slider from "react-slick";

const TourDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(false);
  const [tour, setTour] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch the tour data after the query is available
      const foundTour = TOURS.find((tour) => tour.id === parseInt(id));
      setTour(foundTour || null);
    }
  }, [id]);

  if (!tour) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  const handleBookingForm = async (e) => {
    e.preventDefault();

    // Get form values
    const formData = new FormData(e.target);
    let formValues = Object.fromEntries(formData.entries());
    formValues = {
      ...formValues,
      title: tour.title, // Assuming `tour.title` is available in the scope
    };

    // Log form values for debugging
    console.log("Form Values:", formValues);

    try {
      setIsLoading(true);
      // Make the API call
      const databody = {
        title: formValues.title,
        date: formValues.date,
        adult: formValues.adultTickets,
        youth: formValues.youthTickets,
        child: formValues.childTickets,
        number: formValues.contactNumber,
        email: formValues.email,
      };
      const response = await fetch("https://api.traveltribe.lk/booking/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(databody),
      });

      console.log(response)

      if (!response.ok) {
        throw new Error(`Failed to send booking: ${response.statusText}`);
      }

      // Process successful response
      const result = await response.json();
      console.log("Booking successful:", result);

      // Show a success message or redirect the user
      toast.success("Booking submitted successfully!");
    } catch (error) {
      // Handle errors
      console.error("Error submitting booking:", error);
      toast.error(
        "There was an error submitting your booking. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout extraClass={"pt-160"}>
      {/*====== Start Place Details Section ======*/}
      <section className="place-details-section">
        {/*=== Place Slider ===*/}
        {/* <div className="place-slider-area overflow-hidden wow fadeInUp">
          <Slider {...placeSlider} className="place-slider">
            {tour.images.length > 0 &&
              tour.images.map((image, index) => (
                <div key={index} className="place-slider-item">
                  <div className="place-img">
                    <img src={image} alt="Place Image" />
                  </div>
                </div>
              ))}
          </Slider>
        </div> */}
        <div className="container">
          {/*=== Tour Details Wrapper ===*/}
          <div className="tour-details-wrapper pt-80">
            {/*=== Tour Title Wrapper ===*/}
            <div className="tour-title-wrapper pb-30 wow fadeInUp">
              <div className="row">
                <div className="col-xl-6">
                  <div className="tour-title mb-20">
                    <h3 className="title">{tour.title}</h3>
                    <p>
                      <i className="far fa-map-marker-alt" />
                      {tour.location}
                    </p>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="tour-widget-info">
                    <div className="info-box mb-20">
                      <div className="icon">
                        <i className="fal fa-box-usd" />
                      </div>
                      <div className="info">
                        <h4>
                          <span>From</span>${tour.price}
                        </h4>
                      </div>
                    </div>
                    <div className="info-box mb-20">
                      <div className="icon">
                        <i className="fal fa-clock" />
                      </div>
                      <div className="info">
                        <h4>
                          <span>Durations</span>
                          {tour.days} Days
                        </h4>
                      </div>
                    </div>
                    <div className="info-box mb-20">
                      <div className="icon">
                        <i className="fal fa-planet-ringed" />
                      </div>
                      <div className="info">
                        <h4>
                          <span>Tour Type</span>
                          {tour.type}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Tour Area Nav ===*/}
            <div className="tour-area-nav pt-20 pb-20 wow fadeInUp">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className="ratings-box">
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
                      <li>
                        <a href="#">({tour.rating}k Riviews)</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="share-nav">
                    <a href="#">
                      Share
                      <i className="far fa-share" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8">
                {/*=== Place Content Wrap ===*/}
                <div className="place-content-wrap pt-45 wow fadeInUp">
                  <h3 className="title">Explore Tours</h3>
                  <p>{tour.description}</p>
                  <h4>Advance Facilities</h4>
                  <p>
                    Enjoy modern amenities tailored for your comfort and
                    convenience. From spacious accommodations equipped with
                    state-of-the-art technology to 24/7 customer support, we
                    ensure a hassle-free and enjoyable experience for all
                    travelers. Your satisfaction is our priority.
                  </p>
                  <div className="row align-items-lg-center">
                    <div className="col-lg-5">
                      <ul className="check-list">
                        {tour.advanceFacilities.map((facility, index) => (
                          <li key={index}>
                            <i className="fas fa-badge-check" />
                            {facility}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-lg-7">
                      <img
                        src={tour.images[0]}
                        className="mb-20 w-100"
                        alt="place image"
                      />
                    </div>
                  </div>
                  <h4>Tour Plan</h4>
                  <p>
                    Our thoughtfully crafted tour plans are designed to provide
                    you with an unforgettable experience. Explore breathtaking
                    landscapes, immerse yourself in local culture, and enjoy
                    seamless itineraries that balance adventure, relaxation, and
                    discovery.
                  </p>
                </div>
                {/*=== Days Area ===*/}
                <Tab.Container defaultActiveKey={tour.tourPlans[0].tourKey}>
                  <div className="days-area mb-55 wow fadeInUp">
                    <Nav as={"ul"} className="nav nav-tabs mb-35">
                      {tour.tourPlans?.map((plan, index) => (
                        <Nav.Item key={index} as={"li"} className="nav-item">
                          <Nav.Link
                            as="button"
                            className="nav-link"
                            eventKey={plan.tourKey}
                          >
                            {plan.title}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content className="tab-content">
                      {tour.tourPlans?.map((plan, index) => (
                        <Tab.Pane
                          key={index}
                          className="tab-pane fade"
                          eventKey={plan.tourKey}
                        >
                          <div className="content-box">
                            <p>{plan.description}</p>
                            <ul className="check-list">
                              {plan.list.map((item, index) => (
                                <li key={index}>
                                  <i className="fas fa-badge-check" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </div>
                </Tab.Container>
                {/*=== Map Box ===*/}
                {/* <div className="map-box mb-60 wow fadeInUp">
                  <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                </div> */}
                {/*=== Calendar Box ===*/}
                <div className="calendar-wrapper wow fadeInUp">
                  <div className="calendar-container mb-45" />
                </div>
                {/*=== Releted Tour Place ===*/}
                <RelatedTours />
              </div>
              <div className="col-xl-4">
                {/*=== Sidebar Widget Area ===*/}
                <div className="sidebar-widget-area pt-60 pl-lg-30">
                  {/*=== Booking Widget ===*/}
                  <div className="sidebar-widget booking-form-widget wow fadeInUp mb-40">
                    <h4 className="widget-title">Booking Tour</h4>
                    <form
                      onSubmit={handleBookingForm}
                      className="sidebar-booking-form"
                    >
                      <div className="booking-date-time mb-20">
                        <div className="booking-item">
                          <label>Date</label>
                          <div className="bk-item booking-time">
                            <input
                              type="date"
                              name="date"
                              placeholder="Select Date"
                              className="datepicker booing_datepicker"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="booking-guest-box mb-20">
                        <h6 className="mb-20">Tickets</h6>
                        <div className="booking-item">
                          <label>
                            Adult (18+ years) ${tour.ticketsPrice.adult}
                          </label>
                          <div style={{ width: "100px", overflow: "hidden" }}>
                            <input
                              type="number"
                              name="adultTickets"
                              min="0"
                              placeholder="0"
                              style={{
                                width: "100px",
                                lineHeight: "20px",
                                padding: "10px",
                                border: "1px solid rgba(29, 35, 31, 0.2)",
                                borderRadius: "7px",
                              }}
                              required
                            />
                          </div>
                        </div>

                        <div className="booking-item">
                          <label>
                            Youth (13-17 years) ${tour.ticketsPrice.youth}
                          </label>
                          <div style={{ width: "100px", overflow: "hidden" }}>
                            <input
                              type="number"
                              name="youthTickets"
                              min="0"
                              placeholder="0"
                              style={{
                                width: "100px",
                                lineHeight: "20px",
                                padding: "10px",
                                border: "1px solid rgba(29, 35, 31, 0.2)",
                                borderRadius: "7px",
                              }}
                            />
                          </div>
                        </div>
                        <div className="booking-item">
                          <label>
                            Child (0-12 years) ${tour.ticketsPrice.child}
                          </label>
                          <div style={{ width: "100px", overflow: "hidden" }}>
                            <input
                              type="number"
                              name="childTickets"
                              min="0"
                              placeholder="0"
                              style={{
                                width: "100px",
                                lineHeight: "20px",
                                padding: "10px",
                                border: "1px solid rgba(29, 35, 31, 0.2)",
                                borderRadius: "7px",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="booking-extra mb-15 wow fadeInUp">
                        <h6 className="mb-10">Additional Services</h6>
                        <div className="extra">
                          <i className="fas fa-check-circle" />
                          Service Per Booking{" "}
                          <span>
                            <span className="currency">$</span>
                            {tour.servicePerBooking}
                          </span>
                        </div>
                        <div className="extra">
                          <i className="fas fa-check-circle" />
                          Service Per Person{" "}
                          <span>
                            <span className="currency">$</span>
                            {tour.servicePerPerson}
                          </span>
                        </div>
                      </div>
                      <div className="mb-20">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "start",
                            marginBottom: "10px",
                          }}
                        >
                          <label>Contact Number</label>
                          <div style={{ width: "100%", overflow: "hidden" }}>
                            <input
                              type="text"
                              name="contactNumber"
                              placeholder="+94742745523"
                              style={{
                                width: "100%",
                                lineHeight: "20px",
                                padding: "10px",
                                border: "1px solid rgba(29, 35, 31, 0.2)",
                                borderRadius: "7px",
                              }}
                              required
                            />
                          </div>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "start",
                            marginBottom: "10px",
                          }}
                        >
                          <label>Email</label>
                          <div style={{ width: "100%", overflow: "hidden" }}>
                            <input
                              type="email"
                              name="email"
                              placeholder="Enter Your Email"
                              style={{
                                width: "100%",
                                lineHeight: "20px",
                                padding: "10px",
                                border: "1px solid rgba(29, 35, 31, 0.2)",
                                borderRadius: "7px",
                              }}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="submit-button">
                        <button
                          disabled={isLoading}
                          className="main-btn primary-btn"
                        >
                          {isLoading ? "Loading..." : "Book Now"}
                          <i className="far fa-paper-plane" />
                        </button>
                      </div>
                    </form>
                  </div>
                  {/*=== Booking Info Widget ===*/}
                  <div className="sidebar-widget booking-info-widget wow fadeInUp mb-40">
                    <h4 className="widget-title">Tour Information</h4>
                    <ul className="info-list">
                      <li>
                        <span>
                          <i className="far fa-user-circle" />
                          Max Guests<span>{tour.maxGuests}</span>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-user-circle" />
                          Minimum Age<span>{tour.minimumAge}+</span>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-map-marker-alt" />
                          Tour Location<span>{tour.tourLocation}</span>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-globe" />
                          Language<span>{tour.language}</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Place Details Section ======*/}
      {/*====== Start Gallery Section ======*/}
      {/* <GallerySection /> */}
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default TourDetails;
