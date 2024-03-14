import "./ProductInfo.css"

const ProductImageSlider = ({ sliders }: {sliders:any}) => {

    return (
        <div>
            <div className="container-image">
                <div className="slider-wrapper">
                    <div className="slider">
                        {
                            sliders.map( (data: any) => {
                                return (
                                    <img key={data.id} src={data.image} className="product-image-large"/>
                                )
                            })
                        }
                    </div>
                    {/* <div className="slider-nav">
                        {
                            sliders.map( (_: any) => {
                                return (
                                    <a href="#slider-1"></a>
                                )
                            })
                        }
                    </div> */}
                </div>
            </div>
        </div>
        
    )
}

export default ProductImageSlider