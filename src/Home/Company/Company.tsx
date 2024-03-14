import arrowDown from "/assets/image/others/arrow-down.png"
import like from "/assets/image/value/like-shapes.png"
import message from "/assets/image/value/message-circle.png"
import verify from "/assets/image/value/verify.png"
import "./Company.css"
import { useTranslation } from 'react-i18next'
import { NavLink } from "react-router-dom"

const Company = () => {
    const [t] = useTranslation("global");

    let companyValue = [
        {
            "value": t("company-rating.quality-assurance"),
            "image": verify
        },
        {
            "value": t("company-rating.customer-satisfaction"),
            "image": like
        },
        {
            "value": t("company-rating.integrity"),
            "image": message
        }
    ]

    return (
        <div className="company" id="company">
            <a href="#company"><img src={ arrowDown } alt="arrow down" className="arrow-down" /></a>
            <div className="company-primary">
                <span className="company-primary-title">{t("company-greeting.company-welcome")}</span>
                <span className="company-primary-sub">{t("company-greeting.company-title-we")}<span className="company-primary-sub-black">{t("company-greeting.company-title-quality")}</span> 
                    {t("company-greeting.company-title-parner")}
                </span>
            </div>
            <div className="company-value">
                { companyValue.map((data) => (
                    <div className="company-value-item">
                        <img src={ data.image } alt="arrow down" className="company-value-image" />
                        <span className="company-value-sub">{data.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Company