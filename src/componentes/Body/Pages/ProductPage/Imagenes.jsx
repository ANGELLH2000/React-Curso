import scrAlt from '../../../../assets/img-cart.png';
import './ProductPage.css'
function Imagenes({FireData,data}) {
    let src2 = "https://images.unsplash.com/photo-1592178036182-5400889dfc74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDE3NDR8MHwxfHNlYXJjaHwxfHxDaGVlc2UlMjBHcmF0ZXJ8ZW58MHx8fHwxNzI0NjI0NjIyfDA&ixlib=rb-4.0.3&q=80&w=1080"
    return (
        <div className="imagenes">
            <div className="secundarios">
                <img src={scrAlt} alt="Imagen producto" />
                <img src={src2} alt="Imagen producto" />
                <img src={scrAlt} alt="Imagen producto" />
                <img src={scrAlt} alt="Imagen producto" />
                <img src={scrAlt} alt="Imagen producto" />
                <img src={scrAlt} alt="Imagen producto" />
                <img src={scrAlt} alt="Imagen producto" />
                <img src={scrAlt} alt="Imagen producto" />
                <img src={scrAlt} alt="Imagen producto" />
            </div>
            <div className="principal">
                <div className="imgPricipal">
                <img src={FireData.src} alt="Imagen producto" />
                </div>
                <div className="carrusel">
                    <button className='B-Active'></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </div>
    )
}

export default Imagenes
