import { useEffect } from "react";
import "./About.css";
import img1 from '../assets/doctor1.jpg';
import img2 from '../assets/doctor2.jpg';
import img3 from '../assets/doctor3.jpg';
import hydra from '../assets/8stepshydrafacial.jpg';

function About() {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll(".animate-on-scroll");

            elements.forEach((element) => {
                const position = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.15;

                if (position < screenPosition) {
                    element.classList.add("animated");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const bookAppointment = () => {
        window.open(
            "https://wa.me/923374768957?text=Hello! I would like to book an appointment at Haniya Aesthetics Clinic.",
            "_blank"
        );
    };

    return (
        <div className="about-page">

            {/* ================= HERO SECTION ================= */}

            <section className="about-hero">

                <div className="about-overlay"></div>

                <div className="container">

                    <div className="about-hero-content animate-on-scroll">



                        <h1>
                            Enhancing Your
                            <span> Natural Beauty </span>
                            With Expert Care
                        </h1>

                        <p>
                            At Haniya Aesthetics Clinic, we combine advanced aesthetic
                            treatments with medical expertise to help you achieve healthy,
                            youthful, and naturally beautiful results. From skin
                            rejuvenation to facial aesthetics, every treatment is
                            personalized to suit your unique beauty goals.
                        </p>

                        <button
                            className="hero-btn"
                            onClick={bookAppointment}
                        >
                            Book Appointment →
                        </button>

                    </div>

                </div>

            </section>

            {/* ================= ABOUT CLINIC ================= */}

            <section className="about-clinic">

                <div className="container">

                    <div className="about-grid">

                        <div className="about-image animate-on-scroll">

                            <img src={hydra} alt="Hydra" />

                        </div>

                        <div className="about-content animate-on-scroll">

                            <span className="section-tag">
                                ABOUT OUR CLINIC
                            </span>

                            <h2>
                                Where Advanced Aesthetics
                                <span> Meets Personalized Care</span>
                            </h2>

                            <p>
                                Haniya Aesthetics Clinic is dedicated to providing
                                world-class aesthetic treatments in a safe,
                                comfortable, and luxurious environment. Our experienced
                                practitioners use advanced technology and evidence-based
                                techniques to deliver natural-looking, confidence-boosting
                                results.
                            </p>

                            <p>
                                Whether you're looking for glowing skin, facial
                                rejuvenation, anti-aging solutions, or body treatments,
                                every procedure is carefully tailored to your individual
                                needs and beauty goals.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= STATS ================= */}

            <section className="about-stats">

                <div className="container">

                    <div className="stats-grid">

                        <div className="stat-card animate-on-scroll">
                            <h2>5+</h2>
                            <p>Years of Excellence</p>
                        </div>

                        <div className="stat-card animate-on-scroll">
                            <h2>10K+</h2>
                            <p>Satisfied Clients</p>
                        </div>

                        <div className="stat-card animate-on-scroll">
                            <h2>20+</h2>
                            <p>Advanced Treatments</p>
                        </div>

                        <div className="stat-card animate-on-scroll">
                            <h2>100%</h2>
                            <p>Personalized Care</p>
                        </div>

                    </div>

                </div>

            </section>
            {/* ================= MISSION & VISION ================= */}

            <section className="mission-section">

                <div className="container">

                    <div className="section-heading animate-on-scroll">
                        <span>OUR PURPOSE</span>
                        <h2>Committed to Excellence in Aesthetic Care</h2>
                        <p>
                            We believe every individual deserves to feel confident in their own skin.
                            Our mission is to deliver safe, advanced, and personalized aesthetic
                            treatments with exceptional care and professionalism.
                        </p>
                    </div>

                    <div className="mission-grid">

                        <div className="mission-card animate-on-scroll">
                            <div className="mission-icon">✨</div>
                            <h3>Our Mission</h3>

                            <p>
                                To provide world-class aesthetic treatments using advanced
                                technology, premium products, and personalized treatment plans
                                that enhance natural beauty while prioritizing patient safety.
                            </p>
                        </div>

                        <div className="mission-card animate-on-scroll">
                            <div className="mission-icon">🌿</div>

                            <h3>Our Vision</h3>

                            <p>
                                To become one of Pakistan's leading aesthetic clinics,
                                recognized for clinical excellence, innovation, and
                                natural-looking results that inspire confidence.
                            </p>
                        </div>

                        <div className="mission-card animate-on-scroll">

                            <div className="mission-icon">💎</div>

                            <h3>Our Values</h3>

                            <p>
                                Integrity, professionalism, patient safety,
                                innovation, and compassionate care guide every
                                treatment we perform.
                            </p>

                        </div>

                    </div>

                </div>

            </section>



            {/* ================= WHY CHOOSE US ================= */}

            <section className="why-choose">

                <div className="container">

                    <div className="section-heading animate-on-scroll">

                        <span>WHY CHOOSE US</span>

                        <h2>
                            Why Patients Trust
                            <span> Haniya Aesthetics Clinic</span>
                        </h2>

                        <p>
                            Experience premium aesthetic care delivered with precision,
                            expertise, and a commitment to achieving naturally beautiful
                            results.
                        </p>

                    </div>

                    <div className="features-grid">

                        <div className="feature-card animate-on-scroll">
                            <div className="feature-icon">👩‍⚕️</div>

                            <h3>Qualified Specialists</h3>

                            <p>
                                Treatments performed by experienced aesthetic professionals
                                committed to excellence.
                            </p>

                        </div>

                        <div className="feature-card animate-on-scroll">

                            <div className="feature-icon">🔬</div>

                            <h3>Advanced Technology</h3>

                            <p>
                                We use modern equipment and clinically proven techniques
                                for safe and effective treatments.
                            </p>

                        </div>

                        <div className="feature-card animate-on-scroll">

                            <div className="feature-icon">💉</div>

                            <h3>Personalized Treatments</h3>

                            <p>
                                Every treatment plan is tailored to your unique skin,
                                facial features, and aesthetic goals.
                            </p>

                        </div>

                        <div className="feature-card animate-on-scroll">

                            <div className="feature-icon">🛡️</div>

                            <h3>Safety First</h3>

                            <p>
                                We maintain the highest standards of hygiene,
                                sterilization, and patient care.
                            </p>

                        </div>

                        <div className="feature-card animate-on-scroll">

                            <div className="feature-icon">✨</div>

                            <h3>Natural Results</h3>

                            <p>
                                Our philosophy is to enhance your natural beauty
                                without compromising facial harmony.
                            </p>

                        </div>

                        <div className="feature-card animate-on-scroll">

                            <div className="feature-icon">❤️</div>

                            <h3>Patient Satisfaction</h3>

                            <p>
                                We are dedicated to delivering exceptional experiences
                                and long-term confidence for every patient.
                            </p>

                        </div>

                    </div>

                </div>

            </section>
            {/* ================= OUR SPECIALISTS ================= */}

            <section className="team-section">

                <div className="container">

                    <div className="section-heading animate-on-scroll">
                        <span>OUR EXPERTS</span>
                        <h2>Meet Our Specialists</h2>
                        <p>
                            Our experienced team is dedicated to delivering exceptional
                            aesthetic treatments with professionalism, precision, and care.
                        </p>
                    </div>

                    <div className="team-grid">

                        {[
                            {
                                name: "Dr. Haniya",
                                role: "Aesthetic Physician",
                                image: img1,
                            },
                            {
                                name: "Dr. Sarah",
                                role: "Skin Specialist",
                                image: img2,
                            },
                            {
                                name: "Dr. Ayesha",
                                role: "Laser Therapist",
                                image: img3,
                            },
                        ].map((member, index) => (
                            <div className="team-card animate-on-scroll" key={index}>
                                <img src={member.image} alt={member.name} />

                                <div className="team-content">
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* ================= TESTIMONIALS ================= */}

            <section className="testimonial-section">

                <div className="container">

                    <div className="section-heading animate-on-scroll">
                        <span>TESTIMONIALS</span>
                        <h2>What Our Patients Say</h2>
                        <p>
                            Discover why patients trust Haniya Aesthetics Clinic for their
                            aesthetic journey.
                        </p>
                    </div>

                    <div className="testimonial-grid">

                        {[
                            {
                                name: "Ayesha Khan",
                                review:
                                    "The HydraFacial completely transformed my skin. The staff were professional, friendly, and made me feel comfortable throughout the treatment.",
                            },
                            {
                                name: "Fatima Ali",
                                review:
                                    "I had Botox treatment here and the results were incredibly natural. Highly recommended for anyone looking for expert aesthetic care.",
                            },
                            {
                                name: "Sana Ahmed",
                                review:
                                    "The clinic is beautiful, hygienic, and the team genuinely cares about their patients. I couldn't be happier with my results.",
                            },
                        ].map((item, index) => (
                            <div className="testimonial-card animate-on-scroll" key={index}>

                                <div className="stars">
                                    ⭐⭐⭐⭐⭐
                                </div>

                                <p>"{item.review}"</p>

                                <h4>{item.name}</h4>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* ================= CTA ================= */}

            <section className="about-cta">

                <div className="container">

                    <div className="cta-box animate-on-scroll">

                        <h2>
                            Begin Your Journey to
                            <span> Radiant Confidence</span>
                        </h2>

                        <p>
                            Schedule your consultation today and let our specialists create
                            a personalized treatment plan designed exclusively for you.
                        </p>

                        <button
                            className="hero-btn"
                            onClick={bookAppointment}
                        >
                            Book Consultation →
                        </button>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default About;