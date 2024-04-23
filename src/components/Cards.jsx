import style from "./Cards.module.css"
import camiseta2 from "../assets/Images/camiseta2.png"
import camiseta3 from "../assets/Images/camiseta3.png"
import camiseta4 from "../assets/Images/camiseta4.png"

export const Cards = () => {
    return(
        <>
            <div className={style["center"]}>
                <card className={style["card-styling"]}>
                    <div className={style["center"]}>
                        <img src={camiseta2} alt="Camiseta Real Madrid"/>
                    </div>
                </card>
                <card className={style["card-styling"]}>
                    <div className={style["center"]}>
                        <img src={camiseta3} alt="Camiseta Real Madrid" />
                    </div>
                </card>
                <card className={style["card-styling"]}>
                    <div className={style["center"]}>
                        <img src={camiseta4} alt="Camiseta Real Madrid"/>
                    </div>
                </card>
            </div>
        </>
    )
}