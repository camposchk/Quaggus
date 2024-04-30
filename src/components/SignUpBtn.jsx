import style from "./SignUpBtn.module.css"

export const SignUpBtn = (props) => {
    return(
        <button className={style["btn-styling"]}>
            {props.text}
        </button>
    )
}