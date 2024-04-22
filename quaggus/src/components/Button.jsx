import style from "./Button.module.css"

export const Button = (props) => {
    return(
        <button className={style["btn-styling"]}>{props.text}</button>
    )
}