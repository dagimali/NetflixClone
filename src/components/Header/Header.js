/** @format */
// netflix logo
// *https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg
// https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
// https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png

import React, { useState, useEffect } from "react";
// import { a } from "react";
import cartIcon from "../../common/images/icons/search-icon-sm.png";
import "./Header.css";
// import AlertIcon from "../../common/images/icons/bell-regular.svg";
import HeaderLink from "./HeaderLink.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";

let logoUrl = "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";
let login =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";
function Header() {
  const HeaderData = [
    { title: "Home", url: "/home" },
    { title: "Tv Shows", url: "/tvShow" },
    { title: "Movies", url: "/movies" },
    { title: "New and Popular", url: "/popular" },
    { title: "My List", url: "/myList" },
    { title: "Browse by Language", url: "/language" },
  ];
  const [navWrapper, setnavWrapper] = useState("navWrapper");
  // const [show, setShow] = useState(true)
  // const hideSection = () => {
  //   if (window)
  //   setShow(!show);
  // }

  const scrollEventlistner = (event) => {
    if (window.scrollY > 90) {
      return setnavWrapper("navWrapperDark");
    } else {
      return setnavWrapper("navWrapper");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollEventlistner);
    return window.removeEventListener("scrol", scrollEventlistner);
  }, []);
  // console.log(navWrapper);
  return (
    <>
      <div className={`${navWrapper} pl-3 pr-5 pb-2`}>
        <div className="logo-link-inner-wrapper pl-4 items-center">
          <div className="NetflixLogo items-center pt-1">
            <a href="/">
              <img src={logoUrl} alt="Netflix logo" />
            </a>
          </div>
          <div className="browse pl-4 pt-1 ">
            <div className="">
              <a href="/#">Browse</a>
              <div className="arrow_down"></div>
            </div>
          </div>

          <div className="nav-link hover:no-underline pt-2">
            <ul>
              {HeaderData.map((link) => {
                return (
                  <HeaderLink
                    key={link.url}
                    Title={link.title}
                    url={link.url}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <div className="logIn-channels-inner-Wrapper">
          <div className="nav-item">
            <div className="pt-2">
              <a href="/#">
                <img src={cartIcon} alt="Cart Icon" />
              </a>
            </div>
            <div className="nav-access pt-2">
              <ul>
                <li>
                  <a href="/#">Kids</a>
                </li>
                <li>
                  <a href="/#">DVD</a>
                </li>
              </ul>
            </div>

            <div className="alertIcon pr-3 pl-3 pt-1">
              <a href="/#">
                <FontAwesomeIcon icon={faBell} style={{ color: "#fff" }} />
                {/* <img src={AlertIcon} alt="Alert Me" /> */}
              </a>
            </div>
          </div>
          <div className="logo-item items-center">
            <div className="AvatarLogo pt-1 ">
              <a href="/#">
                <img src={login} alt="Netflix Avatar" />
              </a>
              <div className="pt-3 pl-1">
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="caret-icon text-white "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
