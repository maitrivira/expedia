import React from 'react';
import whatsapp from '/assets/image/brand/whatsapp.png'
import "./WhatsappButton.css"
import { useTranslation } from 'react-i18next'

const WhatsappButton = ({ style }: { style?: React.CSSProperties }) => {
    const [t] = useTranslation("global");

    return (
        <a href="https://wa.me/628118891797" target="_blank" rel="noopener noreferrer">
            <button className='whatsapp-button' style={style}>
                <img src={ whatsapp } alt="whatsapp" />
                <span className="whatsapp-text">{t("header.order-button")}</span>
            </button>
        </a> 
    )
}

export default WhatsappButton