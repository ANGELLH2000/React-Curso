import React, { useContext} from 'react'
import { IoAlertCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../../Context/Conntext';

function Datos({ total }) {
    const navigate = useNavigate()
    const{setPedidoLoading,carritoHook:{ActualizarLocalStorage}}=useContext(GlobalContext)
    function crearPedido() {
        setPedidoLoading(true)
        const timer= setTimeout(()=>{
            ActualizarLocalStorage([])
            setPedidoLoading(false)
            navigate("/Pedido/1223")
        },2000)
        return () => clearTimeout(timer);
    }
    return (
        <div className='datos'>
            <h2>Datos del Pedido</h2>
            <div className="form1">
                <div className="input">
                    <label htmlFor={"name"}>Nombre:</label>
                    <input type="text" id='name' placeholder='Ingresa tu nombre completo' />
                    <IoAlertCircleOutline className='alert' />
                </div>
                <div className="input">
                    <label htmlFor={"email"}>Correo:</label>
                    <input type="email" pattern=".+@example\.com" id='email' placeholder='Ingresa tu correo electrónico' />
                    <IoAlertCircleOutline className='alert' />
                </div>
                <div className="input">
                    <label htmlFor={"phone"}>Número de WhatsApp:</label>
                    <input type="tel" size="9" id='phone' placeholder='Ingresa tu número celular' />
                    <IoAlertCircleOutline className='alert' />
                </div>


            </div>
            <div className="form2">
                <div className="checks">
                    <h5>Entrega:</h5>
                    <div className="check">
                        <input type="radio" id="delivery" name="entrega" defaultValue="music" />
                        <label htmlFor="delivery">Delivery</label>
                    </div>
                    <div className="check">
                        <input type="radio" id="tienda" name="entrega" defaultValue="music" />
                        <label htmlFor="tienda">Recojo en Tienda</label>
                    </div>
                </div>

                <div className="input">
                    <label htmlFor={"email"}>Dirección o referencia: (Delivery)</label>
                    <input type="email" pattern=".+@example\.com" id='email' placeholder='Ingresa tu dirección para el envio' />
                    <IoAlertCircleOutline className='alert' />
                </div>
            </div>
            <div className="form3">
                <div className="input">
                    <label htmlFor="name">Comentarios adicionales: (Opcional)</label>
                    <input type="text" id='name' placeholder='Preguntar por Pedro Navaja' />
                    <IoAlertCircleOutline className='alert' />
                </div>

                <div className="input">
                    <label htmlFor="phone">Método de pago:</label>
                    <input type="tel" size="9" id='phone' defaultValue="Link de pago enviado por WhatsApp." style={{'userSelect':'none'}}/>
                </div>

                <div className="check">
                        <input type="checkbox" id="terminos" name="entrega" defaultValue="music" />
                        <label htmlFor={"terminos"}>Acepto Términos de uso o privacidad</label>
                </div>
            </div>
            <p className='datos-errones'></p>
            <div className="total">
                <p>Total</p>
                <p>S/. {total}</p>
            </div>
            <button onClick={() => crearPedido()}>
                Crear Pedido
            </button>

        </div>
    )
}

export default Datos
