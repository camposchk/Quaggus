import style from "./InputLogin.module.css"

export const InputLogin = (props) => {
    return(
        <div className={style["center"]}>
            <label className={style["label-input"]}>{props.label}</label>
            <input className={style["input"]}></input>
        </div>
    )
}
