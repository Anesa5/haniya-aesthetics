import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Services from './Services';

import steps14 from "../assets/14stepshydrafacial.jpg";
import carbon from "../assets/Carbonfacial.jpg";
import prp from "../assets/PRP.jpg";
import botox from "../assets/botox.jpg";
import lipfillers from "../assets/Lipfillers.jpg";
import fullLegs from "../assets/fullbodylaser.jpg";
import picoLaser from "../assets/picolaser.jpg";
import step8 from "../assets/8stepshydrafacial.jpg";


function Home() {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(null);

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
        window.open('https://wa.me/923104604041?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment%20at%20Haniya%20Aesthetics.', '_blank');
    };

    const servicesList = [
        {
            title: "HydaFacial",
            desc: "A refreshing facial that cleanses, hydrates, and revitalizes your skin with no downtime.",
            image: steps14
        },
        {
            title: "Lip Fillers",
            desc: "Restore volume and achieve beautifully shaped lips with our premium filler treatments.",
            image: lipfillers
        },
        {
            title: "Whitening Drips",
            desc: "Enhance your natural glow with a vitamin-infused treatment that promotes healthy, luminous skin.",
            image: prp
        },
        {
            title: "Botox",
            desc: "Reduce the appearance of expression lines with safe, expertly administered Botox treatments.",
            image: botox
        },
        {
            title: "Laser Hair Removal",
            desc: "Experience advanced laser treatments for lasting hair reduction and renewed confidence.",
            image: fullLegs
        },
        {
            title: "Pico Laser",
            desc: "A non-invasive laser treatment designed to improve skin texture and promote a radiant complexion.",
            image: picoLaser
        },
        {
            title: "Carbon Facial",
            desc: "Revitalize your skin with a Carbon Facial for a clearer, smoother, and more even complexion.",
            image: carbon
        }
    ];


    const faqs = [
        {
            q: "What treatments do you offer?",
            a: "We offer a range of advanced aesthetic treatments including HydraFacial, Botox, Dermal Fillers, Laser Hair Removal, Pico Laser, Carbon Facial, IV Drips, and professional skincare solutions."
        },
        {
            q: "Are your treatments safe?",
            a: "Yes. All treatments are performed by qualified professionals using FDA-approved equipment and premium-quality products, following the highest safety standards."
        },
        {
            q: "Do I need a consultation before treatment?",
            a: "Yes. We recommend a personalized consultation to assess your skin, discuss your goals, and recommend the most suitable treatment plan."
        },
        {
            q: "Is there any downtime after the treatments?",
            a: "Most of our treatments require little to no downtime, allowing you to return to your daily activities shortly after your appointment. Recovery time may vary depending on the procedure."
        },
        {
            q: "How can I book an appointment?",
            a: "You can easily book your appointment through our website, call our clinic, or contact us via WhatsApp for quick assistance."
        }
    ];

    const galleryImages = [
        steps14,
        carbon,
        prp,
        botox,
        lipfillers,
        fullLegs,
    ];

    return (
        <div className="home">
            {/* Hero Section - Full Width with Left Alignment */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-bg"></div>
                <div className="hero-container">
                    <div className="hero-content">
                        <h1>Elevating Confidence Through Expert Aesthetics</h1>

                        <button className="book-btn hero-btn" onClick={bookAppointment}>Book Now</button>
                    </div>
                </div>
            </section>

            {/* ================= ABOUT US SECTION ================= */}
            <section className="about-home-section">
                <div className="container">
                    <div className="about-home-grid">
                        <div className="about-home-content animate-on-scroll">
                            <span className="section-tag">ABOUT US</span>
                            <h2>Your Trusted Partner in <span>Aesthetic Excellence</span></h2>
                            <p>
                                Haniya Aesthetics is a leading aesthetic clinic in Lahore committed to enhancing natural beauty through expert care and advanced skin treatments. Our mission is to help every client achieve healthy, radiant skin with safe, effective, and customized aesthetic solutions.
                            </p>
                            <p>
                                Our team of experienced dermatologists and skincare professionals uses the latest technologies to deliver personalized treatments designed around your unique needs. At Haniya Aesthetics, we believe that confidence starts with healthy skin, and every client deserves exceptional care in a welcoming and professional environment.
                            </p>
                            <button className="about-home-btn" onClick={() => navigate('/about')}>Learn More →</button>
                        </div>
                        <div className="about-home-image animate-on-scroll">
                            <img
                                src={step8}
                                alt="Haniya Aesthetics Clinic"
                            />

                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SERVICES COMPONENT ================= */}
            <div className="home-services-wrapper">
                <Services />
            </div>


            {/* Luxury Treatments Section - Left aligned content, enlarged images, no lines */}
            <section className="luxury-treatments">
                <div className="container" style={{ textAlign: "left", alignItems: "flex-start" }}
                >
                    <div className="two-columns">
                        {/* Left Side - Complete Left Alignment */}
                        <div className="left-content animate-on-scroll">
                            <span className="section-tag" style={{ background: "transparent", color: "color:black" }}>Luxury Treatments</span>
                            <h2>Enhance Your Natural Beauty,
                                With Expert Aesthetic Care</h2>
                            <p>Personalized aesthetic treatments designed to enhance your natural beauty with precision, care, and excellence.</p>
                            <button className="view-all-btn" onClick={() => navigate('/services')}>View all services →</button>
                        </div>

                        {/* Right Side - Services List with Enlarged Images, No Lines */}
                        <div className="right-content animate-on-scroll">
                            {servicesList.slice(0, 4).map((service, index) => (
                                <div key={index} className="service-row">
                                    <div className="service-image-container">
                                        <img src={service.image} alt={service.title} className="service-image" />
                                        <div className="service-image-overlay"></div>
                                    </div>
                                    <div className="service-info">
                                        <h3>{service.title}</h3>
                                        <p>{service.desc}</p>
                                        <button className="view-details" onClick={() => navigate('/services')}>View details →</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works">
                <div className="container">
                    <div className="section-header animate-on-scroll">
                        <span className="section-badge">Simple Process</span>
                        <h2>How Haniya <span className="highlight">Aesthetics</span> Works</h2>
                        <p>Your beauty journey in 3 easy steps — professional service at your doorstep</p>
                    </div>

                    <div className="steps-container">
                        <div className="step-card animate-on-scroll">
                            <div className="step-icon-wrapper">
                                <div className="step-icon-circle">
                                    <svg className="step-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16 10L22 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M8 10L2 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div className="step-number">01</div>
                            </div>
                            <h3>Select the Service</h3>
                            <p>Browse & choose from our premium beauty services</p>
                            <div className="step-highlight"></div>
                        </div>

                        <div className="step-card animate-on-scroll">
                            <div className="step-icon-wrapper">
                                <div className="step-icon-circle">
                                    <svg className="step-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M12 3V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M12 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M21 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M5 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div className="step-number">02</div>
                            </div>
                            <h3>Choose Date & Time</h3>
                            <p>Pick a slot that fits your busy schedule</p>
                            <div className="step-highlight"></div>
                        </div>

                        <div className="step-card animate-on-scroll">
                            <div className="step-icon-wrapper">
                                <div className="step-icon-circle">
                                    <svg className="step-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M8 3H9C12 3 13 4 13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div className="step-number">03</div>
                            </div>
                            <h3>Relax & Glow</h3>
                            <p>Expert arrives — you just sit back and enjoy</p>
                            <div className="step-highlight"></div>
                        </div>
                    </div>

                    <div className="steps-footer animate-on-scroll">
                        <button className="book-btn works-btn" onClick={bookAppointment}>
                            Book Your Appointment
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <style>{`
        .how-it-works {
            padding: 90px 0;
            background: linear-gradient(135deg, #FDF8F4 0%, #FFF9F5 100%);
            position: relative;
            overflow: hidden;
        }

        .how-it-works::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -20%;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(199, 161, 122, 0.04) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
        }

        .container {
            max-width: 1300px;
            margin: 0 auto;
            padding: 0 40px;
            position: relative;
            z-index: 2;
        }

        .section-header {
            text-align: center;
            margin-bottom: 60px;
        }

        .section-badge {
            display: inline-block;
            font-size: 12px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #c7a17a;
            font-weight: 600;
            background: rgba(199, 161, 122, 0.12);
            padding: 6px 16px;
            border-radius: 40px;
            margin-bottom: 18px;
        }

        .section-header h2 {
            font-size: 46px;
            font-weight: 600;
            color: #2c241a;
            margin-bottom: 14px;
            font-family: 'Playfair Display', 'Times New Roman', serif;
        }

        .section-header h2 .highlight {
            color: #c7a17a;
            position: relative;
            display: inline-block;
        }

        .section-header p {
            font-size: 17px;
            color: #6b5a48;
            max-width: 520px;
            margin: 0 auto;
        }

        .steps-container {
            display: flex;
            justify-content: center;
            gap: 40px;
            flex-wrap: wrap;
            margin-bottom: 55px;
        }

        .step-card {
            flex: 1;
            min-width: 250px;
            background: white;
            border-radius: 30px;
            padding: 40px 28px 35px;
            text-align: center;
            transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.06);
            border: 1px solid rgba(199, 161, 122, 0.12);
            position: relative;
            cursor: pointer;
        }

        .step-card:hover {
            transform: translateY(-12px);
            box-shadow: 0 25px 45px -12px rgba(199, 161, 122, 0.2);
            border-color: rgba(199, 161, 122, 0.25);
        }

        .step-icon-wrapper {
            position: relative;
            display: inline-block;
            margin-bottom: 28px;
        }

        .step-icon-circle {
            width: 90px;
            height: 90px;
            background: linear-gradient(135deg, #fef6ef, #fff8f2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.35s ease;
            border: 1px solid rgba(199, 161, 122, 0.2);
            margin: 0 auto;
        }

        .step-card:hover .step-icon-circle {
            background: linear-gradient(135deg, #c7a17a, #d9b48b);
            transform: scale(1.06);
        }

        .step-icon {
            width: 44px;
            height: 44px;
            stroke: #c7a17a;
            transition: all 0.35s ease;
        }

        .step-card:hover .step-icon {
            stroke: white;
        }

        .step-number {
            position: absolute;
            bottom: -6px;
            right: -10px;
            width: 34px;
            height: 34px;
            background: #2c241a;
            color: white;
            font-size: 14px;
            font-weight: 700;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 10px rgba(0,0,0,0.12);
            font-family: monospace;
        }

        .step-card h3 {
            font-size: 22px;
            font-weight: 700;
            color: #2c241a;
            margin-bottom: 12px;
        }

        .step-card p {
            font-size: 14px;
            color: #7e6d5a;
            line-height: 1.5;
        }

        .step-highlight {
            width: 50px;
            height: 2px;
            background: #c7a17a;
            margin: 18px auto 0;
            border-radius: 2px;
            opacity: 0.4;
            transition: width 0.3s ease, opacity 0.3s ease;
        }

        .step-card:hover .step-highlight {
            width: 80px;
            opacity: 0.8;
        }

        .steps-footer {
            text-align: center;
        }

        .works-btn {
            background: #c7a17a;
            border: none;
            padding: 14px 38px;
            font-size: 16px;
            font-weight: 600;
            color: white;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: inherit;
            box-shadow: 0 6px 18px rgba(199, 161, 122, 0.35);
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }

        .works-btn:hover {
            background: #b58a5c;
            transform: translateY(-3px);
            box-shadow: 0 12px 28px rgba(199, 161, 122, 0.45);
            gap: 14px;
        }

        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .animate-on-scroll.animated {
            opacity: 1;
            transform: translateY(0);
        }

        @media (max-width: 950px) {
            .steps-container {
                gap: 25px;
            }
            .section-header h2 {
                font-size: 38px;
            }
        }

        @media (max-width: 768px) {
            .container {
                padding: 0 25px;
            }
            .step-card {
                min-width: 100%;
            }
            .how-it-works {
                padding: 60px 0;
            }
            .section-header h2 {
                font-size: 32px;
            }
        }
    `}</style>
            </section>

            {/* ================= GALLERY SECTION (MOVED UP) ================= */}
            <section className="gallery-section">
                <div className="container">
                    <div className="section-header animate-on-scroll">
                        <h2>Our Aesthetic Gallery</h2>
                        <p>Explore our advanced aesthetic treatments and beautiful results.</p>

                        <button
                            className="instagram-btn"
                            onClick={() => window.open("https://instagram.com", "_blank")}
                        >
                            Follow us on Instagram →
                        </button>
                    </div>

                    <div className="gallery-masonry">
                        <div className="gallery-col">
                            <div className="gallery-item large">
                                <img src={steps14} alt="HydraFacial" />
                                <div className="gallery-overlay">
                                    <p>HydraFacial</p>
                                </div>
                            </div>

                            <div className="gallery-item">
                                <img src={carbon} alt="Carbon Facial" />
                                <div className="gallery-overlay">
                                    <p>Carbon Facial</p>
                                </div>
                            </div>
                        </div>

                        <div className="gallery-col">
                            <div className="gallery-item">
                                <img src={prp} alt="PRP Therapy" />
                                <div className="gallery-overlay">
                                    <p>PRP Therapy</p>
                                </div>
                            </div>

                            <div className="gallery-item large">
                                <img src={botox} alt="Botox" />
                                <div className="gallery-overlay">
                                    <p>Botox</p>
                                </div>
                            </div>
                        </div>

                        <div className="gallery-col">
                            <div className="gallery-item">
                                <img src={lipfillers} alt="Lip Fillers" />
                                <div className="gallery-overlay">
                                    <p>Lip Fillers</p>
                                </div>
                            </div>

                            <div className="gallery-item">
                                <img src={fullLegs} alt="Laser Hair Removal" />
                                <div className="gallery-overlay">
                                    <p>Laser Hair Removal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FAQ SECTION (MOVED DOWN) ================= */}
            <section className="faq-section">
                <div className="container">
                    <div className="section-header animate-on-scroll">
                        <h2>Answers to your most common questions</h2>
                    </div>

                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item animate-on-scroll">
                                <button className="faq-question" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                                    {faq.q}
                                    <span className="faq-icon">{openFaq === index ? '×' : '+'}</span>
                                </button>
                                {openFaq === index && <div className="faq-answer">{faq.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;