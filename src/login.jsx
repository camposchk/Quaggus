import style from "./login.module.css"
import { InputLogin } from "./components/InputLogin"
import { YellowButton } from "./components/YellowButton"
import { LoginWith } from "./components/LoginWith"
import { SignUpBtn } from "./components/SignUpBtn"
import google from "./assets/Icons/google.png"
import facebook from "./assets/Icons/facebook.png"
import quagga from "./assets/quagga-3.png"

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
                <LoginWith text="Entrar com Google" image={google}/>
                <LoginWith text="Entrar com Facebook" image={facebook}/>
                <SignUpBtn text="Cadastre-se agora" />
            </div>
            <img src={quagga} className={style["image"]}/>
        </div>
    )
}
