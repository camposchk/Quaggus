import style from "./CartButton.module.css"
import shopping_cart from "../assets/Icons/shopping_cart_black.png"

export const CartButton = () => {
    return(
        <>
            <button className={style["button"]}><img src={shopping_cart} alt="cart icon" className={style["cart-size"]} /></button>
        </>
    )
}