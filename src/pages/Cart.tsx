import CartProduct from '../components/CartProduct'
import { useCartContext } from '../context/CartContext'
import { CartItemType } from '../types/cartTypes'

const Cart = () => {

    const [cart, setCart] = useCartContext()

    return (
        <div>
            {cart?.items.map((item: CartItemType) => (
                <CartProduct productId={item.productId} quantity={item.quantity} key={item.productId} />
            ))}
        </div>
    )
}

export default Cart