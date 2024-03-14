import "./Category.css"
import Datas from "../../Data/data.json"
import { useState } from "react"

const CategoryMobile = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };
    
    return (
        <div className="product-items-menu">
            <div className="scrollable-tabs">
                <ul>
                    {
                        Datas.map( (data, index) => {
                            return (
                                <li>
                                    <a href={`#${data.productL0.name}`} onClick={() => handleTabClick(index)} className={`category-title3 ${activeTab === index ? "active" : ""}`}>{data.productL0.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
       
    )
}

export default CategoryMobile