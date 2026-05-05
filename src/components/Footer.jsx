import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <p>You can now enjoy our signature treatments as well as the most comforting, hygienic, timely and luxurious services without having to go anywhere. Beauty Secrets is bringing the salon to you & we actually mean that. In a matter of minutes.</p>
                </div>

                <div className="footer-links">
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li><Link to="/">Stories</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/">Careers</Link></li>
                        <li><Link to="/services">Services</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>CONTACT US</h4>
                    <p>M-67 A, Zainab Tower, Model Town Lahore, Pakistan</p>
                    <p>info@beautysecrets.com</p>
                    <p>+92 331 8446047</p>
                </div>
            </div>

            <div className="footer-bottom">


                <p>&copy; {currentYear} Beauty Secrets. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;