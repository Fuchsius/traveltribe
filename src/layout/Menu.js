import Link from "next/link";
import { Fragment, useState } from "react";
import SearchModal from "./SearchModal";

const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};
export default Menu;

const DeskTopMenu = () => {
  const [searchModal, setSearchModal] = useState(false);
  return (
    <Fragment>
      <SearchModal
        show={searchModal}
        handleClose={() => setSearchModal(false)}
      />
      <nav className="main-menu d-none d-xl-block">
        <ul>
          <li className="menu-item has-children">
            <Link href="/">Home</Link>
          </li>
          <li className="menu-item has-children">
            <Link href="tour">Tours</Link>
          </li>
          <li className="menu-item has-children">
            <Link href="about">About Us</Link>
          </li>
          <li className="menu-item has-children">
            <Link href="contact">Contact</Link>
          </li>
          {/* <li className="menu-item has-children">
            <a href="#">
              Tours
              <span className="dd-trigger">
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="sub-menu">
              <li>
                <Link href="tour">Tours</Link>
              </li>
              <li>
                <Link href="tour-details">Tours Details</Link>
              </li>
            </ul>
          </li> */}
          {/* <li className="menu-item has-children">
            <a href="#">
              Destination
              <span className="dd-trigger">
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="sub-menu">
              <li>
                <Link href="destination">Destination</Link>
              </li>
              <li>
                <Link href="destination-details">Destination Details</Link>
              </li>
            </ul>
          </li> */}
          {/* <li className="menu-item has-children">
            <a href="#">
              Blog
              <span className="dd-trigger">
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="sub-menu">
              <li>
                <Link href="blog-list">Blog List</Link>
              </li>
              <li>
                <Link href="blog-details">Blog Details</Link>
              </li>
            </ul>
          </li> */}
          {/* <li className="menu-item has-children">
            <a href="#">
              Pages
              <span className="dd-trigger">
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="sub-menu">
              <li>
                <Link href="about">About Us</Link>
              </li>
              <li>
                <Link href="gallery">Our Gallery</Link>
              </li>
              <li>
                <Link href="events">Our Events</Link>
              </li>
              <li>
                <Link href="shop">Our Shop</Link>
              </li>
              <li>
                <Link href="product-details">Product Details</Link>
              </li>
              <li>
                <Link href="contact">Contact</Link>
              </li>
            </ul>
          </li> */}
          {/* <li className="menu-item search-item">
            <div
              className="search-btn"
              data-bs-toggle="modal"
              data-bs-target="#search-modal"
              onClick={() => setSearchModal(true)}
            >
              <i className="far fa-search" />
            </div>
          </li> */}
        </ul>
      </nav>
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu d-block d-xl-none">
      <ul>
        <li className="menu-item has-children">
          <Link href="/">Home</Link>
        </li>
        <li className="menu-item has-children">
          <Link href="tour">Tours</Link>
        </li>
        <li className="menu-item has-children">
          <Link href="about">About Us</Link>
        </li>
        <li className="menu-item has-children">
          <Link href="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
