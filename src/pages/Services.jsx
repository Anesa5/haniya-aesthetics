import { useState, useEffect } from 'react';
import './Services.css';

function Services() {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const services = [
        { id: 1, name: "Royal Brow Signature", price: 2500, duration: "45 min", category: "Eyebrow", popular: true },
        { id: 2, name: "Threading Elegance", price: 500, duration: "15 min", category: "Eyebrow" },
        { id: 3, name: "Brow Lamination", price: 3500, duration: "60 min", category: "Eyebrow", popular: true },
        { id: 4, name: "Signature Hair Ritual", price: 3500, duration: "90 min", category: "Hair", popular: true },
        { id: 5, name: "Celebrity Blow Dry", price: 2000, duration: "45 min", category: "Hair" },
        { id: 6, name: "Braided Perfection", price: 2500, duration: "60 min", category: "Hair" },
        { id: 7, name: "Luxury Hair Color", price: 5000, duration: "120 min", category: "Hair", popular: true },
        { id: 8, name: "Parisian Manicure", price: 1500, duration: "45 min", category: "Nails", popular: true },
        { id: 9, name: "Royal Pedicure", price: 2000, duration: "60 min", category: "Nails" },
        { id: 10, name: "Nail Art Masterpiece", price: 2500, duration: "75 min", category: "Nails" },
        { id: 11, name: "Glass Skin Facial", price: 4500, duration: "90 min", category: "Skin", popular: true },
        { id: 12, name: "Acne Rescue Treatment", price: 4000, duration: "60 min", category: "Skin" },
        { id: 13, name: "Anti-Aging Renaissance", price: 6000, duration: "90 min", category: "Skin", popular: true },
        { id: 14, name: "Bali Massage Ritual", price: 4500, duration: "90 min", category: "Massage", popular: true },
        { id: 15, name: "Hot Stone Therapy", price: 5500, duration: "90 min", category: "Massage" },
        { id: 16, name: "Aromatherapy Escape", price: 4000, duration: "60 min", category: "Massage" },
        { id: 17, name: "Bridal Transformation", price: 35000, duration: "5 hours", category: "Bridal", popular: true },
        { id: 18, name: "Engagement Glam", price: 20000, duration: "3 hours", category: "Bridal" },
        { id: 19, name: "Brazilian Wax", price: 2500, duration: "30 min", category: "Waxing", popular: true },
        { id: 20, name: "Full Body Wax", price: 5000, duration: "90 min", category: "Waxing" },
        { id: 21, name: "Party Makeup", price: 7000, duration: "60 min", category: "Makeup", popular: true },
        { id: 22, name: "HD Makeup", price: 10000, duration: "90 min", category: "Makeup" }
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
        📍 Service: ${selectedService.name}
        💰 Price: PKR ${selectedService.price.toLocaleString()}
        ⏱ Duration: ${selectedService.duration}
        📅 Date: ${formatDate(selectedDate)}
        ⏰ Time: ${selectedTime}
        
        Total Charges: PKR ${selectedService.price.toLocaleString()}
        
        Please confirm my booking.`;

        window.open(`https://wa.me/923374768957?text=${encodeURIComponent(message)}`, '_blank');
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

    // Aesthetic Icons
    const Icons = {
        calendar: () => (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1.5" />
                <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5" />
                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="15" r="1.5" fill="currentColor" />
                <circle cx="16" cy="15" r="1.5" fill="currentColor" />
                <circle cx="8" cy="15" r="1.5" fill="currentColor" />
            </svg>
        ),
        clock: () => (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
        ),
        arrow: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        back: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        popular: () => (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1" />
            </svg>
        ),
        whatsapp: () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#25D366" />
                <path d="M16.5 9.5L11 15L8 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        check: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    };

    return (
        <div className="services-booking-page">
            {/* Hero Section */}
            <div className="booking-hero">
                <div className="booking-hero-content">
                    <h1>Select Your <span className="gradient-text">Service</span></h1>
                    <p>Choose from our curated collection of luxury treatments</p>
                    <div className="hero-steps">
                        <div className={`step-indicator ${step >= 1 ? 'active' : ''}`}>
                            <div className="step-number">1</div>
                            <div className="step-label">Select Service</div>
                        </div>
                        <div className="step-line"></div>
                        <div className={`step-indicator ${step >= 2 ? 'active' : ''}`}>
                            <div className="step-number">2</div>
                            <div className="step-label">Choose Date</div>
                        </div>
                        <div className="step-line"></div>
                        <div className={`step-indicator ${step >= 3 ? 'active' : ''}`}>
                            <div className="step-number">3</div>
                            <div className="step-label">Pick Time</div>
                        </div>
                        <div className="step-line"></div>
                        <div className={`step-indicator ${step >= 4 ? 'active' : ''}`}>
                            <div className="step-number">4</div>
                            <div className="step-label">Confirm</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Step 1: Service Selection */}
            {step === 1 && (
                <div className="step-container">
                    <div className="step-header">
                        <h2>Choose Your Treatment</h2>
                        <p>Select the service you'd like to book</p>
                    </div>
                    <div className="services-list">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="service-select-card"
                                onClick={() => handleServiceSelect(service)}
                            >
                                <div className="service-select-info">
                                    <div className="service-select-name">
                                        {service.name}
                                        {service.popular && (
                                            <span className="popular-badge">
                                                <Icons.popular /> Popular
                                            </span>
                                        )}
                                    </div>
                                    <div className="service-select-duration">
                                        <Icons.clock /> {service.duration}
                                    </div>
                                </div>
                                <div className="service-select-price">
                                    PKR {service.price.toLocaleString()}
                                    <span className="select-arrow">
                                        <Icons.arrow />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Step 2: Date Selection */}
            {step === 2 && showCalendar && (
                <div className="step-container">
                    <button className="back-btn" onClick={handleBack}>
                        <Icons.back /> Back to Services
                    </button>
                    <div className="step-header">
                        <h2>Select Your Preferred Date</h2>
                        <p>Choose a date for your {selectedService?.name}</p>
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

            {/* Step 3: Time Selection */}
            {step === 3 && (
                <div className="step-container">
                    <button className="back-btn" onClick={handleBack}>
                        <Icons.back /> Back to Date
                    </button>
                    <div className="step-header">
                        <h2>Select Your Preferred Time</h2>
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

            {/* Step 4: Confirmation & Price Calculation */}
            {step === 4 && (
                <div className="step-container">
                    <button className="back-btn" onClick={handleBack}>
                        <Icons.back /> Back to Time
                    </button>
                    <div className="confirmation-container">
                        <div className="confirmation-card">
                            <div className="confirmation-header">
                                <div className="confirmation-icon">✨</div>
                                <h2>Review Your Booking</h2>
                                <p>Please confirm your appointment details</p>
                            </div>

                            <div className="booking-details">
                                <div className="detail-item">
                                    <div className="detail-label">
                                        <Icons.calendar /> Service
                                    </div>
                                    <div className="detail-value">{selectedService?.name}</div>
                                </div>
                                <div className="detail-item">
                                    <div className="detail-label">
                                        <Icons.clock /> Duration
                                    </div>
                                    <div className="detail-value">{selectedService?.duration}</div>
                                </div>
                                <div className="detail-item">
                                    <div className="detail-label">
                                        <Icons.calendar /> Date
                                    </div>
                                    <div className="detail-value">{formatDate(selectedDate)}</div>
                                </div>
                                <div className="detail-item">
                                    <div className="detail-label">
                                        <Icons.clock /> Time
                                    </div>
                                    <div className="detail-value">{selectedTime}</div>
                                </div>
                            </div>

                            <div className="price-breakdown">
                                <div className="price-row">
                                    <span>Service Charges</span>
                                    <span>PKR {selectedService?.price.toLocaleString()}</span>
                                </div>
                                <div className="price-row">
                                    <span>Tax (5%)</span>
                                    <span>PKR {Math.ceil(selectedService?.price * 0.05).toLocaleString()}</span>
                                </div>
                                <div className="price-row total">
                                    <span>Total Charges</span>
                                    <span>PKR {Math.ceil(selectedService?.price * 1.05).toLocaleString()}</span>
                                </div>
                            </div>

                            <button className="proceed-btn" onClick={handleProceed}>
                                Proceed to WhatsApp <Icons.arrow />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating WhatsApp */}

        </div>
    );
}

export default Services;