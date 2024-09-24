import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/Body/ItemListContainer/ItemListContainer'
import ProductPage from './componentes/Body/Pages/ProductPage/ProductPage'
import useCarrito from './componentes/Hooks/useCarrito'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import useCategorias from './componentes/Hooks/useCategorias'
import NosotrosPage from './componentes/Body/Pages/NosotrosPage/NosotrosPage'
import InicioPage from './componentes/Body/Pages/InicioPage/InicioPage'

function App() {
  const { carrito, traerCarritoAlState, EliminarProducto, AumentarCantidad, RestarCantidad, AgregarProducto, ExistenciaDeProducto, cantAndTotal } = useCarrito()
  const { nombres } = useCategorias()
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
  let nombres1 = ["Pez", "perro"]
  return (
    <BrowserRouter>
      <NavBar carritoHook={carritoHook} />
      <Routes >
        <Route index element={<InicioPage/>}/>
        <Route path="/Tienda" element={<ItemListContainer gretting="Bienvenido a la tienda" carritoHook={carritoHook} categoria={true} />} />
        <Route path="/Tienda/Categoria" element={<Navigate to="/Tienda" />} />
        <Route path='/Tienda/Categoria/:NombreCategoria' element={<ItemListContainer gretting="Categoria tipo" carritoHook={carritoHook} categoria={false} />} />
        <Route path='/Tienda/Producto/:SKU' element={<ProductPage/>} />
        <Route path='/Nosotros' element={<NosotrosPage/>} />
        <Route path='*' element={<><br /><br /><br /><br /><br /><br /><br /><h1>Error</h1></>} />
      </Routes>

    </BrowserRouter >

  )
}

export default App
