import React, { useState } from "react";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { TbGridDots } from "react-icons/tb";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive((prevState) =>
      prevState === "navBar" ? "navBar active" : "navBar"
    );
  };

  const closeNav = () => {
    setActive("navBar");
  };
  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="/" className="logo flex">
            <h1>
              <MdTravelExplore className="icon" />
              Travel.
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>

            <button className="btn">
              <a href="#">BOOKING NOW</a>
            </button>
          </ul>

          {/* <div className="closeNavBar" onClick={closeNav}>
            <AiOutlineCloseCircle className="icon" />
          </div> */}

          <div className="toogleNavBar" onClick={showNav}>
            <TbGridDots className="icon" />
          </div>

        </div>
      </header>
    </section>
  );
};
export default Navbar;
