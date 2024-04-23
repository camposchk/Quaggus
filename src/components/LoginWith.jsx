import style from "./LoginWith.module.css"

export const LoginWith = (props) => {
    return(
        <button className={style["btn-styling"]}>
            <img src={props.image} className={style["image"]}/>
            {props.text}
        </button>
    )
}