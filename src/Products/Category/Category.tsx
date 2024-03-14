import "./Category.css"
import Datas from "../../Data/data.json"
import { useTranslation } from 'react-i18next'

const Category = () => {
    const [t] = useTranslation("global");
    
    return (
        <div className="category">
            <div className="category-title1">{t("navbar.category")}</div>
            {
                Datas.map( data => {
                    return (
                        <div>
                            {
                                data.productL0.is_coming_soon == true ? 
                                <div className="category-coming-soon">{data.productL0.name}
                                    <span className="category-coming-soon-icon">COMING SOON</span>
                                </div>
                                : 
                                <a href={`#${data.productL0.name}`}><div className="category-title2">{t(`${data.productL0.code_lang}`)}</div></a>
                            }
                            <div>
                                {
                                    data.productL0.show_sub_category == true ? 
                                    <div>
                                        {
                                            data.productL0.data_sub_categories instanceof Array ? (
                                                data.productL0.data_sub_categories.map((item: any) => <a href={`#${data.productL0.name}`}><div className="category-subtitle">{item}</div></a>)
                                            ) : (
                                                <div>error load sub categories</div>
                                            )
                                        }
                                    </div> : <div></div>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Category