import style from "./Login.module.css"
import { InputLogin } from "./components/InputLogin"
import { YellowButton } from "./components/YellowButton"
import { LoginWith } from "./components/LoginWith"
import { SignUpBtn } from "./components/SignUpBtn"

export default function Login() {
    return(
        <div className={style["background-gradient"]}>
            <div className={style["box-login"]}>
                <h1 className={style["login-text"]}>Login</h1>
                <InputLogin label="E-mail:"/>
                <InputLogin label="Senha:"/>
                <a className={style["forget-password"]}>Esqueci minha senha</a>
                <YellowButton text="Entrar"/>
            </div>
            <div className={style["division"]}>
                <hr className={style["line"]}></hr>
                <p className={style["ou"]}>ou</p>
                <hr className={style["line"]}></hr>
            </div>
            <div className={style["buttons"]}>
                <LoginWith text="Entrar com Google" image="src/assets/Icons/google.png"/>
                <LoginWith text="Entrar com Facebook" image="src/assets/Icons/facebook.png"/>
                <SignUpBtn text="Cadastre-se agora" />
            </div>
            <img src="src/assets/quagga-3.png" className={style["image"]}/>
        </div>
    )
}