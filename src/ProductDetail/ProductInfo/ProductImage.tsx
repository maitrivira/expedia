import "./ProductInfo.css"
import { useState } from "react"

const ProductImage = ({ slider }: {slider:any}) => {
    const [sliderData, setSliderData] = useState(slider[0])
    const handleClick = (index: number) => {
        const sliders = slider[index]
        setSliderData(sliders)
    }

    return (
        <div className="product-image">
            <img src={sliderData.image} className="product-image-big"/>
            <div className="flex-grow">
                {
                    slider.map( (data: any, i: number) => {
                        return (
                            <img key={data.id} src={data.image} onClick={()=>handleClick(i)} className="product-image-small"/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductImage