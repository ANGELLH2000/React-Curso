import Datos from './components/Datos';
import Costos from './components/Costos';
import './PedidoPage.css'
import { FaCheck } from "react-icons/fa6";

function PedidPage() {
    
    return (
        <div className='container-PedidosPage'>
            <div className="Indicaciones">
                <div className="general" id='title'>
                    <FaCheck className='hola'/>
                    <h1>N° de Pedido: 12WEfwe!£e32</h1>
                    <h2>¡Pedido realizado con éxito!</h2>
                    <p>Gracias por confiar en DulceTarta. <br />Hemos recibido tu pedido exitosamente y estamos trabajando para que llegue a tus manos lo antes posible.</p>
                </div>
                <div className="indicacion">
                    <h2>¿Qué sigue?</h2>
                    <p>En unos minutos, te enviaremos un mensaje por WhatsApp con:</p>
                    <ul>
                        <li>Tu <p>link de pago</p> seguro para completar tu compra de manera rápida y sencilla.</li>
                        <li><p>Detalles de la entrega:</p> Si seleccionaste <p>Delivery</p>, te confirmaremos el monto total y te pediremos que nos envíes tu ubicación en tiempo real para asegurar una entrega precisa.</li>
                    </ul>
                    <p>Solo relájate y espera nuestro mensaje. ¡Nosotros nos encargamos del resto! <br />Si tienes alguna duda o necesitas ayuda, no dudes en contactarnos directamente al 987 654 321.</p>
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
