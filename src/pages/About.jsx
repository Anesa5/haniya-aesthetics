import { useEffect } from 'react';
import './About.css';

function About() {
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

    const bookAppointment = () => {
        window.open('https://wa.me/923374768957?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment%20at%20Beauty%20Secrets.', '_blank');
    };

    // Aesthetic SVG Icons
    const Icons = {
        story: () => (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1" />
            </svg>
        ),
        heart: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="currentColor" />
            </svg>
        ),
        crown: () => (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1" />
            </svg>
        ),
        star: () => (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" fill="currentColor" />
            </svg>
        ),
        diamond: () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
        ),
        sparkle: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2V4M12 20V22M4 12H2M6 12H4M20 12H22M18 12H20M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
        ),
        clean: () => (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3L21 21M21 3L3 21" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
        ),
        target: () => (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
        ),
        money: () => (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M8 8H16M8 16H16" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 8V16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        ),
        calendar: () => (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1.5" />
                <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5" />
                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        ),
        quote: () => (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11H7C6.5 11 6 10.5 6 10V7C6 6.5 6.5 6 7 6H9C9.5 6 10 6.5 10 7V11ZM10 11L9 16" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M18 11H15C14.5 11 14 10.5 14 10V7C14 6.5 14.5 6 15 6H17C17.5 6 18 6.5 18 7V11ZM18 11L17 16" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
        ),
        book: () => (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6C4 4.9 4.9 4 6 4H18C19.1 4 20 4.9 20 6V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V6Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M8 7H16M8 11H16M8 15H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        )
    };

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-overlay"></div>
                <div className="about-hero-bg"></div>
                <div className="about-hero-content">
                    <div className="about-hero-text animate-on-scroll">
                        <h1>Where Beauty <span className="highlight">Meets Elegance</span></h1>
                        <p>Discover the art of luxury beauty at your doorstep</p>
                        <button className="hero-cta-btn" onClick={bookAppointment}>Start Your Beauty Journey →</button>
                    </div>
                </div>
                <div className="hero-wave">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 32L48 42.7C96 53.3 192 74.7 288 80C384 85.3 480 74.7 576 69.3C672 64 768 64 864 69.3C960 74.7 1056 85.3 1152 80C1248 74.7 1344 53.3 1392 42.7L1440 32V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V32Z" fill="#FFF9F8" />
                    </svg>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="story-section">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-content animate-on-scroll">
                            <span className="section-tag">
                                <Icons.story /> Our Story <Icons.story />
                            </span>
                            <h2>Our Journey of <span className="gradient-text">Beauty & Excellence</span></h2>
                            <p>Founded with a passion for beauty and wellness, Beauty Secrets has been serving the community with premium beauty services since 2020. Our journey began with a simple mission: to help everyone feel confident and beautiful in their own skin.</p>
                            <p>We believe that beauty is not just about looking good—it's about feeling empowered, confident, and radiant from within. Every service we offer is designed to enhance your natural beauty while providing a luxurious, relaxing experience.</p>
                            <div className="story-stats">
                                <div className="story-stat">
                                    <div className="story-stat-number gradient-number">5+</div>
                                    <div className="story-stat-label">Years of Excellence</div>
                                </div>
                                <div className="story-stat">
                                    <div className="story-stat-number gradient-number">10K+</div>
                                    <div className="story-stat-label">Happy Clients</div>
                                </div>
                                <div className="story-stat">
                                    <div className="story-stat-number gradient-number">50+</div>
                                    <div className="story-stat-label">Expert Professionals</div>
                                </div>
                            </div>
                        </div>
                        <div className="story-image animate-on-scroll">
                            <div className="story-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&h=600&fit=crop" alt="Beauty treatment" />
                                <div className="story-image-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mission-section">
                <div className="container">
                    <div className="mission-grid">
                        <div className="mission-card mission-card-1 animate-on-scroll">
                            <div className="mission-icon">
                                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" fill="#FF6B8A" stroke="#FF6B8A" strokeWidth="1.5" />
                                    <circle cx="12" cy="12" r="3" fill="white" />
                                </svg>
                            </div>
                            <h3>Our Mission</h3>
                            <p>To provide exceptional beauty services using high-quality products and techniques, ensuring every client leaves feeling refreshed, rejuvenated, and radiant.</p>
                        </div>
                        <div className="mission-card mission-card-2 animate-on-scroll">
                            <div className="mission-icon">
                                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5 7 2 12 2C17 2 21 5 21 10Z" fill="#FF9EB5" stroke="#FF9EB5" strokeWidth="1.5" />
                                    <circle cx="12" cy="10" r="3" fill="white" />
                                </svg>
                            </div>
                            <h3>Our Vision</h3>
                            <p>To become Pakistan's most trusted luxury beauty service provider, bringing salon-quality experiences to every doorstep.</p>
                        </div>
                        <div className="mission-card mission-card-3 animate-on-scroll">
                            <div className="mission-icon">
                                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 12C20 16.4 16.4 20 12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4" stroke="#FFB6C1" strokeWidth="2" fill="none" />
                                    <path d="M12 8L12 12L15 15" stroke="#FFB6C1" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="9" stroke="#FFB6C1" strokeWidth="2" fill="none" />
                                    <path d="M16 2L20 6L16 10" stroke="#FFB6C1" strokeWidth="2" fill="none" />
                                    <path d="M12 2H20" stroke="#FFB6C1" strokeWidth="2" />
                                </svg>
                            </div>
                            <h3>Our Values</h3>
                            <p>Excellence, integrity, innovation, and client satisfaction are at the heart of everything we do.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-us">
                <div className="container">
                    <div className="section-header animate-on-scroll">
                        <span className="section-tag">
                            <Icons.heart /> Why Choose Us <Icons.heart />
                        </span>
                        <h2>The <span className="gradient-text">Beauty Secrets</span> Difference</h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card feature-card-1 animate-on-scroll">
                            <div className="feature-icon"><Icons.crown /></div>
                            <h3>Professional & Certified Experts</h3>
                            <p>Our team consists of internationally trained professionals with years of experience.</p>
                        </div>
                        <div className="feature-card feature-card-2 animate-on-scroll">
                            <div className="feature-icon"><Icons.sparkle /></div>
                            <h3>Premium Quality Products</h3>
                            <p>We use only the finest luxury brands for exceptional, long-lasting results.</p>
                        </div>
                        <div className="feature-card feature-card-3 animate-on-scroll">
                            <div className="feature-icon"><Icons.clean /></div>
                            <h3>Hygienic & Safe Environment</h3>
                            <p>Your safety is our priority with strict sterilization and hygiene protocols.</p>
                        </div>
                        <div className="feature-card feature-card-4 animate-on-scroll">
                            <div className="feature-icon"><Icons.target /></div>
                            <h3>Personalized Service</h3>
                            <p>Every client receives customized treatments tailored to their unique needs.</p>
                        </div>
                        <div className="feature-card feature-card-5 animate-on-scroll">
                            <div className="feature-icon"><Icons.money /></div>
                            <h3>Competitive Pricing</h3>
                            <p>Luxury services at affordable prices, with no hidden costs.</p>
                        </div>
                        <div className="feature-card feature-card-6 animate-on-scroll">
                            <div className="feature-icon"><Icons.calendar /></div>
                            <h3>Flexible Scheduling</h3>
                            <p>Book appointments at your convenience, 7 days a week.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="container">
                    <div className="section-header animate-on-scroll">
                        <span className="section-tag">
                            <Icons.crown /> Our Experts <Icons.crown />
                        </span>
                        <h2>Meet Our <span className="gradient-text">Beauty Specialists</span></h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className="team-grid">
                        {[
                            { name: "Sarah Ahmed", role: "Senior Makeup Artist", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=300&fit=crop", experience: "8+ years", color: "#FF6B8A" },
                            { name: "Zara Khan", role: "Hair Stylist", image: "https://images.unsplash.com/photo-1713244528167-bdf4901cd240?w=300&h=300&fit=crop", experience: "6+ years", color: "#FF9EB5" },
                            { name: "Alisha Tariq", role: "Skin Care Specialist", image: "https://plus.unsplash.com/premium_photo-1683120953880-fc8b6213b627?w=300&h=300&fit=crop", experience: "7+ years", color: "#FFB6C1" },
                            { name: "Fatima Rizvi", role: "Nail Artist", image: "https://images.unsplash.com/photo-1709477542170-f11ee7d471a0?w=300&h=300&fit=crop", experience: "5+ years", color: "#FFC0CB" },
                        ].map((member, index) => (
                            <div key={index} className="team-card animate-on-scroll">
                                <div className="team-image">
                                    <img src={member.image} alt={member.name} />
                                    <div className="team-overlay" style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}dd)` }}>
                                        <span>{member.experience}</span>
                                    </div>
                                </div>
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <div className="section-header animate-on-scroll">
                        <span className="section-tag">
                            <Icons.heart /> Client Love <Icons.heart />
                        </span>
                        <h2>What Our <span className="gradient-text">Clients Say</span></h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className="testimonials-grid">
                        {[
                            { name: "Ayesha Khan", text: "Absolutely transformed my look! The team is incredibly professional and caring.", rating: 5, location: "Lahore" },
                            { name: "Fatima Ali", text: "Best salon experience ever! The bridal makeup was flawless.", rating: 5, location: "Lahore" },
                            { name: "Sana Riaz", text: "The facial made my skin glow like never before. Highly recommended!", rating: 5, location: "Lahore" },
                        ].map((testimonial, index) => (
                            <div key={index} className="testimonial-card animate-on-scroll">
                                <div className="testimonial-icon">
                                    {[...Array(5)].map((_, i) => (
                                        <Icons.star key={i} />
                                    ))}
                                </div>
                                <p>"{testimonial.text}"</p>
                                <h4>{testimonial.name}</h4>
                                <span className="testimonial-location">{testimonial.location}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta">
                <div className="cta-background">
                    <div className="cta-pattern"></div>
                </div>
                <div className="cta-content animate-on-scroll">
                    <h2>Ready to Experience the <span className="gradient-text">Beauty Secrets Difference?</span></h2>
                    <p>Book your appointment today and receive a complimentary consultation</p>
                    <button className="book-btn cta-btn" onClick={bookAppointment}>
                        <Icons.book /> Book Your Appointment Today <Icons.sparkle />
                    </button>
                </div>
            </section>
        </div>
    );
}

export default About;