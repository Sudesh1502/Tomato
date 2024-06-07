import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footerContent">
        <div className="footerContentLeft">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ab
            autem dicta reiciendis voluptatibus quas at fugiat ducimus inventore
            iusto sapiente perferendis. Vitae delectus, rerum quibusdam
            voluptates repellat mollitia sunt.
          </p>
          <div className="footerSocialIcons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footerContentCenter">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privay Policy</li>
            </ul>
        </div>

        <div className="footerContentRight">
            <h2>Get In Touch</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>Foody@tomato.com</li>
            </ul>
        </div>
      </div>

      <hr />
      <p className="footerCopRight">Copyright 2024 	&#169; Tomato.com - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
