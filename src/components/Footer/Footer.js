/** @format */

import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-inner-wrapper">
        <div className="socialMedia">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon />
        </div>
        <div className="ServiceLists">
          <ul>
            <li>
              <a href="/#">Audeo Description</a>
            </li>
            <li>
              <a href="/#">Investor Relations</a>
            </li>
            <li>
              <a href="/#">Privacy</a>
            </li>
            <li>
              <a href="/#">Contact Us</a>
            </li>
            <li>
              <a href="/#">Help Center</a>
            </li>
            <li>
              <a href="/#">Jobs</a>
            </li>
            <li>
              <a href="/#">Legal Notices</a>
            </li>
            <li>
              <a href="/#">Do Not Sell or Shell my personal Information</a>
            </li>
            <li>
              <a href="/#">Gift Cards</a>
            </li>
            <li>
              <a href="/#">Netflix Shop</a>
            </li>
            <li>
              <a href="/#">Coockie Preferences</a>
            </li>
            <li>
              <a href="/#">Ad Choics</a>
            </li>
            <li>
              <a href="/#">Media Center</a>
            </li>
            <li>
              <a href="/#">Terms of Use</a>
            </li>
            <li>
              <a href="/#">Corporate information</a>
            </li>
          </ul>
        </div>
        <div className="copyRight">
          <h3>Service Code</h3>
          <p> © 1997-2023 Netflix. Inc.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
