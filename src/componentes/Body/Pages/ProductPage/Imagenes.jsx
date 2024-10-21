import scrAlt from '../../../../assets/img-cart.png';
import './ProductPage.css'
function Imagenes({ FireData }) {
    return (
        <div className="imagenes">
            <img src={FireData.src} alt="Imagen producto" />

        </div>
    )
}

export default Imagenes
