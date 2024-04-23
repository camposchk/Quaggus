import style from "./login.module.css"
import { InputLogin } from "./components/InputLogin"

export default function Login() {
    return(
        <div className={style["background-gradient"]}>
            <div className={style["box-login"]}>
                <h1 className={style["login-text"]}>Login</h1>
                <InputLogin label="E-mail"/>
            </div>
        </div>
    )
}