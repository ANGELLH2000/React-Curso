import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/Body/ItemListContainer/ItemListContainer'
import CarritoLateral from './componentes/Body/Carrito/CarritoLateral/CarritoLateral'

function App() {
  return (
    <>
      <NavBar />
      <CarritoLateral />
      <ItemListContainer gretting="Bienvenido a la pagina" />

    </>
  )
}

export default App
