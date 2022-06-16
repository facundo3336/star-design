import "./header.scss";
import { Link } from "react-router-dom";
import { Popup } from "../popup/popup";
import { useState } from "react";

export const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function closeOpenPopup() {
    setIsPopupOpen(!isPopupOpen);
  }

  return (
    <header className=".header">
      {isPopupOpen && (
        <Popup close={closeOpenPopup}>
          <div className="popUpHeaderContent">
            <nav className="navbarPopup">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Case Studies</Link>
                </li>
                <li>
                  <Link to="/">Our Services</Link>
                </li>
                <li>
                  <Link to="/">News</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="popupExtraInfoContainer">
              <div>
                <span>Give us a ring</span>
                <p>0113 873 0189</p>
              </div>
              <div>
                <span>Send us an email</span>
                <p>star-desing@gmail.com</p>
              </div>
              <div>
                <span>Want a quote?</span>
                <p>Start Your Proyect</p>
              </div>
            </div>
          </div>
        </Popup>
      )}
      <div className="header">
        <Link to={"/"}>
          <div
            className="starLogo"
            style={{
              backgroundImage: `url("https://images.vexels.com/media/users/3/134164/isolated/preview/eb58326373abbbb33c0a0558f6f402d2-estrella-explosion-amarilla-9.png?fmt=webp&h=250")`,
            }}
          ></div>
        </Link>
        <div className="navbarBars">
          <i onClick={closeOpenPopup} className="fa-solid fa-bars"></i>
        </div>
        <h1>Star Design</h1>
      </div>
    </header>
  );
};
