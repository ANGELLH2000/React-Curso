import NavBar from './componentes/NavBar/NavBar'
import ProductPage from './componentes/Body/Pages/ProductPage/ProductPage'
import useCarrito from './componentes/Hooks/useCarrito'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import useCategorias from './componentes/Hooks/useCategorias'
import NosotrosPage from './componentes/Body/Pages/NosotrosPage/NosotrosPage'
import InicioPage from './componentes/Body/Pages/InicioPage/InicioPage'
import TiendaPage from './componentes/Body/Pages/TiendaPage/TiendaPage'
import useFetch from './componentes/Hooks/useFetch'

function App() {
  const { carrito, traerCarritoAlState, EliminarProducto, AumentarCantidad, RestarCantidad, AgregarProducto, ExistenciaDeProducto, cantAndTotal } = useCarrito()
  const { nombres } = useCategorias()
  const{dataProductos, loading}=useFetch()
  const data={dataProductos, loading}
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
        <Route path="/Tienda" element={<Navigate to="/Tienda/Categoria/Panadería" />} />
        <Route path='/Tienda/Categoria/:NombreCategoria' element={<TiendaPage carritoHook={carritoHook} data={data} />} />
        <Route path='/Tienda/Producto/:SKU' element={<ProductPage carritoHook={carritoHook}/>} />
        <Route path='/Nosotros' element={<NosotrosPage/>}/>
        <Route path='*' element={<><br /><br /><br /><br /><br /><br /><br /><h1>Error</h1></>} />
      </Routes>

    </BrowserRouter >

  )
}

export default App
