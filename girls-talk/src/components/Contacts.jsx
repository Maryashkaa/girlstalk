import React, { useState } from "react";
import "./AboutUs.css"; 

export function Contacts() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="onas-pae">
            <h1>Для связи с нами:</h1>
            <p className="phone-number" onClick={togglePopup}>
                +7 999 595 19 30
            </p>

            {showPopup && (
                <div className="popup">
                    <a href="tel:+79995951930" className="popup-link">Позвонить</a>
                    <a
                        href="https://t.me/maryashkiinss"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="popup-link"
                    >
                        Перейти в Telegram
                    </a>
                    <button onClick={closePopup} className="popup-close">
                        Закрыть
                    </button>
                </div>
            )}
        </div>
    );
}
