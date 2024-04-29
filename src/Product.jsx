import style from "./Product.module.css"
import { MainCard } from './components/MainCard'
import { Cards } from './components/Cards'
import { Sizes } from "./components/Sizes"
import { CartButton } from "./components/CartButton"
import { Navbar } from './components/Navbar'
import back from "./assets/Icons/arrow_back.png"
import quagga from "./assets/Images/quagga.png"

export default function Product() {
    return(
        <div className={style["background"]}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <img src={back} alt="Camiseta Real Madrid" className={style["back"]}/>
                <img src={quagga} alt="Camiseta Real Madrid" className={style["logo"]}/>
            </div>
            <MainCard />
            <Cards />
            <Sizes />
            <CartButton />
            <Navbar />
        </div>
    )
}