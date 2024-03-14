import WhatsappButton from "../../Component/Button/WhatsappButton"
import "./ProductInfo.css"
import { useTranslation } from 'react-i18next'

const ProductDetailInfo: React.FC<Props> = ({ items }) => {
    const [t, i18n] = useTranslation("global");

    return (
        <div className="product-detail-info">
            <div className="product-detail-title">{ `${items.name}` }</div>
            <div className="product-hscode">{ `${items.hscode}` }</div>
            <div className="product-image">
                <WhatsappButton />
            </div>
            <div className="product-subtitle">{t("detail.variant")}</div>
            <div className="product-varian">
                {
                    items.varian.map((data) => {
                        return (
                            <div className="product-varian-title">{ `${data}` }</div>
                        )
                    })
                }
            </div>
            <div className="product-min-order">Minimum order quality is { `${items.min_order}` }</div>
            <div className="product-subtitle">detail</div>
            {
                items.detail.map((data: any) => {
                    if(i18n.language == "id") {
                        return (
                            <div className="product-detail-list">
                                <div className="product-detail-list-name">{ `${data.key_id}` }</div>
                                <div className="product-detail-list-value">{ `${data.value_id}` }</div>
                            </div>
                        )
                    } else {
                        return (
                            <div className="product-detail-list">
                                <div className="product-detail-list-name">{ `${data.key_en}` }</div>
                                <div className="product-detail-list-value">{ `${data.value_en}` }</div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default ProductDetailInfo