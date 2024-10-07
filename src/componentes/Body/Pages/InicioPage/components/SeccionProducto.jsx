import { useRef } from "react";
import { useNavigate } from "react-router-dom"


const SeccionProducto = ({ FireInfo }) => {
    const navigate = useNavigate();
    const imagen = useRef(null)
    const texto = useRef(null)
    function navegar(SKU) {
        if (texto.current && imagen.current) {
            texto.current.classList.add('efecto3-2');
            imagen.current.classList.add('efecto3-1')
            setTimeout(() => {
                navigate(`/Tienda/Producto/${SKU}`); // Navegar después del retraso
            }, 1500);
        } else {
            navigate(`/Tienda/Producto/${SKU}`)
        }
    }

    return (
        <div className="SeccionProducto">
            <h3>Producto del mes</h3>
            <img ref={imagen} src="/tiramisu.jpg" alt="Postre del mes" />
            <div ref={texto} className="info">
                <div className="flex">
                    <h4>{FireInfo[0].Nombre}</h4>
                    <p dangerouslySetInnerHTML={{ __html: FireInfo[0].Description}}></p>
                </div>
                <button onClick={() => navegar(FireInfo[0].SKU)}>Ver Producto</button>
            </div>
        </div>
    )
}
export default SeccionProducto