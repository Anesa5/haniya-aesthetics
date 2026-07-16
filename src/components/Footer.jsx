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
                    <p className="address">
                        <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        89C, Main Road Punjab Govt Housing Society, near Wapda Town, Lahore, 54000
                    </p>

                    <p className="phone">
                        <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <a href="tel:+923104604041" className="phone-link">+92 3104604041</a>
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Haniya Aesthetics. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;