import { Link } from "react-router-dom";

import "./Footer.scss";

function Footer() {
  return (
    <div className="footer-container">
      <div className="top">
        <h1>
          hard<span>Code</span>
        </h1>
      </div>
      <div className="middle">
        <div className="left">
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Videos</Link>
            </li>
            <li>
              <Link to="/">Profile</Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <h3>Contact</h3>
          <p>davelpz15@gmail.com</p>
          <p>6023509341</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="bottom">
        <div className="left">
          <p>&copy; all rights reserved 2022</p>
        </div>
        <div className="right">
          <a href="/">privacy policy</a>
          <a href="/">sitemap</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
