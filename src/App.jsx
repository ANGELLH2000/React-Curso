import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/Body/ItemListContainer/ItemListContainer'
import useCarrito from './componentes/Hooks/hooks'

function App() {
  const { carrito, traerCarritoAlState, EliminarProducto, AumentarCantidad, RestarCantidad, AgregarProducto, ExistenciaDeProducto, cantAndTotal } = useCarrito()
  const carritoHook = {
    carrito,
    cantAndTotal,
    traerCarritoAlState,
    EliminarProducto,
    AumentarCantidad,
    RestarCantidad,
    AgregarProducto,
    ExistenciaDeProducto,
  }
  return (
    <>
      <NavBar carritoHook={carritoHook} />

      <ItemListContainer gretting="Bienvenido a la pagina" carritoHook={carritoHook} />



    </>
  )
}

export default App
