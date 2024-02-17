import Navbarr from "./components/Navbar/Navbar"
import Footer from "./components/Navbar/Footer/Footer"
import Tareas from "./components/Navbar/Tareas/Tareas"
function App() {
  
//toda la logica del componente vive aqui antes del return
  return (
    <>
      <Navbarr/>
      <Tareas></Tareas>
      <Footer/>
    </>
  )
}

export default App
