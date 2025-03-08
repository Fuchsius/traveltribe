import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import { CONTACT_DETAILS } from "@/src/constants/data";
import Layout from "@/src/layout/Layout";
import toast from "react-hot-toast";
const Contact = () => {

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    toast.success("Message Sent Successfully");
  };
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Contact Us"} />
      {/*====== Start Info Section ======*/}
      <section className="contact-info-section pt-100 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-45 wow fadeInDown">
                <span className="sub-title">Contact Us</span>
                <h2>
                  Ready to Get Our Best Services! Feel Free to Contact With Us
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Contact Info Item ===*/}
              <div className="contact-info-item text-center mb-40 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/icon-1.png" alt="icon" />
                </div>
                <div className="info">
                  <span className="title">Office Location</span>
                  <p>{CONTACT_DETAILS.address}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Contact Info Item ===*/}
              <div className="contact-info-item text-center mb-40 wow fadeInDown">
                <div className="icon">
                  <img src="assets/images/icon/icon-2.png" alt="icon" />
                </div>
                <div className="info">
                  <span className="title">Email Address</span>
                  <p>
                    <a href={CONTACT_DETAILS.email}>
                      {CONTACT_DETAILS.email}
                    </a>
                  </p>
                  {/* <p>
                    <a href="mailto:traveladventure.net">traveladventure.net</a>
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Contact Info Item ===*/}
              <div className="contact-info-item text-center mb-40 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/icon-3.png" alt="icon" />
                </div>
                <div className="info">
                  <span className="title">Hotline</span>
                  <p>
                    <a href={`tel:${CONTACT_DETAILS.phone}`}>{CONTACT_DETAILS.phone}</a>
                  </p>
                  {/* <p>
                    <a href="tel:+8596320">+859 63 20</a>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Info Section ======*/}
      {/*====== Start Contact Map Section ======*/}
      {/* <section className="contact-page-map pb-100 wow fadeInUp">
        <div className="map-box">
          <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
        </div>
      </section> */}
      {/*====== End Contact Map Section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="contact-section pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Get In Touch</span>
                <h2>Send Us Message</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="contact-area wow fadeInUp">
                <form onSubmit={handleFormSubmit} className="contact-form">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          placeholder="Name"
                          className="form_control"
                          name="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="form_control"
                          name="number"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="form_control"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          placeholder="Subject"
                          className="form_control"
                          name="subject"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          name="message"
                          placeholder="Write Message"
                          className="form_control"
                          rows={6}
                          defaultValue={""}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group text-center">
                        <button className="main-btn primary-btn">
                          Send Us Message
                          <i className="fas fa-paper-plane" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Section ======*/}
      {/*====== Start Gallery Section ======*/}
      {/* <GallerySection /> */}
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default Contact;
