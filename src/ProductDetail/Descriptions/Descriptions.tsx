import "./Descriptions.css"
import { useTranslation } from 'react-i18next'

const Descriptions = ({product_name = "", desc_id = "", desc_en = "", story_id = "", story_en = "" }) => {
    const [t, i18n] = useTranslation("global");

    return (
        <div className="descriptions">
            <div className="descriptions-story1">
                <div className="desc-title">{t("detail.description")}</div>
                <p>{i18n.language == "id" ? desc_id : desc_en}</p>
            </div>
            <div className="descriptions-story2">
                <div className="desc-title">{t("detail.story")} {product_name}</div>
                <p>{i18n.language == "id" ? story_id : story_en}</p>
            </div>
        </div>
    )
}

export default Descriptions