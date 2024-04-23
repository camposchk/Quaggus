import style from "./InputLogin.module.css"

export const InputLogin = (props) => {
    return(
        <>
            <p className={style["label-input"]}>{props.label}</p>
            <input className={style["input"]}></input>
        </>
    )
}
