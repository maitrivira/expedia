import Brand from "./Brand/Brand"
import Company from "./Company/Company"
import Footer from "../Component/Footer/Footer"
import Header from "./Header/Header"
import Product from "./Product/Product"

const Home = () => {
    return (
        <div>
            <Header/>
            <Company/>
            <Product/>
            <Brand/>
            <Footer/>
        </div>
    )
}

export default Home