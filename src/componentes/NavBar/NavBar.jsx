import './NavBar.css';
import logo from '../../assets/logo.png';
import CartWidget from './CartWidget/CartWidget';
import { IoIosSearch } from "react-icons/io";
import CarritoLateral from '../Body/Carrito/CarritoLateral/CarritoLateral'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../Context/Conntext';


function NavBar_TopBar({ openCarritoLateral, items,pagina }) {
    return (
        <div className='fixed'>
            <nav>
                <div>
                    <img src={logo} alt="Logo de Dulce Tarta" />
                </div>
                <ul>
                    <li>
                        <Link to={`/`}>Inicio</Link>
                        <span className={pagina==="Inicio"?'active':'no-active'}></span>
                    </li>
                    <li>
                        <Link to={`/Tienda`}>Tienda</Link>
                        <span className={pagina==="Tienda"?'active':'no-active'}></span>
                    </li>
                    <li>
                        <Link to={`/Nosotros`}>Nosotros</Link>
                        <span className={pagina==="Nosotros"?'active':'no-active'}></span>
                    </li>
                    <span className='barra'></span>
                    <div className='icons-navbar'>
                        <IoIosSearch size={20} />
                        <CartWidget items={items} onClick={openCarritoLateral} />
                    </div>
                </ul>
            </nav>
        </div>

    )
}
function NavBar() {
    const{pagina,carritoHook:{cantAndTotal},navbar_tools:{visibleCart,closeCart,openCart}}=useContext(GlobalContext)
    return (
        <>
            <NavBar_TopBar openCarritoLateral={openCart} items={cantAndTotal[2]} pagina={pagina} />
            <CarritoLateral visible={visibleCart} closeCart={closeCart}  />
        </>
    )
}





export default NavBar