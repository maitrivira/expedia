import { useEffect } from "react"
import { useParams } from 'react-router-dom';
import WhatsappButton from "../Component/Button/WhatsappButton"
import Footer from "../Component/Footer/Footer"
import Navbar from "../Component/Navbar/Navbar"
import Breadcrums from "./Breadcrums/Breadcrums"
import Descriptions from "./Descriptions/Descriptions"
import "./ProductDetail.css"
import ProductInfo from "./ProductInfo/ProductInfo"
import ProductsOthers from "./ProductsOthers/ProductsOthers"
import Datas from "../Data/data.json"

const ProductDetail = () => {
    const { id } = useParams();
    const data = Datas.filter(data => data.productL0.productL1.find((product) => product.id == Number(id) ))
    const product = data.map((product) => product.productL0.productL1.filter( data => data.id == Number(id)))
    const otherItem = data.slice(0, 5).map((product) => product.productL0.productL1.filter(data => data.id != Number(id)))
    const product_name = product[0][0].product_name
    const otherProductData = Datas.slice(0, 5).filter(data => data.productL0.name != product_name)
    const otherProduct = otherProductData.map(product => product.productL0.productL1)
    const mergeOtherProduct = otherProduct[0].concat(otherProduct[1]).slice(0,5)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="bg-small">
            {
                product.map((data) => {
                    return (
                        <div>
                            {
                                data.map((dt) => {
                                    return (
                                        <div>
                                            <Navbar from={3}/>
                                            <div className="display-none">
                                                <Breadcrums product={ `${dt.product_name}` } subProduct={ `${dt.name}` }/>
                                            </div>
                                            <ProductInfo items={dt}/>
                                            <Descriptions product_name={dt.name} desc_id={dt.product_desc[0].desc_id} desc_en={dt.product_desc[0].desc_en} story_id={dt.product_story[0].story_id} story_en={dt.product_story[0].story_en} />
                                            <ProductsOthers name={dt.product_name} dataOtherItem={otherItem[0]} dataOtherProduct={mergeOtherProduct}/>
                                            <div className="display-none">
                                                <Footer />
                                            </div>
                                            <div className="footed-small-screen">
                                                <div style={{padding: "16px"}}>
                                                    <WhatsappButton style={{width: "100%"}}/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductDetail