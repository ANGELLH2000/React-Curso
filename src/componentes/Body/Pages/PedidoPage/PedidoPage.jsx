import Datos from './components/Datos';
import Costos from './components/Costos';
import './PedidoPage.css'
import { FaCheck } from "react-icons/fa6";

function PedidPage() {
    return (
        <div className='container-PedidosPage'>
            <div className="Indicaciones">
                <div className="general">
                    <FaCheck className='hola'/>
                    <h1>N° de Pedido: 12WEfwe!£e32</h1>
                    <h2>¡Pedido realizado con éxito!</h2>
                    <p>Gracias por tu compra. Tu pedido ha sido creado correctamente.</p>
                </div>
                <div className="indicacion">
                    <h2>¿Qué sigue?</h2>
                    <p>Para proceder con el pago y coordinar los detalles del envío, puedes enviarnos tu número de pedido  por WhatsApp de dos maneras:</p>
                    <ul>
                        <li>Envía tu número de pedido manualmente a nuestro WhatsApp: 987 654 321.</li>
                        <li>O, si prefieres, simplemente haz clic en el botón de abajo y serás dirigido directamente a WhatsApp con un mensaje prellenado que incluye tu número de pedido.</li>
                    </ul>
                    <button>Enviar mensaje por WhatsApp</button>
                </div>
            </div>
            <div className="detalles">
                <h3>Datos del Pedido</h3>
                <h3>Costos del Pedido</h3>
                <Datos/>
                <Costos/>
            </div>
        </div>
    )
}

export default PedidPage
