import style from './App.module.css'
import { Navbar } from './components/Navbar'
import { MainCard } from './components/MainCard'

function App() {

  return (
    <main className={style["background"]}>
      <MainCard />
      <Navbar />
    </main>
  )
}

export default App
