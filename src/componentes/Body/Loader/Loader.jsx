import './Loader.css'
function Loader({texto="Cargando"}) {
    return (
        <div className='load'>

            <svg className="container"><rect className="boxes"></rect></svg>

            <p>{texto}...</p>
        </div>
    )
}

export default Loader

