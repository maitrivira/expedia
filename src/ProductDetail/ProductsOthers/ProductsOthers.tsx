import "./ProductsOthers.css"
import "../../Products/Products.css"
import "../../Products/MenuProducts/MenuProducts.css"
import { useTranslation } from 'react-i18next'
import { NavLink } from "react-router-dom"

const ProductsOthers = ({name, dataOtherItem, dataOtherProduct}: {name:string, dataOtherItem:any, dataOtherProduct:any}) => {
    const [t, i18n] = useTranslation("global");

    const reloadPage = () => {
        window.scrollTo(0, 0)
    }

    const constructDataOtherItem = () => {
        if (dataOtherItem.length != 0) {
            return (
                <div className="product-items">
                    {/* ITEM OTHER */}
                    {
                        i18n.language == "id" ? <div className="product-others-title">{name} {t("detail.other")}</div> : <div className="product-others-title">{t("detail.other")} {name}</div>
                    }
                    <div className="scrollable-tabs-container">
                        {/* <div className="left-arrow">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                            </svg>
                        </div> */}
                        <ul>
                            {
                                dataOtherItem.map((data: any) => {
                                    return (
                                        <NavLink to={ `/detail/${data.id}` } onClick={() => reloadPage()}>
                                            <li>
                                                <div className="product-items-container">
                                                    <div>
                                                        <img src={data.detail_image[0].image} alt={ `${data.name} `} />
                                                        <div className="menu-products-subtitle">{data.name}</div>
                                                        <div className="menu-products-code">{data.hscode}</div>
                                                        <div className="product-items-container">
                                                        {
                                                            data.varian instanceof Array ? (
                                                                data.varian.map((varian: string) => <div className="menu-products-pack">{varian}</div>)
                                                            ) : (
                                                                <div>error load varian</div>
                                                            )
                                                        }
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </NavLink>
                                    )
                                })
                            }
                        </ul>
                        {/* <div className="right-arrow">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </div> */}
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="product-others">
            {/* PRODUCT OTHER WEB */}
            {constructDataOtherItem()}
            
            <div className="product-items product-items-small-hidden">
                {
                    i18n.language == "id" ? <div className="product-others-title">{t("navbar.product")} {t("detail.other")}</div> : <div className="product-others-title">{t("detail.other")} {t("navbar.product")}</div>
                }
                <div className="scrollable-tabs-container">
                    {/* <div className="left-arrow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path 
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    </div> */}
                    <ul>
                        {
                            dataOtherProduct.map((data: any) => {
                                return (
                                    <NavLink to={ `/detail/${data.id}` } onClick={() => reloadPage()}>
                                        <li>
                                            <div className="product-items-container">
                                                <div>
                                                    <img src={data.detail_image[0].image} alt={ `${data.name} `} />
                                                    <div className="menu-products-subtitle">{data.name}</div>
                                                    <div className="menu-products-code">{data.hscode}</div>
                                                    <div className="product-items-container">
                                                    {
                                                        data.varian instanceof Array ? (
                                                            data.varian.map((varian: string) => <div className="menu-products-pack">{varian}</div>)
                                                        ) : (
                                                            <div>error load varian</div>
                                                        )
                                                    }
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </NavLink>
                                )
                            })
                        }
                    </ul>
                    {/* <div className="right-arrow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path 
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </div> */}
                </div>
            </div>

            {/* PRODUCT OTHER MOBILE */}
            <div className="product-items-hidden">
                {
                    i18n.language == "id" ? <div className="product-others-title">{t("navbar.product")} {t("detail.other")}</div> : <div className="product-others-title">{t("detail.other")} {t("navbar.product")}</div>
                }
                <div className="menu-products-container-mobile">
                    {
                        dataOtherProduct.map((data: any) => {
                            return (
                                <div className="menu-products-card">
                                    <NavLink to={ `/detail/${data.id}` } onClick={() => reloadPage()}>
                                            <img src={data.detail_image[0].image} alt={ `${data.name} `} />
                                            <div className="menu-products-subtitle">{data.name}</div>
                                            <div className="menu-products-code">{data.hscode}</div>
                                            <div className="product-items-container">
                                                {
                                                    data.varian instanceof Array ? (
                                                        data.varian.map((varian: string) => <div className="menu-products-pack">{varian}</div>)
                                                    ) : (
                                                        <div>error load varian</div>
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
        </div>
    )
}

export default ProductsOthers