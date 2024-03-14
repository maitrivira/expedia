import './Founded.css'
import { useTranslation } from 'react-i18next'

const Founded = () => {
    const [t] = useTranslation("global");

    return (
        <div className='founded'>
            <div className='founded-text'>
                <span className='fonded-text-title'>{t("aboutus.title")}</span>
                <span className='fonded-text-subtitle'>
                    {t("aboutus.subtitle")}
                </span>
            </div>
        </div>
    )
}

export default Founded