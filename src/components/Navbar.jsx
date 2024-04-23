import style from "./Navbar.module.css"
import home from "../assets/Icons/home.png"
import search from "../assets/Icons/search.png"
import favorites from "../assets/Icons/favorite.png"
import cart from "../assets/Icons/shopping_cart.png"
import user from "../assets/Icons/user.png"

export const Navbar = () => {
    return(
        <>
            <nav className={style["navbar-styling"]}>
                <img src={home} alt="home icon" className={style["icons-styling"]}/>
                <img src={search} alt="search icon" className={style["icons-styling"]}/>
                <img src={favorites} alt="favorites icon" className={style["icons-styling"]}/>
                <img src={cart} alt="cart icon" className={style["icons-styling"]}/>
                <img src={user} alt="user icon" className={style["icons-styling"]}/>
            </nav>
        </>
    )
}