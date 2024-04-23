import style from './App.module.css'
import { Navbar } from './components/Navbar'
import { MainCard } from './components/MainCard'
import { Cards } from './components/Cards'

function App() {

  return (
    <main className={style["background"]}>
      <MainCard />
      <Cards />
      <Navbar />
    </main>
  )
}

export default App
