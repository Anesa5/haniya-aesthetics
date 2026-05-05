import './WhatsAppButton.css';

function WhatsAppButton() {
    const handleWhatsApp = () => {
        window.open('https://wa.me/923374768957?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment%20at%20your%20beauty%20salon.%20Can%20you%20please%20provide%20more%20information%3F', '_blank');
    };

    return (
        <button className="whatsapp-float" onClick={handleWhatsApp}>
            <span className="whatsapp-text">Chat with us</span>
        </button>
    );
}

export default WhatsAppButton;