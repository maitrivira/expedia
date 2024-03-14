import { useEffect } from "react"
import Footer from "../Component/Footer/Footer"
import Navbar from "../Component/Navbar/Navbar"
import Category from "./Category/Category"
import CategoryMobile from "./Category/CategoryMobile"
import MenuProducts from "./MenuProducts/MenuProducts"
import "./Products.css"

const Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Navbar from={2}/>
            <CategoryMobile />
            <div className="products">
                <Category />
                <MenuProducts />
            </div>
            <Footer />
        </div>
    )
}

export default Products
