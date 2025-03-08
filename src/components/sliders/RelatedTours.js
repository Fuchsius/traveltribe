import { TOURS } from "@/src/constants/data";
import { recentPlaceSlider } from "@/src/sliderProps";
import Link from "next/link";
import { Component } from "react";
import Slider from "react-slick";

export default class RelatedTours extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <div className="related-tour-place wow fadeInUp">
        <div className="row">
          <div className="col-md-8">
            <div className="section-title mb-35">
              <h3>Related Tours</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="place-arrows mb-35">
              <div className="prev slick-arrow" onClick={this.previous}>
                <i className="far fa-arrow-left" />
              </div>
              <div className="next slick-arrow" onClick={this.next}>
                <i className="far fa-arrow-right" />
              </div>
            </div>
          </div>
        </div>
        <Slider
          {...recentPlaceSlider}
          ref={(c) => (this.slider = c)}
          className="recent-place-slider"
        >
          {TOURS.map((tour, index) => (
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
              <div key={index} className="single-place-item mb-60 wow fadeInUp">
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
                      Price <span className="currency">$</span>
                      {tour.price}
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
        </Slider>
      </div>
    );
  }
}
