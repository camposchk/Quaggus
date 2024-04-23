import style from "./login.module.css"

export default function Login() {
    return(
        <div className={style["background-gradient"]}>
            <div className={style["box-login"]}>
                <h1 className={style["login-text"]}>Login</h1>
            </div>
        </div>
    )
}