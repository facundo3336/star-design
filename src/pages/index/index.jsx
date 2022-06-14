import { Button } from "../../components/button/button";
import "./index.scss";
import { Link } from "react-router-dom";

export const Index = () => {
  return (
    <div className="indexPageContainer">
      <section
        style={{
          backgroundImage: `url("https://mejoreslaptops.com/wp-content/uploads/2020/06/Las-mejores-laptops-para-trabajar-desde-casa.jpg")`,
        }}
        className="introductionSection"
      >
        <div className="introductionSectionContent sideSpacing">
          <h1>We create pixel perfect websites</h1>
          <p>
            We are Star Design, a dedicated web design agency in Leeds, working
            wonders with WordPress to offer design, development and support
            services
          </p>
          <Link to="/">
            <Button>About Star Design</Button>
          </Link>
          <Link to="/">
            <Button>Start Your Project</Button>
          </Link>
        </div>
      </section>
      <section className="caseSection">
        <div className="sideSpacing">
          <h2>Case Studies</h2>
          <Link to="/">
            <Button colorClass="violet">View Case Studies</Button>
          </Link>
          <div
            className="caseImageBackground"
            style={{
              backgroundImage: `url("http://c.files.bbci.co.uk/12CB3/production/_119897967_gettyimages-946828612.jpg")`,
            }}
          >
            <div className="caseBlackBackgroundContainer">
              <h3>Gen M</h3>
            </div>
          </div>
          <div
            className="caseImageBackground"
            style={{
              backgroundImage: `url("https://media.istockphoto.com/photos/boiling-water-tap-in-kitchen-picture-id1207766632?k=20&m=1207766632&s=612x612&w=0&h=zlMjx4jp3zTIziBV2iBErwSbqGZcZwEIuNLDufj4ku4=")`,
            }}
          >
            <div className="caseBlackBackgroundContainer">
              <h3>Hot Watter Taps</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
