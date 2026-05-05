import { useState, useEffect } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [focusedField, setFocusedField] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach(element => {
                const position = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                if (position < screenPosition) {
                    element.classList.add('animated');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const message = `✨ NEW BEAUTY INQUIRY ✨
        
┌─────────────────────────────┐
│  Name: ${formData.name}
│  Email: ${formData.email}
│  Phone: ${formData.phone}
│  Service: ${formData.service || 'Not specified'}
│  Message: ${formData.message}
└─────────────────────────────┘
Please respond to this inquiry.`;

        window.open(`https://wa.me/923374768957?text=${encodeURIComponent(message)}`, '_blank');

        setTimeout(() => {
            setIsSubmitting(false);
            setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        }, 1000);
    };

    const bookAppointment = () => {
        window.open('https://wa.me/923374768957?text=✨ I would like to book an appointment at Beauty Secrets. Please share available slots. ✨', '_blank');
    };

    const services = [
        "Select a service",
        "👁️ Eyebrow Services",
        "💇‍♀️ Hair Services",
        "🌸 Waxing Services",
        "💆‍♀️ Skin Care",
        "💅 Nail Services",
        "🕯️ Massage & Spa",
        "💄 Makeup Services",
        "👰 Bridal Services"
    ];

    const contactInfo = [
        { icon: "📍", title: "Visit Us", details: ["Wapda, Block E2", "Block E 2 Wapda Town Phase 1", "Town, Lahore, 54000"], color: "#FF6B8A" },
        { icon: "📞", title: "Call Us", details: ["+92 337 4768957", "24/7 Support"], color: "#FF9EB5" },
        { icon: "✉️", title: "Email Us", details: ["info@beautysecrets.com", "Response within 24h"], color: "#FFB6C1" },
        { icon: "⏰", title: "Working Hours", details: ["Mon-Sat: 10AM - 8PM", "Sun: 12PM - 6PM"], color: "#FFC0CB" }
    ];

    // Lahore Wapda Town coordinates
    const mapLocation = {
        address: "Wapda, Block E2 Block E 2 Wapda Town Phase 1 Town, Lahore, 54000",
        lat: "31.4321",
        lng: "74.3219"
    };

    // Google Maps embed URL for Lahore Wapda Town location
    const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.123456789012!2d74.3189!3d31.4298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919041e8e5e5e5e%3A0x0!2sWapda%20Town%20Phase%201%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1`;

    return (
        <div className="contact-page-premium">
            {/* Hero Section */}
            <div className="contact-hero-premium">
                <div className="hero-backdrop"></div>
                <div className="hero-content">
                    <div className="hero-badge">✦ LET'S CONNECT ✦</div>
                    <h1>We'd Love to <span className="gradient-text">Hear From You</span></h1>
                    <p>Your beauty journey begins with a conversation</p>
                </div>
                <div className="hero-wave">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 32L48 42.7C96 53.3 192 74.7 288 80C384 85.3 480 74.7 576 69.3C672 64 768 64 864 69.3C960 74.7 1056 85.3 1152 80C1248 74.7 1344 53.3 1392 42.7L1440 32V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V32Z" fill="#0A0A0A" />
                    </svg>
                </div>
            </div>

            {/* Main Content */}
            <div className="contact-main">
                <div className="container">
                    <div className="contact-grid">
                        {/* Left Side - Contact Information */}
                        <div className="contact-info-section animate-on-scroll">
                            <div className="info-header">
                                <span className="info-badge">✦ CONNECT WITH US ✦</span>
                                <h2>Get in <span className="gradient-text">Touch</span></h2>
                                <p>Reach out to us through any of these channels</p>
                            </div>

                            <div className="info-cards">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="info-card" style={{ borderLeftColor: info.color }}>
                                        <div className="info-icon" style={{ background: `${info.color}20`, color: info.color }}>
                                            {info.icon}
                                        </div>
                                        <div className="info-content">
                                            <h3>{info.title}</h3>
                                            {info.details.map((detail, i) => (
                                                <p key={i}>{detail}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="social-links-section">
                                <h3>Follow Us</h3>
                                <div className="social-icons">
                                    <a href="#" className="social-icon instagram">📷</a>
                                    <a href="#" className="social-icon facebook">📘</a>
                                    <a href="#" className="social-icon tiktok">🎵</a>
                                    <a href="#" className="social-icon pinterest">📌</a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="contact-form-section animate-on-scroll">
                            <div className="form-header">
                                <h2>Send us a <span className="gradient-text">Message</span></h2>
                                <p>We'll get back to you within 24 hours</p>
                            </div>

                            <form onSubmit={handleSubmit} className="premium-form">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        className={focusedField === 'name' ? 'focused' : ''}
                                    />
                                    <label className={formData.name ? 'filled' : ''}>Your Name</label>
                                    <div className="input-border"></div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className={focusedField === 'email' ? 'focused' : ''}
                                        />
                                        <label className={formData.email ? 'filled' : ''}>Email Address</label>
                                        <div className="input-border"></div>
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('phone')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className={focusedField === 'phone' ? 'focused' : ''}
                                        />
                                        <label className={formData.phone ? 'filled' : ''}>Phone Number</label>
                                        <div className="input-border"></div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="service-select"
                                    >
                                        {services.map((service, index) => (
                                            <option key={index} value={service === "Select a service" ? "" : service}>
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="select-arrow">▼</div>
                                </div>

                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        rows="4"
                                        required
                                        className={focusedField === 'message' ? 'focused' : ''}
                                    ></textarea>
                                    <label className={formData.message ? 'filled' : ''}>Your Message</label>
                                    <div className="input-border"></div>
                                </div>

                                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <span className="spinner">✦</span>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section - Updated with Lahore Wapda Town Location */}
            <div className="map-section">
                <div className="map-overlay"></div>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217801.63880807197!2d74.19826915742604!3d31.482349349538138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903f6e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sWapda%20Town%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Beauty Secrets Location - Wapda Town Lahore"
                    ></iframe>
                </div>
                <div className="map-card">
                    <div className="map-card-icon">📍</div>
                    <h4>Find Us Here</h4>
                    <p>Wapda, Block E2 Block E 2 Wapda Town Phase 1 Town, Lahore, 54000</p>
                    <button onClick={() => window.open('https://maps.google.com/?q=Wapda+Town+Phase+1+Lahore', '_blank')} className="map-btn">
                        Get Directions →
                    </button>
                </div>
            </div>

            {/* CTA Section */}
            <div className="contact-cta-premium">
                <div className="cta-pattern"></div>
                <div className="cta-content">
                    <h2>Ready to Experience <span className="gradient-text">Luxury Beauty?</span></h2>
                    <p>Book your appointment now and get 10% off on your first service</p>
                    <button className="cta-book-btn" onClick={bookAppointment}>
                        Book Your Appointment
                    </button>
                </div>
            </div>

            {/* Floating WhatsApp */}

        </div>
    );
}

export default Contact;