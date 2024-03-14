import { useRef, useState } from "react";
import './Navbar.css'
import logoHorizontal from '/assets/image/brand/logo.png'
import arrowLeft from '/assets/image/others/arrow_left_black.png'
import { NavLink } from "react-router-dom"
import Textfield from "../Textfield/Textfield";
import { useTranslation } from 'react-i18next'
import indo from "/assets/image/others/indonesia.png"
import eng from "/assets/image/others/united-kingdom.png"

const Navbar = ({ from = 0 }) =>  {
    const navRef: any = useRef();
    const borderNavRef: any = useRef();
    var [isNavClicked, setNavClicked] = useState(true);
    const [isEnglish, setIsEnglish] = useState(true);
    const [t, i18n] = useTranslation("global");
    const [isSearchIconHide, setSearchIconHide] = useState(false);

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setIsEnglish(!isEnglish)
    }

	const showNavbar = () => {
		navRef.current.classList.toggle("slide");
        borderNavRef.current.classList.toggle("border-bottom-line");
        setNavClicked(!isNavClicked);
	};

    const showSearchbar = () => {
        setSearchIconHide(!isSearchIconHide)
    }

    function SetupSearch() {
        if (from == 2) {
            return(
                <div  style={{width: "100%"}}>
                    {
                        isNavClicked ? 
                        <div className="navbar" style={{margin: "-20px"}}>
                            <NavLink to="/">
                                <div className='nav-logo disable-smallscreen'>
                                    <img src={ logoHorizontal } alt="Logo" className="logo"/>
                                </div>
                            </NavLink>

                            <Textfield classTextfield="textfield-width"/>
                        </div>
                        :
                        <div className="navbar" style={{margin: 0}}>
                            <div className='nav-logo'>
                                <img src={ logoHorizontal } alt="Logo" className="logo"/>
                            </div>
                        </div>
                    }
                </div>
            )
        } else if (from == 3) {
            if (window.innerWidth <= 1024) {
                return (
                    <div className="navbar-detail">
                        <NavLink to="/products">
                            <div className={isSearchIconHide ? "nav-logo disable-smallscreen" : "nav-logo-back"}>
                                <img src={ arrowLeft } alt="arrowLeft" className={isNavClicked ? "logo disable-bigscreen" : "logo disable-smallscreen"} />
                            </div>
                        </NavLink>

                        <Textfield style={{width: "75%"}} classTextfield={isSearchIconHide ? "" : "disable-smallscreen"}/>
                        <button onClick={showSearchbar} style={{backgroundColor: "white"}}>
                            <i className={isNavClicked ? "fa fa-search search" : "fa fa-search search disable-smallscreen"} style={{fontSize: "24px", color: "#292D32", backgroundColor: "white"}}></i>
                        </button>
                    </div>
                )
            }
            return (
                <div className="navbar-detail">
                    <NavLink to="/">
                        <div className="nav-logo">
                            <img src={ logoHorizontal } alt="Logo" className={isNavClicked ? "logo disable-smallscreen" : "logo"}/>
                        </div>
                    </NavLink>

                    <Textfield style={{width: "75%"}} classTextfield="disable-smallscreen"/>
                    <button onClick={showSearchbar} className="nav-bg">
                        <i className={isNavClicked ? "fa fa-search search" : "fa fa-search search disable-smallscreen"} style={{fontSize: "24px", color: "#292D32"}}></i>
                    </button>
                </div>
            )
        }

        return(
            <div className="navbar" style={{margin: 0}}>
                <NavLink to="/">
                    <div className={isSearchIconHide ? "nav-logo disable-smallscreen" : "nav-logo"}>
                        <img src={ logoHorizontal } alt="Logo" className="logo"/>
                    </div>
                </NavLink>

                <Textfield style={{width: "75%"}} classTextfield={isSearchIconHide ? "" : "disable-smallscreen"}/>
                <button onClick={showSearchbar} className="nav-bg">
                    <i className={isNavClicked ? "fa fa-search search" : "fa fa-search search disable-smallscreen"} style={{fontSize: "24px", color: "#292D32"}}></i>
                </button>
            </div>
        );
    }

    return (
        <nav className={(from == 3 && !isNavClicked ? "border-bottom-line" : "")} ref={borderNavRef}>
            <div className="navbar">
                <SetupSearch />

                <ul className='nav-menu' ref={navRef}>
                    <li className='nav-menu-home'>
                        <NavLink to="/">{t("navbar.home")}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">{t("navbar.product")}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">{t("navbar.about")}</NavLink>
                    </li>
                    <li style={{position: "absolute", bottom: "100px"}}>
                        <div className="line"></div>
                        <button style={{marginTop: "15px"}} className="footer-bottom-text-left" onClick={() => handleChangeLanguage(isEnglish ? "en" : "id")}>
                            <div className="footer-bottom-image-left">
                                {
                                    isEnglish ? 
                                    <img src={ eng } alt="english" className="flag" /> 
                                    :
                                    <img src={ indo } alt="indo" className="flag" />
                                }
                            </div>
                            <span>{isEnglish ? "English" : "Indonesia"}</span>
                        </button>
                        <span style={{marginTop: "15px"}} className="footer-bottom-text-right">&copy; 2024 PT. Expedia Indonesia Group</span>
                    </li>
                </ul>

                <button onClick={showNavbar} className="button-toggle">
                    <div className='menu-toggle'>
                        <input type="checkbox"/>
                        <span style={{ backgroundColor: "black" }}></span>
                        <span style={{ backgroundColor: "black" }}></span>
                        <span style={{ backgroundColor: "black" }}></span>
                    </div>
                </button>
            </div>
        </nav>
    )
}

export default Navbar