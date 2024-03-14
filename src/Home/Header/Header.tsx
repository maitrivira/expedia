import WhatsappButton from '../../Component/Button/WhatsappButton'
import Navbar from '../../Component/Navbar/Navbar'
import './Header.css'
import { useTranslation } from 'react-i18next'

const Header = () => {
    const [t] = useTranslation("global");

    return (
        <div className="header">
            <Navbar/>

            <div className='text-box'>
                <h1 className='heading-primary'>
                    <span className='heading-primary-main'>{t("header.title")}</span>
                </h1>
                <WhatsappButton style={{ margin: '0 auto'}}/>
            </div>
        </div>
    )
}

export default Header