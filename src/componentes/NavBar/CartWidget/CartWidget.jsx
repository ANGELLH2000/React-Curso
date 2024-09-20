import './CartWidget.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
function CartWidget({ items ,onClick}) {
    return (
        <>
            <div className='CartWidget' onClick={onClick}>
                <AiOutlineShoppingCart size={20} />
                <span>{items}</span>
            </div>
        </>
    )
}

export default CartWidget