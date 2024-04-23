import style from "./Sizes.module.css"
import palette from "../assets/Images/palette.png"

export const Sizes = () => {
    return(
        <>
            <img src={palette} alt="sizes" className={style["size-positioning"]}/>
            {/* <p className={style["font"]}>PP</p>    */}
        </>
    )
}