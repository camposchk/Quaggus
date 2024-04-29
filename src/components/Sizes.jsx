import style from "./Sizes.module.css"
import palette from "../assets/Images/palette.png"

export const Sizes = () => {
    return(
        <>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="151" height="31" viewBox="0 0 151 31" fill="none" className={style["size-positioning"]}>
                    <rect width="30.2" height="30.2" fill="white" fillOpacity="0.75"/>
                    <text x="15.1" y="15.5" fill="black" textAnchor="middle" dominantBaseline="middle" className={style["font"]}>PP</text>
                    <rect x="30.2" width="30.2" height="30.2" fill="white" fillOpacity="0.65"/>
                    <text x="45.3" y="15.5" fill="black" textAnchor="middle" dominantBaseline="middle" className={style["font"]}>P</text>
                    <rect x="60.4" width="30.2" height="30.2" fill="white" fillOpacity="0.55"/>
                    <text x="75.5" y="15.5" fill="black" textAnchor="middle" dominantBaseline="middle" className={style["font"]}>M</text>
                    <rect x="90.6" width="30.2" height="30.2" fill="white" fillOpacity="0.45"/>
                    <text x="105.7" y="15.5" fill="black" textAnchor="middle" dominantBaseline="middle" className={style["font"]}>G</text>
                    <rect x="120.8" width="30.2" height="30.2" fill="white" fillOpacity="0.35"/>
                    <text x="135.9" y="15.5" fill="black" textAnchor="middle" dominantBaseline="middle" className={style["font"]}>GG</text>
                </svg>
                <p className={style["font"]} style={{marginTop: 28, marginLeft: 8}}>349,90 R$</p>
            </div>
        </>
    )
}