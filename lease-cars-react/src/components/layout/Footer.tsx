import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__menu">
          <ul className="footer__menu-list">
            <li className="footer__menu-item"><p className="footer__menu-title">Products</p></li>
            <li className="footer__menu-item"><span className="footer__menu-link">Used</span></li>
            <li className="footer__menu-item"><span className="footer__menu-link">New</span></li>
            <li className="footer__menu-item"><span className="footer__menu-link">Sell your car</span></li>
          </ul>
          <ul className="footer__menu-list">
            <li className="footer__menu-item"><p className="footer__menu-title">Resources</p></li>
            <li className="footer__menu-item"><span className="footer__menu-link">Blog</span></li>
            <li className="footer__menu-item"><span className="footer__menu-link">FAQ</span></li>
            <li className="footer__menu-item"><Link to="/contacts" className="footer__menu-link">Contact</Link></li>
          </ul>
          <ul className="footer__menu-list">
            <li className="footer__menu-item"><p className="footer__menu-title">Work With TrueCar</p></li>
            <li className="footer__menu-item"><span className="footer__menu-link">Dealers</span></li>
            <li className="footer__menu-item"><span className="footer__menu-link">Partners</span></li>
          </ul>
          <ul className="footer__menu-list">
            <li className="footer__menu-item"><p className="footer__menu-title">About</p></li>
            <li className="footer__menu-item"><span className="footer__menu-link">About us</span></li>
            <li className="footer__menu-item"><span className="footer__menu-link">Team</span></li>
            <li className="footer__menu-item"><span className="footer__menu-link">Careers</span></li>
          </ul>
        </nav>
        <ul className="app">
          <li className="app__item">
            <span className="app__item-link">
              <img src="/images/appstore.svg" alt="appstore" className="app__item-img" />
            </span>
          </li>
          <li className="app__item">
            <span className="app__item-link">
              <img src="/images/google.svg" alt="google" className="app__item-img" />
            </span>
          </li>
        </ul>
        <div className="footer__copy">
          <p className="footer__copy-text">
            For questions about the TrueCar Auto Buying Service please call 1-888-878-3227. Certified
            Dealers are contractually obligated by TrueCar to meet certain customer service requirements
            and complete the TrueCar Dealer Certification Program.
          </p>
          <p className="footer__copy-text">
            TrueCar does not broker, sell, or lease motor vehicles. Unless otherwise noted, all vehicles
            shown on this website are offered for sale by licensed motor vehicle dealers. All vehicles are
            subject to prior sale. By accessing this website, you agree to the TrueCar Terms of Service and
            Privacy Policy.
          </p>
        </div>
        <nav className="copy__nav">
          <ul className="copy__nav-list">
            <li className="copy__nav-item"><span className="copy__nav-link">Terms of Service</span></li>
            <li className="copy__nav-item"><span className="copy__nav-link">Privacy Policy</span></li>
            <li className="copy__nav-item"><span className="copy__nav-link">Do Not Sell My Personal Information</span></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
