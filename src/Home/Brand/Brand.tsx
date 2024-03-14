import './Brand.css'
import kementrian from "/assets/image/brand/kementrian.png"
import inae from "/assets/image/brand/inae.png"
import exim from "/assets/image/brand/exim.png"
import apec from "/assets/image/brand/apec.png"

let brandImage = [
    kementrian,
    inae,
    exim,
    apec
]

const Brand = () => {
    return (
        <div className='brand'>
            { brandImage.map((data) => (
                <img src={ `${data}` } alt={data} className="brand-image" />
            ))}
        </div>
    )
}

export default Brand