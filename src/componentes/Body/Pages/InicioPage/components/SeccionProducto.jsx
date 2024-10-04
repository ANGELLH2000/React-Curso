import { useRef } from "react";
import { useNavigate } from "react-router-dom"


const SeccionProducto = () => {
    const navigate = useNavigate();
    const imagen = useRef(null)
    const texto = useRef(null)
    function navegar() {
        console.log("Hol")
        if (texto.current && imagen.current) {
            texto.current.classList.add('efecto3-2');
            imagen.current.classList.add('efecto3-1')
            setTimeout(() => {
                navigate('/Tienda/Producto/2200201'); // Navegar después del retraso
            }, 1500);
        }else{
            navigate("/Tienda/Producto/2200201")
        }
    }

    return (
        <div className="SeccionProducto">
            <h3>Producto del mes</h3>
            <img ref={imagen} src="/tiramisu.jpg" alt="Postre del mes" />
            <div ref={texto} className="info">
                <div className="flex">
                    <h4>Tiramisú Dolce Vita</h4>
                    <p>
                        Este mes en Dulce Tarta te invitamos a probar nuestro Tiramisú Dolce Vita, un postre clásico italiano que combina
                        capas esponjosas de bizcocho de soletilla bañadas en café, con una suave crema de mascarpone y un toque de cacao.
                        Hecho con ingredientes frescos,es ideal para cualquier ocasión especial o para disfrutar de un dulce capricho.
                        <br />¡Disponible por tiempo limitado!
                    </p>
                </div>
                <button onClick={() => navegar()}>Ver Producto</button>
            </div>
        </div>
    )
}
export default SeccionProducto