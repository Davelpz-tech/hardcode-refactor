import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navigation.scss";

function Navigation() {
  const [sideBar, setSidebar] = useState(false);
  const showSideBar = () => {
    setSidebar(!sideBar);
  };

  return (
    <>
      <div className="nav-top">
        <div className="left">
          <i className="fa-solid fa-bars menu" onClick={showSideBar}></i>
          <h1>
            <Link to="/">
              hard<span>Code</span>
            </Link>
          </h1>
        </div>
        <div className="middle">
          <input type="text" placeholder="search here" />
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        <div className="right">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </div>
      </div>
      <nav className={sideBar ? "nav-left active" : "nav-left"}>
        <div className="nav-left-menu-container">
          <i className="fa-solid fa-bars menu" onClick={showSideBar}></i>
          <h1>
            hard<span>Code</span>
          </h1>
        </div>
        <div className="top">
          <h3>Your Channels</h3>

          <div className="channel">
            <div className="avatar">
              <img src="https://source.unsplash.com/MxVkWPiJALs" alt="" />
            </div>
            <div className="channel-avatar-info">
              <p>lets play</p>
              <p>5k subscribers</p>
            </div>
          </div>

          <div className="channel">
            <div className="avatar">
              <img src="https://source.unsplash.com/lLdGG3ESoiI" alt="" />
            </div>
            <div className="channel-avatar-info">
              <p>proXD</p>
              <p>2.4m subscribers</p>
            </div>
          </div>

          <div className="channel">
            <div className="avatar">
              <img src="https://source.unsplash.com/4GA8bgF9f1M" alt="" />
            </div>
            <div className="channel-avatar-info">
              <p>gamer guy</p>
              <p>21 subscribers</p>
            </div>
          </div>
        </div>
        <div className="middle">
          <h3>Navigation</h3>
          <Link to="/" className="nav-tags">
            <i className="fa-solid fa-house"></i>
            <a>Home</a>
          </Link>
          <Link to="/" className="nav-tags">
            <i className="fa-solid fa-gamepad"></i>
            <a>Games</a>
          </Link>
          <Link to="/" className="nav-tags">
            <i className="fa-solid fa-user"></i>
            <a>Profile</a>
          </Link>
          <Link to="/" className="nav-tags">
            <i className="fa-solid fa-video"></i>
            <a>Streams</a>
          </Link>
          <Link to="/" className="nav-tags">
            <i className="fa-solid fa-play"></i>
            <a>Videos</a>
          </Link>
        </div>
        <div className="bottom">
          <button>Logout</button>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
