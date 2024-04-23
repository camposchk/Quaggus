import style from "./MainCard.module.css"
import camiseta1 from "../assets/Images/camiseta1.png"

export const MainCard = () => {
    return(
        <>
        <div className={style["center"]}>
            <card className={style["card-styling"]}>
                <div className={style["center"]}>
                    <img src={camiseta1} alt="Camiseta Real Madrid" style={{marginTop: 51}}/>
                </div>
            </card>
        </div>
        </>
    )
}