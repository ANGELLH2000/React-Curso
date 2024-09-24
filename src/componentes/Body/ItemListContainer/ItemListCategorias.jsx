import CategoryCart from "../Product/ProductCart/CategoryCart"

function ItemListCategorias({ categorias }) {
    return (
        <>
            {categorias.map(
                categoriaData => (
                    <CategoryCart key={categoriaData.Id} categoriaData={categoriaData} />

                )
            )}
        </>
    )
}

export default ItemListCategorias
