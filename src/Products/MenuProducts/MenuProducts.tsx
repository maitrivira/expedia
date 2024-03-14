import "./MenuProducts.css"
import { useTranslation } from 'react-i18next'
import Datas from "../../Data/data.json"
import { NavLink } from "react-router-dom"

const MenuProducts = () => {
    const [t] = useTranslation("global");

    return (
        <div className="menu-products">
            {
                Datas.map((data) => {
                    if (data.productL0.is_coming_soon == false) {
                        if (data.productL0.show_sub_category == true) {
                            return (
                                <div> 
                                {
                                    data.productL0.data_sub_categories instanceof Array ? (
                                        data.productL0.data_sub_categories.map((datasub:any) => {
                                            return (
                                                <div>
                                                    <div className="menu-products-title" id={ `${data.productL0.name}` }>{data.productL0.name} {datasub}</div>
                                                    <div className="menu-products-container">
                                                        {
                                                            data.productL0.productL1.filter( product => product.data_sub_category == datasub).map( filteredData => {
                                                                return (
                                                                    <div className="menu-products-card">
                                                                        <NavLink to={ `/detail/${filteredData.id}` }>
                                                                            <img src={`${filteredData.image}`} alt={filteredData.name} />
                                                                            <div className="menu-products-subtitle">{filteredData.name}</div>
                                                                            <div className="menu-products-code">{filteredData.hscode}</div>
                                                                            <div className="menu-products-container-mobile">
                                                                                {
                                                                                    filteredData.varian instanceof Array ? (
                                                                                        filteredData.varian.map((varian) => <div className="menu-products-pack">{varian}</div>)
                                                                                    ) : (
                                                                                        <div></div>
                                                                                    )
                                                                                }
                                                                            </div>
                                                                        </NavLink>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <div>error load sub categories</div>
                                    )
                                }
                                </div>
                            )
                        }
                        return (
                            <div>
                                <div className="menu-products-title" id={ `${data.productL0.name}` }>{t(`${data.productL0.code_lang}`)}</div>
                                <div className="menu-products-container">
                                    {
                                        data.productL0.productL1.map( data => {
                                            return (
                                                <div className="menu-products-card">
                                                    <NavLink to={ `/detail/${data.id}` }>
                                                        <img src={`${data.image}`} alt={data.name} />
                                                        <div className="menu-products-subtitle">{data.name}</div>
                                                        <div className="menu-products-code">{data.hscode}</div>
                                                        <div className="menu-products-container-mobile">
                                                            {
                                                                data.varian instanceof Array ? (
                                                                    data.varian.map((varian) => <div className="menu-products-pack">{varian}</div>)
                                                                ) : (
                                                                    <div></div>
                                                                )
                                                            }
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default MenuProducts