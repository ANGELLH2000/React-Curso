import NavBar from './componentes/NavBar/NavBar'
import ProductPage from './componentes/Body/Pages/ProductPage/ProductPage'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NosotrosPage from './componentes/Body/Pages/NosotrosPage/NosotrosPage'
import InicioPage from './componentes/Body/Pages/InicioPage/InicioPage'
import TiendaPage from './componentes/Body/Pages/TiendaPage/TiendaPage'
import GlobalProvider from './componentes/Context/Conntext'
import CarritoPage from './componentes/Body/Pages/CarritoPage/CarritoPage'
import PedidoPage from './componentes/Body/Pages/PedidoPage/PedidoPage'

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <NavBar />
        <Routes >
          <Route index element={<InicioPage />} />
          <Route path="/Tienda" element={<Navigate to="/Tienda/Categoria/Todo" />} />
          <Route path='/Tienda/Categoria/:NombreCategoria' element={<TiendaPage />} />
          <Route path='/Tienda/Producto/:SKU' element={<ProductPage />} />
          <Route path='/Nosotros' element={<NosotrosPage />} />
          <Route path='/Checkout' element={<CarritoPage/>} />
          <Route path='/Pedido/:IdPedido' element={<PedidoPage/>} />
          <Route path='*' element={<><br /><br /><br /><br /><br /><br /><br /><h1>Error</h1></>} />
        </Routes>
      </GlobalProvider>

    </BrowserRouter >

  )
}

export default App
