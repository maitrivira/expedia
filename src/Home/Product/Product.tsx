import { useState } from "react";
import { NavLink } from "react-router-dom"
import './Product.css'
import { useTranslation } from 'react-i18next'
import Datas from '../../Data/data.json'

const Product = () => {
    const [indexMenu, setIndexMenu] = useState(null);
    const [t] = useTranslation("global");
    const hideInfoFull = (index: any) => {
        setIndexMenu(index)
    };
    const resetIndexMenu = () => {
        setIndexMenu(null)
    }

    return (
        <div className="product">
            <div className='product-title'>{t("products.our-products")}</div>
            <div className='product-container'>
                {
                    Datas.map((data, index) => {
                        return (
                            <div className='product-menu'>
                                <img src={`${data.productL0.image}`} alt={`${data.productL0.name}`} />
                                <div className='product-menu-info-full'>
                                    {
                                        indexMenu == index ? "" : <span className='product-menu-title-full'>{t(`${data.productL0.code_lang}`)}</span>
                                    }
                                </div>

                                <div className='product-menu-info' onMouseEnter={() => hideInfoFull(index)} onMouseLeave={() => resetIndexMenu()}>
                                    <span className='product-menu-title'>{t(`${data.productL0.code_lang}`)}</span>
                                    <NavLink to={ `/products#${data.productL0.name}` }><button className='product-menu-button'>Detail &#8594;</button></NavLink>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Product