import "./Breadcrums.css"
import chevron from '/assets/image/others/chevron_right.jpg'
import { useTranslation } from 'react-i18next'

interface Props {
    product: string;
    subProduct: string;
}

const Breadcrums: React.FC<Props> = ({ product, subProduct }) => {
    const [t] = useTranslation("global");
    return (
        <div className="breadcrums">{t("navbar.product")} <img src={ chevron } alt="chevron" className="chevron"/> {product} <img src={ chevron } alt="chevron" className="chevron"/><span className="breadcrums-subproduct">{subProduct}</span></div>
    )
}

export default Breadcrums