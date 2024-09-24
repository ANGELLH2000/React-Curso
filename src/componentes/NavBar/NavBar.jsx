import './NavBar.css';
import logo from '../../assets/logo.png';
import CartWidget from './CartWidget/CartWidget';
import { IoIosSearch } from "react-icons/io";
import CarritoLateral from '../Body/Carrito/CarritoLateral/CarritoLateral'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function NavBar_TopBar({ openCarritoLateral, items }) {
    return (
        <div className='fixed'>
            <nav>
                <div>
                    <img src={logo} alt="Logo de Dulce Tarta" />
                </div>
                <ul>
                    <li>
                        <Link to={`/`}>Inicio</Link>
                        <span className='no-active'></span>
                    </li>
                    <li>
                        <Link to={`/Tienda`}>Tienda</Link>
                        <span className='active'></span>
                    </li>
                    <li>
                        <Link to={`/Nosotros`}>Nosotros</Link>
                        <span className='no-active'></span>
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
function NavBar({ carritoHook }) {
    const [visibleCart, setVisibleCart] = useState(false)
    const { cantAndTotal } = carritoHook
    const openCart = () => {
        setVisibleCart(true)
    }
    const closeCart = () => {
        setVisibleCart(false)
    }
    return (
        <>
            <NavBar_TopBar openCarritoLateral={openCart} items={cantAndTotal[2]} />
            <CarritoLateral visible={visibleCart} closeCart={closeCart} carritoHook={carritoHook} />
        </>
    )
}





export default NavBar