import './navBar.css';
import logo from '../../assets/logo.png';
import CartWidget from './CartWidget/CartWidget';
import { IoIosSearch } from "react-icons/io";
import CarritoLateral from '../Body/Carrito/CarritoLateral/CarritoLateral'
import { useEffect, useState } from 'react';

function NavBar_TopBar({ openCarritoLateral }) {
    return (
        <div className='fixed'>
            <nav>
                <div>
                    <img src={logo} alt="Logo de Dulce Tarta" />
                </div>
                <ul>
                    <li>
                        <a href="#">Inicio</a>
                        <span className='active'></span>
                    </li>
                    <li>
                        <a href="#">Tienda</a>
                        <span className='no-active'></span>
                    </li>
                    <li>
                        <a href="#">Nosotros</a>
                        <span className='no-active'></span>
                    </li>
                    <span className='barra'></span>
                    <div className='icons-navbar'>
                        <IoIosSearch size={20} />
                        <CartWidget items="2" onClick={openCarritoLateral} />
                    </div>
                </ul>
            </nav>
        </div>

    )
}
function NavBar() {
    const [visibleCart, setVisibleCart] = useState(false)

    const openCart = () => {
        setVisibleCart(true)
    }
    const closeCart = () => {
        setVisibleCart(false)
    }



    return (
        <>
            <NavBar_TopBar openCarritoLateral={openCart} />
            <CarritoLateral visible={visibleCart} closeCart={closeCart} />
        </>
    )
}





export default NavBar