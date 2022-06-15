import { Button } from "../../components/button/button";
import "./index.scss";
import { Link } from "react-router-dom";
import { Service } from "../../components/service/service";
import { Post } from "../../components/post/post";
import { InfoBox } from "../../components/info-box/info-box";

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
      <section className="servicesSection">
        <div className="sideSpacing">
          <h2>Web Design Services</h2>
          <Link to="/">
            <Button colorClass="white">View All Our Services</Button>
          </Link>
          <Service
            title="WordPress Development"
            imageUrl="https://www.affiliatewebdesigners.com/assets/wordpress-web-development1.jpg"
            description=" We create beautifully designed WordPress websites
            that combine user experience best practices and high-end performance to
            create something amazing."
          />
          <Service
            title="Web Design & Development"
            imageUrl="https://freshysites.com/wp-content/uploads/FS-devicemock-4-768x516.jpg"
            description="Star Design is a digital agency in Leeds. We create bespoke websites that are lightning fast and search engine friendly, creating the perfect online presence"
          />
          <Service
            title="Page Speed Optimisation"
            imageUrl="https://www.ainygo.com/wp-content/uploads/2021/11/Page-Speed-Optimization.png"
            description="Slower page loading times can have an enormous impact on your conversion rates an is now an important ranking factor for search engines too. Contact us to supercharge your site."
          />
          <Service
            title="eCommerce Website"
            imageUrl="https://cdn.learnwoo.com/wp-content/uploads/2018/01/WordPress-eCommerce.png"
            description="Your website is your shop window to the online world. So make sure it's highly effective and built to convert with our affordable WooCommerce websites"
          />
        </div>
      </section>
      <section className="postsSection">
        <div className="sideSpacing">
          <h2>Recent Posts</h2>
          <Link to="/">
            <Button colorClass="backgroundViolet">View all Post</Button>
          </Link>
          <Link to="/">
            <Post
              imageUrl="https://previews.123rf.com/images/infinityyy/infinityyy1709/infinityyy170900092/86248258-m%C3%A1quina-de-escribir-vintage-antigua-en-una-mesa-de-madera.jpg"
              title="Classic editor vs Gutenberg"
            />
          </Link>
          <Link to="/">
            <Post
              imageUrl="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/b47e97673b956ef015df1b6fe7ec9949e830eeb1dcf0e33a67494b1c8a4c04e4._RI_.jpg"
              title="Why is Star Design so popular?"
            />
          </Link>
          <Link to="/">
            <Post
              imageUrl="https://www.poynter.org/wp-content/uploads/2020/06/shutterstock_1211814685.png"
              title="Award-Winning Website Design for Start Design "
            />
          </Link>
        </div>
      </section>
      <section className="infoSection">
        <div className="sideSpacing">
          <h2>Star Design Development agency in Leeds</h2>
          <p className="infoSectionParagraph">
            We are Star Design, a website design agency specialising in
            WordPress Development
          </p>
          <Link to="/">
            <InfoBox
              title="Star Design Development"
              paragraph="We create beautifully designed WordPress websites that combine
              fantastic user experience and high-end performance to outshine
              your competition"
              footer="View WordPress Development Services"
            />
          </Link>
          <Link to="/">
            <InfoBox
              title="Bespoken WordPress Websites"
              paragraph="Goodbye, templates! We build beautiful bespoke WordPress websites
              that stand out from the crowd, no off-the-shelf templates used"
              footer="View WordPress Websites"
            />
          </Link>
          <Link to="/">
            <InfoBox
              title="Star Design Support & Care Plans"
              paragraph="It's importan to fix those annoying issues that crop up and enable
              you to keep your website onlie and up to date. Click below to find
              out more."
              footer="Need Star Design Support? Get it touch"
            />
          </Link>
          <Link to="/">
            <InfoBox
              title="WordPress Hosting"
              paragraph="Designed and built solely for WordPress, our WordPress platform
              sits behind a pre-configured NGINX edge cache system and built in
              premium CDN"
              footer="No limits, WordPress Hosting, find out more"
            />
          </Link>
        </div>
      </section>
    </div>
  );
};
