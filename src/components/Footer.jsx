import { Link } from 'react-router-dom';
import './Footer.css';
import footerlogo from '../assets/Haniya Aesthetics.png';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <div className="footer-logo">
                        <img src={footerlogo} alt="Haniya Aesthetics" className="footer-logo-img" />
                        <span className="footer-logo-text">Haniya Aesthetics</span>
                    </div>
                    <p>
                        You can now enjoy our signature treatments as well as the most comforting,
                        hygienic, timely and luxurious services without having to go anywhere.
                        Haniya Aesthetics is bringing the salon to you & we actually mean that.
                        In a matter of minutes.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>CONTACT US</h4>
                    <p>89-C,Street No#2 PGECHS Lahore</p>

                    <p>+92 3104604041</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Haniya Aesthetics. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;