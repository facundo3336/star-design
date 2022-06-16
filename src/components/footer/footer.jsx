import "./footer.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  function handleClick() {
    window.scroll(0, 0);
  }

  return (
    <footer>
      <div className="sideSpacing footerContainer">
        <div className="footerInfo">
          <span className="footerBigHeaders">Send us an email</span>
          <a className="footerInfo" href="https://outlook.live.com">
            <p>StarDesign@crushpixels.co.uk</p>
          </a>
        </div>
        <div>
          <span className="footerBigHeaders">Give us a ring</span>
          <a className="footerInfo" href="tel:0113 873 0189">
            <p>0113 873 0189</p>
          </a>
        </div>
        <div>
          <span className="footerBigHeaders">Follow us</span>
          <div className="footerIconsContainer">
            <a href="https://www.facebook.com">
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a href="https://www.instagram.com">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://www.twitter.com">
              <i className="fa-brands fa-twitter"></i>
            </a>

            <a href="https://www.linkedin.com">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div>
          <a href="https://www.google.com.uy/maps/dir//Intendencia+de+Montevideo,+Av.+18+de+Julio+1360,+11200+Montevideo/@-34.9058992,-56.1876801,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x959f81cb78209d13:0xfaf367ad3024da1c!2m2!1d-56.1861229!2d-34.9062357?hl=es-419">
            <span className="footerDirectionTitle">Star Design</span>
            <i className="fa-solid fa-location-dot"></i>
          </a>
          <p className="footerInfo footerDirection">
            Duke Studios,
            <br />
            3 Sheaf Street <br />
            Leeds, LS10 1HD <br />
            West Yorkshire
          </p>
        </div>
        <div className="footerServicesContainer">
          <span>WordPress Services</span>
          <Link className="footerInfo" to="/">
            WordPress Development
          </Link>
          <Link className="footerInfo" to="/">
            WordPress Support
          </Link>
          <Link className="footerInfo" to="/">
            WooCommerce Web Design
          </Link>
          <Link className="footerInfo" to="/">
            WordPress Hosting
          </Link>
        </div>
        <div className="footerLogos">
          <img
            src="https://crushpixels.co.uk/wp-content/uploads/WordPress-Agency-in-Leeds-.png.webp"
            alt=""
          />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">FAQ's</Link>
            </li>
            <li>
              <Link to="/">SiteMap</Link>
            </li>
            <li>
              <Link to="/">Cookie Policy</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">T&C's</Link>
            </li>
          </ul>
        </nav>
        <div onClick={handleClick} className="arrow">
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </div>
    </footer>
  );
};
