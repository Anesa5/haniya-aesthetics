import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

// ===== IMPORT ALL IMAGES FROM src/assets/ =====
import hydra from "../assets/hydra.jpg";
import steps8 from "../assets/8stepshydrafacial.jpg";
import steps14 from "../assets/14stepshydrafacial.jpg";
import carbon from "../assets/Carbonfacial.jpg";
import prp from "../assets/PRP.jpg";
import botox from "../assets/botox.jpg";
import lipfillers from "../assets/Lipfillers.jpg";
import mole from "../assets/MoleRemovalTreatment.jpg";
import whitening from "../assets/whitening.jpg";
import whiteningInj from "../assets/whiteninginjections.jpg";
import picoTreatment from "../assets/picolasertreatment.jpg";
import picoLaser from "../assets/picolaser.jpg";
import fullArms from "../assets/fullarmslaser.jpg";
import fullLegs from "../assets/fulllegslaser.jpg";
import underarms from "../assets/underarmslaser.jpg";
import bikini from "../assets/Bikiniarealaser.jpg";
import facechinlaser from "../assets/facechinlaser.jpg";

function Services() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const services = [
        // FACIAL
        {
            id: 1,
            name: "Basic Hydra Facial",
            price: 6700,
            discountedPrice: 4000,
            description: "Deep cleansing and hydration treatment for radiant, glowing skin",
            category: "Facial",
            popular: true,
            image: hydra
        },
        {
            id: 2,
            name: "8 Step Hydra Facial",
            price: 11700,
            discountedPrice: 7000,
            description: "Advanced multi-step facial with intense hydration and rejuvenation",
            category: "Facial",
            popular: true,
            image: steps8
        },
        {
            id: 3,
            name: "14 Steps Hydra Facial",
            price: 16700,
            discountedPrice: 10000,
            description: "Complete luxury facial experience with 14 specialized steps for perfect skin",
            category: "Facial",
            popular: true,
            image: steps14
        },
        {
            id: 4,
            name: "Carbon Facial",
            price: 15000,
            discountedPrice: 9000,
            description: "Innovative carbon-based treatment for deep pore cleansing and skin renewal",
            category: "Facial",
            image: carbon
        },
        // AESTHETIC
        {
            id: 5,
            name: "PRP + Microneedling",
            price: 7000,
            discountedPrice: 4200,
            description: "Platelet-rich plasma therapy combined with microneedling for skin regeneration",
            category: "Aesthetic",
            popular: true,
            image: prp
        },
        {
            id: 6,
            name: "Botox",
            price: 20000,
            discountedPrice: 12000,
            description: "Professional anti-aging treatment for smooth, youthful-looking skin",
            category: "Aesthetic",
            popular: true,
            image: botox
        },
        {
            id: 7,
            name: "Lip Fillers",
            price: 14999,
            discountedPrice: 8999,
            description: "Natural-looking lip enhancement for fuller, more defined lips",
            category: "Aesthetic",
            image: lipfillers
        },
        {
            id: 8,
            name: "Mole Removal Treatment",
            price: 8000,
            discountedPrice: 4800,
            description: "Safe and professional mole removal for clear, flawless skin",
            category: "Aesthetic",
            image: mole
        },
        // DRIPS
        {
            id: 9,
            name: "Whitening Drips (1st Session)",
            price: 8000,
            discountedPrice: 4800,
            description: "First session of our signature whitening IV therapy for glowing complexion",
            category: "Drips",
            popular: true,
            image: whitening
        },
        {
            id: 10,
            name: "Whitening Drips (2nd Session)",
            price: 15000,
            discountedPrice: 9000,
            description: "Advanced whitening infusion for enhanced skin brightness and clarity",
            category: "Drips",
            image: whiteningInj
        },
        {
            id: 11,
            name: "Whitening Drips (3rd Session)",
            price: 22000,
            discountedPrice: 13000,
            description: "Complete whitening package for long-lasting, radiant results",
            category: "Drips",
            image: whitening
        },
        // PICOLASER
        {
            id: 12,
            name: "Pico Laser Treatment",
            price: 8000,
            discountedPrice: 4800,
            description: "Advanced laser technology for skin rejuvenation and pigmentation removal",
            category: "PicoLaser",
            popular: true,
            image: picoTreatment
        },
        {
            id: 13,
            name: "Pico Laser (Tattoo Removal)",
            price: 8000,
            discountedPrice: 4800,
            description: "Safe and effective tattoo removal using advanced pico laser technology",
            category: "PicoLaser",
            image: picoLaser
        },
        // LASER HAIR REMOVAL
        {
            id: 14,
            name: "Full Body Laser",
            price: 20000,
            discountedPrice: 12000,
            description: "Complete full-body laser hair removal for smooth, hair-free skin",
            category: "LaserHairRemoval",
            popular: true,
            image: fullLegs
        },
        {
            id: 15,
            name: "Full Arms Laser",
            price: 8000,
            discountedPrice: 4800,
            description: "Professional laser hair removal for smooth, hair-free arms",
            category: "LaserHairRemoval",
            image: fullArms
        },
        {
            id: 16,
            name: "Full Legs Laser",
            price: 10000,
            discountedPrice: 6000,
            description: "Complete laser hair removal for beautifully smooth, silky legs",
            category: "LaserHairRemoval",
            image: fullLegs
        },
        {
            id: 17,
            name: "Face & Chin Laser",
            price: 6000,
            discountedPrice: 3600,
            description: "Precise laser hair removal for face and chin area with gentle care",
            category: "LaserHairRemoval",
            image: facechinlaser
        },
        {
            id: 18,
            name: "Underarms Laser",
            price: 6000,
            discountedPrice: 3600,
            description: "Quick and effective laser hair removal for clean, smooth underarms",
            category: "LaserHairRemoval",
            image: underarms
        },
        {
            id: 19,
            name: "Bikini Area Laser",
            price: 8000,
            discountedPrice: 4800,
            description: "Gentle laser hair removal for bikini area with comfortable experience",
            category: "LaserHairRemoval",
            image: bikini
        },
    ];

    const timeSlots = [
        "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM",
        "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"
    ];

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const days = [];
        for (let i = 1; i <= new Date(year, month + 1, 0).getDate(); i++) {
            days.push(new Date(year, month, i));
        }
        return days;
    };

    const isToday = (date) => {
        const today = new Date();
        return date.toDateString() === today.toDateString();
    };

    const formatDate = (date) => {
        if (!date) return '';
        return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    };

    const handleServiceSelect = (service) => {
        setSelectedService(service);
        setStep(2);
        setShowCalendar(true);
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setStep(3);
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        setStep(4);
    };

    const handleProceed = () => {
        const message = `Hello! I would like to book an appointment for:
        Service: ${selectedService.name}
        Original Price: PKR ${selectedService.price.toLocaleString()}
        Discounted Price: PKR ${selectedService.discountedPrice.toLocaleString()}
        Description: ${selectedService.description}
        Date: ${formatDate(selectedDate)}
        Time: ${selectedTime}
        
        Total Charges: PKR ${selectedService.discountedPrice.toLocaleString()}
        
        Please confirm my booking.`;

        window.open(`https://wa.me/923104604041?text=${encodeURIComponent(message)}`, '_blank');
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
            if (step === 3) setShowCalendar(true);
            if (step === 2) setSelectedService(null);
        }
    };

    const changeMonth = (increment) => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + increment));
    };

    const days = getDaysInMonth(currentMonth);

    const Icons = {
        clock: () => (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        arrow: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" />
            </svg>
        ),
        back: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" />
            </svg>
        ),
        check: () => (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17L4 12" />
            </svg>
        ),
        whatsapp: () => (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" />
                <path d="M16.5 9.5L11 15L8 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
        )
    };

    return (
        <div className="services-booking-page">
            <div className="booking-hero">
                <div className="booking-hero-content">
                    <h1>Select Your <span className="gradient-text-service">Service</span></h1>
                    <p>Choose from our curated collection of luxury treatments</p>
                    <div className="hero-steps">
                        <div className={`step-indicator ${step >= 1 ? 'active' : ''}`}>
                            <div className="step-number">1</div>
                            <div className="step-label">Select</div>
                        </div>
                        <div className="step-line"></div>
                        <div className={`step-indicator ${step >= 2 ? 'active' : ''}`}>
                            <div className="step-number">2</div>
                            <div className="step-label">Date</div>
                        </div>
                        <div className="step-line"></div>
                        <div className={`step-indicator ${step >= 3 ? 'active' : ''}`}>
                            <div className="step-number">3</div>
                            <div className="step-label">Time</div>
                        </div>
                        <div className="step-line"></div>
                        <div className={`step-indicator ${step >= 4 ? 'active' : ''}`}>
                            <div className="step-number">4</div>
                            <div className="step-label">Confirm</div>
                        </div>
                    </div>
                </div>
            </div>

            {step === 1 && (
                <div className="step-container">
                    <div className="services-grid">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="service-card"
                                onClick={() => handleServiceSelect(service)}
                            >
                                <div className="card-image-wrap">
                                    <img src={service.image} alt={service.name} className="card-img" />
                                    {service.popular && <span className="badge-popular">Popular</span>}
                                    <span className="badge-discount">40% OFF</span>
                                </div>
                                <div className="card-content-box">
                                    <h3 className="card-heading">{service.name}</h3>
                                    <p className="card-description">{service.description}</p>
                                    <div className="card-prices">
                                        <span className="price-old">PKR {service.price.toLocaleString()}</span>
                                        <span className="price-new">PKR {service.discountedPrice.toLocaleString()}</span>
                                    </div>
                                    <button
                                        className="card-more-btn"
                                        onClick={(e) => {
                                            e.stopPropagation(); // Card ke click ko rokta hai
                                            handleServiceSelect(service); // ← YAHAN CHANGE KIYA
                                        }}
                                    >
                                        Book Now →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {step === 2 && showCalendar && (
                <div className="step-container">
                    <button className="back-btn" onClick={handleBack}>
                        <Icons.back /> Back
                    </button>
                    <div className="step-header">
                        <h2>Select Date</h2>
                        <p>Choose a date for your appointment</p>
                    </div>

                    <div className="calendar-container">
                        <div className="calendar-header">
                            <button onClick={() => changeMonth(-1)} className="month-nav">
                                <Icons.back />
                            </button>
                            <h3>{currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h3>
                            <button onClick={() => changeMonth(1)} className="month-nav">
                                <Icons.arrow />
                            </button>
                        </div>
                        <div className="calendar-weekdays">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                <div key={day} className="weekday">{day}</div>
                            ))}
                        </div>
                        <div className="calendar-days">
                            {days.map((date, index) => {
                                const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
                                const isSelected = selectedDate?.toDateString() === date.toDateString();
                                return (
                                    <button
                                        key={index}
                                        className={`calendar-day ${isPast ? 'past' : ''} ${isSelected ? 'selected' : ''} ${isToday(date) ? 'today' : ''}`}
                                        onClick={() => !isPast && handleDateSelect(date)}
                                        disabled={isPast}
                                    >
                                        {date.getDate()}
                                        {isSelected && <Icons.check />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="step-container">
                    <button className="back-btn" onClick={handleBack}>
                        <Icons.back /> Back
                    </button>
                    <div className="step-header">
                        <h2>Select Time</h2>
                        <p>Choose a time slot for {formatDate(selectedDate)}</p>
                    </div>

                    <div className="time-slots">
                        {timeSlots.map((time) => (
                            <button
                                key={time}
                                className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                                onClick={() => handleTimeSelect(time)}
                            >
                                <Icons.clock />
                                {time}
                                {selectedTime === time && <Icons.check />}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {step === 4 && (
                <div className="step-container">
                    <button className="back-btn" onClick={handleBack}>
                        <Icons.back /> Back
                    </button>
                    <div className="confirmation-container">
                        <div className="confirmation-card">
                            <div className="confirmation-header">
                                <h2>Confirm Booking</h2>
                                <p>Review your appointment details</p>
                            </div>

                            <div className="booking-details">
                                <div className="detail-item">
                                    <span className="detail-label">Service</span>
                                    <span className="detail-value">{selectedService?.name}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Description</span>
                                    <span className="detail-value">{selectedService?.description}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Date</span>
                                    <span className="detail-value">{formatDate(selectedDate)}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Time</span>
                                    <span className="detail-value">{selectedTime}</span>
                                </div>
                            </div>

                            <div className="price-breakdown">
                                <div className="price-row">
                                    <span>Original Price</span>
                                    <span className="price-strikethrough">PKR {selectedService?.price.toLocaleString()}</span>
                                </div>
                                <div className="price-row discount-row">
                                    <span>Discount</span>
                                    <span>- PKR {Math.ceil(selectedService?.price * 0.4).toLocaleString()}</span>
                                </div>
                                <div className="price-row total">
                                    <span>Total</span>
                                    <span>PKR {selectedService?.discountedPrice.toLocaleString()}</span>
                                </div>
                            </div>

                            <button className="proceed-btn" onClick={handleProceed}>
                                <Icons.whatsapp /> Proceed to WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Services;