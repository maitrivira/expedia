import { useEffect } from "react"
import Footer from '../Component/Footer/Footer'
import Navbar from '../Component/Navbar/Navbar'
import './AboutUs.css'
import Customer from './Customer/Customer'
import Founded from './Founded/Founded'
import ImagePromo from './ImagePromo/ImagePromo'
import Quality from './Quality/Quality'

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <div>
            <Navbar/>
            <Founded/>
            <div className='about-bg-section-two'></div>
            <Quality/>
            <Customer/>
            <ImagePromo/>
            <Footer/>
        </div>
    )
}

export default AboutUs