import ProductDetailInfo from "./ProductDetailInfo"
import ProductImage from "./ProductImage"
import ProductImageSlider from "./ProductImageSlider"
import "./ProductInfo.css"

const ProductInfo: React.FC<Props> = ({ items }) => {
    return (
        <div>
            <div className="display-content-small-screen">
                <ProductImageSlider sliders={items.detail_image}/>
            </div>
            <div className="product-info">
                <ProductImage slider={items.detail_image}/>
                <ProductDetailInfo items={items}/>
            </div>
        </div>
    )
}

export default ProductInfo