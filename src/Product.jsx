import style from "./Product.module.css"
import { MainCard } from './components/MainCard'
import { Cards } from './components/Cards'
import { Sizes } from "./components/Sizes"
import { CartButton } from "./components/CartButton"
import { Navbar } from './components/Navbar'

export default function Product() {
    return(
        <div className={style["background"]}>
            <MainCard />
            <Cards />
            <Sizes />
            <CartButton />
            <Navbar />
        </div>
    )
}