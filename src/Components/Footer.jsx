import "../Styles/Footer.css";
import NavLogo from "../assets/NavLogo.png";
import instagram_icon from "../assets/instagram_icon.png";
import pintester_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="container">
    <div className="footer">
      <div className="footerLogo">
        <img src={NavLogo} alt="/" className="logo" />
        <p>SHOPMORE</p>
      </div>
      <ul className="footerLinks">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footerSocIcons">
        <div className="footerIconContainer">
          <img src={instagram_icon} alt="/" />
        </div>
        <div className="footerIconContainer">
          <img src={pintester_icon} alt="/" />
        </div>
        <div className="footerIconContainer">
          <img src={whatsapp_icon} alt="/" />
        </div>
      </div>
      <div className="footerCopyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
