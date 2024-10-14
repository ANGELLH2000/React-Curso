import Datos from './components/Datos';
import Costos from './components/Costos';
import './PedidoPage.css'
import { FaCheck } from "react-icons/fa6";
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../Context/Conntext';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Loader from '../../Loader/Loader';

function PedidoPage() {
    const { IdPedido } = useParams();
    const { traerPedido, dataPedido, pagePedidoLoading } = useContext(GlobalContext)
    const [resp, setResp] = useState(false)

    useEffect(() => {
        traerPedido(IdPedido).then((u) => {
            setResp(u)
        })
    }, [IdPedido])


    if (resp === false) {
        return <Loader texto='Buscando pedido' />
    } else {
        if (dataPedido.Existencia) {
            // console.log("Si existe",dataPedido)
            
            ///// Funcion para el boton de Whatsapp
            function enviarWhatsApp() {
                // Número de teléfono de la tienda (en formato internacional, sin + ni espacios)
                const telefono = "51963060125";

                // Mensaje predeterminado con el número de pedido
                const mensaje = `Hola TartaDulce, hice un pedido y quisiera saber más sobre él. Mi número de pedido es: ${dataPedido.IdPedido}`;
                // Reemplazamos los espacios en blanco por %20 para que sea compatible con la URL
                const mensajeCodificado = encodeURIComponent(mensaje);

                // URL para abrir WhatsApp con el mensaje
                const url = `https://wa.me/${telefono}?text=${mensajeCodificado}`;

                // Abrir una nueva pestaña con la URL generada
                window.open(url, '_blank');
            }
            /////
            return (
                <div className='container-PedidosPage'>
                    <div className="Indicaciones">
                        <div className="general" id='title'>
                            <FaCheck className='hola' />
                            <h1>N° de Pedido: {dataPedido.IdPedido}</h1>
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
                            <button onClick={()=>enviarWhatsApp()}>Enviar mensaje por WhatsApp</button>
                        </div>
                    </div>
                    <div className="detalles">
                        <h3>Datos del Pedido</h3>
                        <h3>Costos del Pedido</h3>
                        <Datos data={dataPedido} />
                        <Costos data={dataPedido} />
                    </div>
                </div>
            )
        } else {
            //console.log("No existe")
            return <Navigate to={'/Error'} />
        }
    }






}

export default PedidoPage
