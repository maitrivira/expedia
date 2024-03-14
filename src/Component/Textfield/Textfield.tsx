import ResultSearch from '../ResultSearch/ResultSearch';
import './Textfield.css'
import { useTranslation } from 'react-i18next'
import { useState } from "react"
import Datas from "../../Data/data.json"
import { NavLink } from "react-router-dom"

type TextfieldProps = {
    style?: React.CSSProperties;
    classTextfield: string;
};

const Textfield = ({ style, classTextfield }: TextfieldProps) =>  {
    const [t] = useTranslation("global");
    const [filteredData, setFilteredData] = useState([]);
    const [_, setWordEntered] = useState("");

    const handleFilter = (event: any) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = Datas.map((value) => {
            return value.productL0.productL1
        })
        const productL1: any = newFilter.flatMap((data) => {
            return data.filter((newData) => {
                return newData.name.toLowerCase().includes(searchWord.toLowerCase());
            })
        })
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(productL1);
        }
    };

    return (
        <div style={style} className={classTextfield}>
            <div className="textfield-icon">
                <i className="fa fa-search" style={{fontSize: "18px"}}></i>
            </div>

            <div>
                <input type="search" name="search" 
                    placeholder = {t("search.title")}
                    onChange={handleFilter}
                    className='seach-textfield'
                    style={{
                        paddingLeft: "40px",
                        width: "100%", 
                        height: "40px", 
                        borderRadius: "8px",
                        borderWidth: "1px",
                        backgroundColor: "white",
                        color: "black",
                        borderColor: "#AEC2B6",
                        fontSize: "18px"
                    }}
                />
            </div>

            { filteredData.length != 0 && (
                <div style={{ position: "relative" }}>
                    <div style={{ position: "absolute", width: "100%" }}>
                        <div className="dataResult">
                            {
                                filteredData.flatMap((value: ProductDetail) => {
                                    return (
                                        <NavLink to={`/detail/${value.id}`}>
                                            <ResultSearch image={value.image} item={value.name}/>
                                        </NavLink>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Textfield