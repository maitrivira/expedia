import WhatsappButton from "../Button/WhatsappButton"
import footerIcon from "/assets/image/others/footer-icon.png"
import indo from "/assets/image/others/indonesia.png"
import eng from "/assets/image/others/united-kingdom.png"
import "./Footer.css"
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import Datas from "../../Data/data.json"
import { NavLink } from "react-router-dom"

const Footer = () => {
    const [isEnglish, setIsEnglish] = useState(true);
    const [t, i18n] = useTranslation("global");
    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setIsEnglish(!isEnglish)
    }

    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <img src={ footerIcon } alt="footer icon" className="footer-icon" />
                    <div className="footer-brand-title">
                        {t("footer.title")} 
                        <div>
                            <WhatsappButton style={{marginTop: "40px"}}/>
                        </div>
                    </div>
                </div>
                <div className="footer-product-category">
                    <div className="footer-product-title">{t("footer.product")}</div>
                    { Datas.map( data => {
                        return (
                            <NavLink to={ `/products#${data.productL0.name}` }>
                                <div className="footer-product-subtitle">{t(`${data.productL0.code_lang}`)}</div>
                            </NavLink>
                        )
                    })}
                </div>
                <div className="footer-company">
                    <div className="footer-product-title">{t("footer.about-us")}</div>
                    <NavLink to={ `/about` }><div className="footer-product-subtitle">{t("footer.about-us2")}</div></NavLink>
                    <div className="footer-product-subtitle">{t("footer.catalog")}</div>
                </div>
            </div>
            <div className="line"></div>
            <div className="footer-bottom disable-large-screen">
                <div className="footer-bottom-first">
                    <span className="footer-bottom-text-left">&copy; 2024 PT. Expedia Indonesia Group</span>
                    <span className="footer-bottom-text-left disable" style={{ color: "white", display: "block" }}>|</span>
                    <span className="footer-bottom-text-left disable" style={{ color: "white", display: "block" }}>|</span>
                    <button className="footer-bottom-text-left" onClick={() => handleChangeLanguage(isEnglish ? "en" : "id")}>
                        <div className="footer-bottom-image-left">
                            {
                                isEnglish ? 
                                <img src={ eng } alt="english" className="flag" /> 
                                :
                                <img src={ indo } alt="indo" className="flag" />
                            }
                        </div>
                        <span>{isEnglish ? "English" : "Indonesia"}</span>
                    </button>
                </div>
                <div className="footer-bottom-second">
                    <span className="footer-bottom-text-right footer-bottom-text-right-italic">Alam Sutera Jl. Jalur Sutera Boulevard No. 45 Kunciran</span>
                    <span className="footer-bottom-text-right footer-bottom-text-right-italic">Kec. Pinang Kota Tanggerang, Banten 15320</span>
                    <span className="footer-bottom-text-right">+62 8118891797</span>
                    <span className="footer-bottom-text-right footer-bottom-text-right-underline">frans.simanjuntak@expediaig.com</span>
                </div>
            </div>
            <div className="footer-bottom disable-small-screen">
                <div className="footer-bottom-second">
                    <span className="footer-bottom-text-right" style={{marginBottom: "12px"}}>+62 8118891797</span>
                    <span className="footer-bottom-text-right footer-bottom-text-right-underline" style={{marginBottom: "12px"}}>frans.simanjuntak@expediaig.com</span>
                    <span className="footer-bottom-text-right footer-bottom-text-right-italic">Alam Sutera Jl. Jalur Sutera Boulevard No. 45 Kunciran</span>
                    <span className="footer-bottom-text-right footer-bottom-text-right-italic">Kec. Pinang Kota Tanggerang, Banten 15320</span>
                </div>
                <div className="footer-bottom-first">
                    <button className="footer-bottom-text-left" onClick={() => handleChangeLanguage(isEnglish ? "en" : "id")}>
                        <div className="footer-bottom-image-left">
                            {
                                isEnglish ? 
                                <img src={ eng } alt="english" className="flag" /> 
                                :
                                <img src={ indo } alt="indo" className="flag" />
                            }
                        </div>
                        <span>{isEnglish ? "English" : "Indonesia"}</span>
                    </button>
                    <span className="footer-bottom-text-left disable" style={{ color: "white" }}>|</span>
                    <span className="footer-bottom-text-left disable" style={{ color: "white" }}>|</span>
                    <span className="footer-bottom-text-right">&copy; 2024 PT. Expedia Indonesia Group</span>
                </div>
                
            </div>
        </div>
    )
}

export default Footer