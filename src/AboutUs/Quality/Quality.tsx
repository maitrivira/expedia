import './Quality.css'
import { useTranslation } from 'react-i18next'

const Quality = () => {
    const [t] = useTranslation("global");

    return (
        <div className='quality'>
            <div className='quality-info-one'>
                <div className='quality-info-image-one'>
                    
                </div>
                <div className='quality-info-text-one'>
                    <span className='quality-info-text-one-title'>{t("aboutus.quality-title")}</span>
                    <span className='quality-info-text-one-subtitle'>{t("aboutus.quality-subtitle")}</span>
                </div>
                <div className='quality-info-image-two'>

                </div>
            </div>
            <div className='quality-info-two'>
                <div style={{height: "100%"}}>
                    <span style={{padding: "16px"}} className='quality-info-text-two'>
                        {t("aboutus.quality-subtitle2")}
                    </span>
                </div>
                {/* <div className='quality-info-text-two'>
                    Handpicked by our trusted farmers themselves, we pride ourselves in top quality fruits, herbs, and other natural commodities to provide you an opportunity of a rare, authentic taste of Indonesia.
                </div> */}
            </div>
        </div>
    )
}

export default Quality