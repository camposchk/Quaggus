import style from "./YellowButton.module.css"

export const YellowButton = (props) => {
    return(
        <button className={style["btn-styling"]}>{props.text}</button>
    )
}