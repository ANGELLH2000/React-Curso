import { Link, useNavigate } from 'react-router-dom'
import ProductCart from '../Product/ProductCart/ProductCart'
import { productos } from '../../../data/data'
import { useEffect } from 'react';

function ItemListProductos({ AccionesBotones, categorias, param }) {
    const navigate = useNavigate();
    let categoriaBuscadaUrl = categorias.find((nombre) => nombre === param)
    useEffect(() => {
        !categoriaBuscadaUrl ? navigate('/Tienda') : null
    }, [categorias, param, navigate]);

    if (categoriaBuscadaUrl !== undefined) {
        return productos.filter(producto => producto["categoria"] === param).map((producto) => (
            <ProductCart
                key={producto.id}
                dataProducto={producto}
                AccionesBotones={AccionesBotones}
            />
        ));
    }

    return null; 
}
export default ItemListProductos
