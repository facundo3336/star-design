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
    </div>
  );
};
